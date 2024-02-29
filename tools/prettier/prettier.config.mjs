import vercel from '@vercel/style-guide/prettier';

/** @type {import('prettier').Config} */
const prettier = {
  ...vercel,
  plugins: [
    ...vercel.plugins,
    'prettier-plugin-prisma',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-multiline-arrays',
  ],
  multilineArraysWrapThreshold: 1,
};

export default prettier;
