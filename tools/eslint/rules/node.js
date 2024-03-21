const nodeRules = {
  'n/no-unsupported-features/es-builtins': 'off',
  'n/no-unsupported-features/es-syntax': 'off',
  'n/no-unsupported-features/node-builtins': 'off',
  'n/no-unpublished-require': 'off',
  'n/no-unpublished-import': 'off',
  'n/no-extraneous-require': 'off',
  'n/no-extraneous-import': 'off',
  'n/no-missing-require': 'off',
  'n/prefer-global/buffer': [
    'error',
    'never',
  ],
  'n/prefer-global/process': [
    'error',
    'never',
  ],
  'n/prefer-global/console': [
    'error',
    'always',
  ],
  'n/prefer-global/text-decoder': [
    'error',
    'always',
  ],
  'n/prefer-global/text-encoder': [
    'error',
    'always',
  ],
  'n/prefer-global/url-search-params': [
    'error',
    'always',
  ],
  'n/prefer-global/url': [
    'error',
    'always',
  ],
  'n/prefer-promises/dns': 'error',
  'n/prefer-promises/fs': 'error',
  'n/no-path-concat': 'error',
  'n/no-new-require': 'error',
  'n/no-process-exit': 'off',
};

export { nodeRules };
