import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import mosaik from 'eslint-plugin-mosaik';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      mosaik,
    },
  },
  {
    files: ["**/*.tsx", "**/*.ts"],
    // plugins: {
    //   mosaik,
    // },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      // "mosaik/require-classname-merge": 1,  
      // "mosaik/require-classname-param": 2
    },
  },
  {
    files: ["**/themes/**/*.tsx"],
    rules: {
      "mosaik/require-classname-merge": 1,
      "mosaik/require-classname-param": 1
    },
  },
];

export default eslintConfig;
