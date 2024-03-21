import globals from 'globals';

const globalsValues = {
  ...globals.node,
  ...globals.es2021,
  ...globals.browser,
  ...globals.builtin,
  ...globals.serviceworker,
};

export { globalsValues };
