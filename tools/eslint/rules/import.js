const importRules = {
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-cycle': 'error',
  'import/no-default-export': 'error',
  'import/no-mutable-exports': 'error',
  'import/no-relative-packages': 'error',
  'import/no-self-import': 'error',
  'import/no-useless-path-segments': 'error',
  'simple-import/exports': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
  'import/order': [
    'error',
    {
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'never',
    },
  ],
  'simple-import/imports': [
    'error',
    {
      groups: [
        [
          '^react',
          '^@?\\w',
        ],
        ['^@(demonicattack/.*|$)'],
        ['^@(([\\/.]?\\w)|assets|test-utils)'],
        ['^\\u0000'],
        [
          '^\\.\\.(?!/?$)',
          '^\\.\\./?$',
        ],
        [
          '^\\./(?=.*/)(?!/?$)',
          '^\\.(?!/?$)',
          '^\\./?$',
        ],
        ['^.+\\.s?css$'],
      ],
    },
  ],
};

export { importRules };
