const reactRules = {
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/button-has-type': 'warn',
  'react/function-component-definition': 'warn',
  'react/hook-use-state': 'warn',
  'react/jsx-boolean-value': 'warn',
  'react/jsx-curly-brace-presence': 'warn',
  'react/jsx-fragments': 'warn',
  'react/jsx-no-leaked-render': 'warn',
  'react/jsx-no-target-blank': [
    'error',
    {
      allowReferrer: true,
    },
  ],
  'react/jsx-no-useless-fragment': [
    'warn',
    { allowExpressions: true },
  ],
  'react/jsx-pascal-case': 'warn',
  'react/no-array-index-key': 'warn',
  'react/no-unstable-nested-components': 'error',
  'react/self-closing-comp': 'warn',
};

export { reactRules };
