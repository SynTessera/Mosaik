module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Ensure className prop is added for themeable components",
    },
  },
  create(context) {
    // Utility function to check the node (function or arrow function)
    function checkNodeForClassNameUsage(node) {
      const propsParam = node.params && node.params[0];
      if (!propsParam || propsParam.type !== "ObjectPattern") return;

      const hasClassName = propsParam.properties.some(
        (prop) => prop.key && prop.key.name === "className"
      );

      if (!hasClassName) {
        context.report({
          node,
          severity: 1,
          message: "You might want to add an optional className prop.",
        });
        return;
      }



      return {
        // For function declarations: function MyComp({ className }) { ... }
        FunctionDeclaration(node) {
          checkNodeForClassNameUsage(node);
        },

        // For arrow functions or function expressions assigned to variables:
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
    };

    return {
      // For function declarations: function MyComp({ className }) { ... }
      FunctionDeclaration(node) {
        checkNodeForClassNameUsage(node);
      },

      // For arrow functions or function expressions assigned to variables:
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
  }

}
