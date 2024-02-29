import prettier from '@demonicattack/prettier';

/** @type {import('prettier').Options} */
const config = {
  ...prettier,
  plugins: [...prettier.plugins],
};
export default config;
