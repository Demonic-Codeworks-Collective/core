const ignores = {
  files: [
    '**/node_modules/**',
    '**/build/**',
    '**/dist/**',
    '**/coverage/**',
    '**/es/**',
    '**/lib/**',
    '**/jest.config.js',
    '**/node_modules/**',
    '**/dist/**',
    '**/fixtures/**',
    '**/coverage/**',
    '**/__snapshots__/**',
    '**/.docusaurus/**',
    '**/build/**',
    '**/*.config.{js,cjs,mjs}',
    '**/*.config.{node,next,react,typescript}.{js,cjs,mjs}',
    '!**/eslint.config.{js,cjs,mjs}',
  ],
};

export { ignores };
