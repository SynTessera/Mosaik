#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const prompts = require("prompts");

const args = process.argv.slice(2); // e.g. ['component']

async function createComponent() {
    const { theme, component } = await prompts([
        {
            type: "text",
            name: "theme",
            message: "Theme name:",
            initial: "default"
        },
        {
            type: "text",
            name: "component",
            message: "Component name:",
        },
    ]);

    const dir = path.resolve(`src/themes/${theme}`);
    const filePath = path.join(dir, `${component}.tsx`);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    if (!theme || !component) throw new Error('Invalid arguments.');
    
    const contents = `import clsx from "clsx";  
import { PropsWithChildren } from 'react';

export const ${component} = ({ children, className, ...props }: PropsWithChildren<{className?: string}>) => {
  return (
    <div className={clsx("${component}", className)} {...props}>
      {children}
    </div>
  );
};`;

    if (fs.existsSync(filePath)) 
        throw new Error('File exists. Not overwriting.');

    fs.writeFileSync(filePath, contents);
    console.log(`✅ Created: ${filePath}`);
}

async function main() {
    const command = args[0];

    switch (command) {
        case "component":
            await createComponent();
            break;

        default:
            console.log("❌ Unknown command");
            console.log("Available commands: component");
            break;
    }
}

main();
