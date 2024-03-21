const stylisticRules = {
  camelcase: [
    'error',
    { allow: ['^UNSAFE_'], ignoreDestructuring: false, properties: 'never' },
  ],
  'func-names': [
    'error',
    'as-needed',
  ],
  'new-cap': [
    'error',
    { capIsNew: false },
  ],
  'new-parens': 'error',
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-lonely-if': 'error',
  'no-multi-assign': 'error',
  'no-nested-ternary': 'error',
  'no-unneeded-ternary': 'error',
  'prefer-object-spread': 'error',
};
export { stylisticRules };
