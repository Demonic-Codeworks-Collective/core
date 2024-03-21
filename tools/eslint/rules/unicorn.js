const unicornRules = {
  'unicorn/filename-case': [
    'error',
    {
      case: 'kebabCase',
    },
  ],
  'unicorn/no-process-exit': 'warn',
  'unicorn/no-for-loop': 'warn',
  'unicorn/prefer-add-event-listener': 'off',
  'unicorn/prefer-dom-node-append': 'off',
  'unicorn/prefer-dom-node-remove': 'off',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prevent-abbreviations': [
    'error',
    {
      checkDefaultAndNamespaceImports: true,
      checkShorthandProperties: true,
      checkShorthandImports: true,
    },
  ],
  'unicorn/expiring-todo-comments': 'warn',
  'unicorn/prefer-modern-dom-apis': 'off',
  'unicorn/prefer-dom-node-text-content': 'off',
  'unicorn/prefer-dom-node-dataset': 'off',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/no-array-callback-reference': 'warn',
  'unicorn/no-null': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/explicit-length-check': [
    'error',
    { 'non-zero': 'not-equal' },
  ],
  'unicorn/prefer-ternary': 'off',
  'unicorn/prefer-default-parameters': 'off',
  'unicorn/consistent-destructuring': 'off',
  'unicorn/no-object-as-default-parameter': 'off',
  'unicorn/import-index': 'off',
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-export-from': [
    'error',
    { ignoreUsedVariables: true },
  ],
  'unicorn/relative-url-style': [
    'error',
    'always',
  ],
  'unicorn/prefer-json-parse-buffer': 'error',
  'unicorn/switch-case-braces': [
    'error',
    'avoid',
  ],
  'unicorn/no-unnecessary-polyfills': 'off',
};
export { unicornRules };
