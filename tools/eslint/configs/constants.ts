export const { ECMA_VERSION, JAVASCRIPT_FILES, TYPESCRIPT_FILES } = {
    ECMA_VERSION: 'latest',
    TYPESCRIPT_FILES: [
        '**/*.?([m])ts?(x)',
    ],
    JAVASCRIPT_FILES: [
        '**/*.?([cm])js?(x)',
    ],
};

export const EXCLUDE_PATTERNS = [
    '**/node_modules',
    '**/dist',
    '**/package-lock.json',
    '**/yarn.lock',
    '**/pnpm-lock.yaml',
    '**/bun.lockb',
    'apps/*/.next',

    '**/output',
    '**/coverage',
    '**/temp',
    '**/.temp',
    '**/tmp',
    '**/.tmp',
    '**/.history',
    '**/.vitepress/cache',
    '**/.nuxt',
    '**/.next',
    '**/.vercel',
    '**/.changeset',
    '**/.idea',
    '**/.cache',
    '**/.output',
    '**/.vite-inspect',
    '**/.yarn',
    '.nx/',

    '**/CHANGELOG*.md',
    '**/*.min.*',
    '**/LICENSE*',
    '**/__snapshots__',
    '**/auto-import?(s).d.ts',
    '**/components.d.ts',

    '**/jest.config.js',
    '**/fixtures/**',
    '**/.docusaurus/**',
    '**/build/**',
    '**/*.config.{js,cjs,mjs}',
    '.storybook/*',
];
