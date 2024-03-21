/** @type {import('prettier').Config} */
const prettier = {
  endOfLine: "lf",
  tabWidth: 2,
  printWidth: 80,
  useTabs: false,
  singleQuote: true,
  plugins: [
    "prettier-plugin-packagejson",
    "prettier-plugin-prisma",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-multiline-arrays",
  ],
  multilineArraysWrapThreshold: 1,
};

export { prettier };
