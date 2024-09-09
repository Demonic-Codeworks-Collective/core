/**
 * @type { import("./types/configs").TIgnores}
 */
const ignores = [
    '**/jest.config.js',
    '**/node_modules/**',
    '**/dist/**',
    '**/fixtures/**',
    '**/coverage/**',
    '**/jest.config.js',
    '**/__snapshots__/**',
    '**/.docusaurus/**',
    '**/build/**',
    '.next/*',
    '**/*.config.{js,cjs,mjs}',
    '.storybook/*',
    '.nx/',
    '.yarn/',
    '.nx/*',
    '.yarn/*',
];

export { ignores };
