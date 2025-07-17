module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Ensure className prop is declared, typed, and merged with clsx in JSX",
    },
    fixable: "code",
  },
  create(context) {
    const sourceCode = context.getSourceCode();

    // Check if the param has 'className' in destructuring pattern
    function hasClassNameInDestructuring(param) {
      if (!param || param.type !== "ObjectPattern") return false;
      return param.properties.some(
        (prop) =>
          prop.type === "Property" &&
          prop.key &&
          prop.key.name === "className"
      );
    }

    // Check if param has typeAnnotation with className property (supports Identifier or ObjectPattern)
    function hasClassNameInTypeAnnotation(param) {
      if (!param || !param.typeAnnotation) return false;
      const typeAnnotation = param.typeAnnotation.typeAnnotation;
      if (!typeAnnotation || typeAnnotation.type !== "TSTypeLiteral") return false;
      return typeAnnotation.members.some(
        (member) =>
          member.type === "TSPropertySignature" &&
          member.key.type === "Identifier" &&
          member.key.name === "className"
      );
    }

    // Fix to add className to destructured props
    function fixAddClassNameToDestructuring(fixer, param) {
      if (param.type !== "ObjectPattern") return null;
      if (param.properties.length === 0) return null;
      const lastProp = param.properties[param.properties.length - 1];
      return fixer.insertTextAfter(lastProp, ",\n  className");
    }

    function fixAddClsxImportIfMissing(fixer) {
      const sourceCode = context.getSourceCode();
      const importStatements = sourceCode.ast.body.filter(
        (node) => node.type === "ImportDeclaration"
      );

      // Check if any import source is "clsx"
      const hasClsxImport = importStatements.some(
        (imp) => imp.source.value === "clsx"
      );

      if (hasClsxImport) {
        return null; // no fix needed
      }

      // Insert import at top of file, before first import or at start if none
      if (importStatements.length > 0) {
        const firstImport = importStatements[0];
        return fixer.insertTextBefore(firstImport, 'import clsx from "clsx";\n');
      } else {
        // No imports, insert at very top
        return fixer.insertTextBeforeRange([0, 0], 'import clsx from "clsx";\n');
      }
    }

    function fixAddClassNameToTypeAnnotation(fixer, param) {
      const typeLit = param.typeAnnotation.typeAnnotation;

      if (typeLit.members.length === 0) {
        // Insert before closing }
        const insertPos = typeLit.range[1] - 1;
        return fixer.insertTextBeforeRange(
          [insertPos, insertPos],
          "\n    className?: string;\n"
        );
      }

      const lastMember = typeLit.members[typeLit.members.length - 1];

      // Insert after the last member with a semicolon, newline, and new property
      // Make sure lastMember has a semicolon or add one if missing
      const textAfterLastMember = sourceCode.getText(lastMember);

      // If lastMember does not end with semicolon, add it first
      const endsWithSemicolon = textAfterLastMember.trimEnd().endsWith(";");

      const semicolonToAdd = endsWithSemicolon ? "" : ";";

      return fixer.insertTextAfter(
        lastMember,
        `${semicolonToAdd}\n  className?: string;`
      );
    }

    function fixJSXClassNames(fixer, funcNode) {
      const fixes = [];

      // Find all JSXAttributes named className
      function findClassNameAttributes(node) {
        const results = [];
        function visit(n) {
          if (!n || typeof n !== "object") return;
          if (n.type === "JSXAttribute" && n.name.name === "className") {
            results.push(n);
            return;
          }
          for (const key in n) {
            if (key === "parent") continue;
            const child = n[key];
            if (Array.isArray(child)) {
              child.forEach(visit);
            } else if (child && typeof child === "object") {
              visit(child);
            }
          }
        }
        visit(node);
        return results;
      }

      const classNameAttrs = findClassNameAttributes(funcNode);
      for (const attr of classNameAttrs) {
        if (!attr.value) continue;

        // Handle string literal case:
        if (attr.value.type === "Literal" && typeof attr.value.value === "string") {
          fixes.push(
            fixer.replaceText(
              attr,
              `className={clsx("${attr.value.value}", className)}`
            )
          );
          break;
        }

        // Handle expression case:
        if (
          attr.value.type === "JSXExpressionContainer" &&
          attr.value.expression.type === "CallExpression" &&
          attr.value.expression.callee.name === "clsx"
        ) {
          const clsxArgs = attr.value.expression.arguments;
          const sourceText = sourceCode.getText(attr.value.expression);

          // Check if 'className' argument already exists
          const hasClassNameArg = clsxArgs.some(
            (arg) =>
              arg.type === "Identifier" && arg.name === "className"
          );

          if (!hasClassNameArg) {
            // Insert ', className' before the closing ')'
            const lastArg = clsxArgs[clsxArgs.length - 1];
            const insertPos = lastArg.range[1];
            fixes.push(
              fixer.insertTextAfterRange([insertPos, insertPos], ", className")
            );
          }
          break;
        }
      }
      return fixes;
    }

    function paramHasClassName(param) {
      if (!param) return false;

      switch (param.type) {
        case "TSTypeLiteral":
          return param.members.some(
            (m) =>
              m.type === "TSPropertySignature" &&
              ((m.key.type === "Identifier" && m.key.name === "className") ||
                (m.key.type === "Literal" && m.key.value === "className"))
          );

        case "TSTypeReference":
          // param could be a reference to a named type or a generic type.
          // For example, if param.typeName.name is "SomeType", you might not resolve it here.
          // But if it has typeParameters, recurse:
          if (param.typeParameters) {
            return param.typeParameters.params.some(paramHasClassName);
          }
          return false;

        case "TSIntersectionType":
          // In case the param is an intersection, check each member
          return param.types.some(paramHasClassName);

        case "TSUnionType":
          // Similarly, for unions
          return param.types.some(paramHasClassName);

        default:
          // fallback: check the raw text
          try {
            const text = sourceCode.getText(param);
            return text.includes("className");
          } catch {
            return false;
          }
      }
    }



    function fixAddClassNameToPropsWithChildren(fixer, typeAnnotation) {
      if (!typeAnnotation.typeParameters) {
        // No generic param at all — add it once after PropsWithChildren
        return [fixer.insertTextAfterRange([typeAnnotation.range[1], typeAnnotation.range[1]], `<{ className?: string }>`)];
      }

      // Generic param exists
      const param = typeAnnotation.typeParameters.params[0];
      console.log("GENERIC ", param);
      if (param.type === "TSTypeLiteral") {
        const hasClassName = paramHasClassName(param)
        if (!hasClassName) {
          // Insert className inside existing object literal param
          if (param.members.length === 0) {
            // Insert inside empty object literal before }
            return fixer.insertTextBeforeRange([param.range[1] - 1, param.range[1] - 1], `className?: string;`);
          } else {
            const lastMember = param.members[param.members.length - 1];
            const endsWithSemicolon = sourceCode.getText(lastMember).trimEnd().endsWith(";");
            return fixer.insertTextAfter(
              lastMember,
              `${endsWithSemicolon ? "" : ";"}\n  className?: string;`
            );
          }
        }
      }

      // Already has className in generic param — do nothing
      return null;
    }




    function findJSXClassNameAttributes(node) {
      const results = [];

      function visitor(n) {
        if (!n || typeof n !== "object") return;
        if (n.type === "JSXAttribute" && n.name.name === "className") {
          results.push(n);
          return;
        }

        for (const key of Object.keys(n)) {
          if (key === "parent") continue; // skip circular reference
          const child = n[key];
          if (Array.isArray(child)) {
            child.forEach(visitor);
          } else if (child && typeof child === "object") {
            visitor(child);
          }
        }
      }

      visitor(node);
      return results;
    }



    function checkNodeForClassNameUsage(node) {
      const propsParam = node.params && node.params[0];
      if (!propsParam) return;

      // 1. Check if param is typed with PropsWithChildren<>
      let isPropsWithChildren = false;
      let typeRefNode = null;
      if (propsParam.typeAnnotation && propsParam.typeAnnotation.typeAnnotation.type === "TSTypeReference") {
        typeRefNode = propsParam.typeAnnotation.typeAnnotation;
        if (typeRefNode.typeName.type === "Identifier" && typeRefNode.typeName.name === "PropsWithChildren") {
          isPropsWithChildren = true;
        }
      }

      const hasClassNameInPattern = hasClassNameInDestructuring(propsParam);
      const hasClassNameInType = hasClassNameInTypeAnnotation(propsParam) || paramHasClassName(propsParam.typeAnnotation)

      const funcText = sourceCode.getText(node);
      const usesClassNameInJsx = funcText.includes("className=");
      const usesClsxMerge = /className=\{clsx\([^)]*className[^)]*\)\}/.test(funcText);

      const fixes = [];

      if (isPropsWithChildren && !hasClassNameInType) {
        fixes.push((fixer) => fixAddClassNameToPropsWithChildren(fixer, typeRefNode));
      } else {
        if (propsParam.type === "ObjectPattern" && !hasClassNameInPattern) {
          fixes.push((fixer) => fixAddClassNameToDestructuring(fixer, propsParam));
        }

        if (
          (propsParam.type === "Identifier" || propsParam.type === "ObjectPattern") &&
          propsParam.typeAnnotation &&
          propsParam.typeAnnotation.typeAnnotation.type === "TSTypeLiteral" &&
          !hasClassNameInType
        ) {
          fixes.push((fixer) => fixAddClassNameToTypeAnnotation(fixer, propsParam));
        }
      }

      if (
        (hasClassNameInPattern || hasClassNameInType || isPropsWithChildren) &&
        usesClassNameInJsx &&
        !usesClsxMerge
      ) {
        fixes.push((fixer) => fixJSXClassNames(fixer, node));
        fixes.push((fixer) => fixAddClsxImportIfMissing(fixer));
      }

      if (fixes.length === 0) {
        return;
      }

      context.report({
        node,
        message:
          "Ensure `className` prop is declared, typed, and merged with clsx in JSX.",
        fix(fixer) {
          return fixes.flatMap((fix) => {
            const result = fix(fixer);
            return Array.isArray(result) ? result : [result];
          });
        },
      });
    }


    return {
      FunctionDeclaration(node) {
        checkNodeForClassNameUsage(node);
      },
      VariableDeclarator(node) {
        const init = node.init;
        if (
          init &&
          (init.type === "ArrowFunctionExpression" ||
            init.type === "FunctionExpression")
        ) {
          checkNodeForClassNameUsage(init);
        }
      },
    };
  },
};
