const regExpRules = {
  'regexp/no-super-linear-move': 'off',
  'regexp/order-in-character-class': 'off',
  'regexp/sort-character-class-elements': 'off',
  'regexp/match-any': [
    'error',
    {
      allows: [
        'dotAll',
        '[\\S\\s]',
      ],
    },
  ],
  'regexp/strict': 'off',
  'regexp/no-useless-flag': [
    'error',
    { strictTypes: false },
  ],
  'regexp/prefer-lookaround': 'off',
  'regexp/prefer-named-capture-group': 'off',
  'regexp/require-unicode-regexp': 'off',
  'regexp/require-unicode-sets-regexp': 'off',
};

export { regExpRules };
