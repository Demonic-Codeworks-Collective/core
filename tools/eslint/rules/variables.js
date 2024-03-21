const variablesRules = {
  'no-label-var': 'error',
  'no-undef-init': 'error',
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
};
export { variablesRules };
