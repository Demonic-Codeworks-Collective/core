const commentsRules = {
  'eslint-comments/require-description': 'error',
  'eslint-comments/no-aggregating-enable': 'error',
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-unlimited-disable': 'error',
  'eslint-comments/no-unused-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
  'eslint-comments/disable-enable-pair': [
    'error',
    { allowWholeFile: true },
  ],
};

export { commentsRules };
