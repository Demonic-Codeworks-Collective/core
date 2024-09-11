import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { comments } from './configs/comments.mjs';
import { ECMA_VERSION, EXCLUDE_PATTERNS, JAVASCRIPT_FILES } from './configs/constants.mjs';
import { imrt } from './configs/import.mjs';
import { js } from './configs/js.mjs';
import { noComments } from './configs/no-comments.mjs';
import { perfectionist } from './configs/perfectionist.mjs';
import { promise } from './configs/promise.mjs';
import { regexp } from './configs/regexp.mjs';
import { unicorn } from './configs/unicorn.mjs';

/**
 * @type {import('eslint').Linter.Config[]}
 */
const node = [
    {
        plugins: {
            '@prettier': eslintPrettierPlugin,
            ...js.plugins,
            ...perfectionist.plugins,
            ...comments.plugins,
            ...noComments.plugins,
            ...imrt.plugins,
            ...unicorn.plugins,
            ...regexp.plugins,
            ...promise.plugins,
        },
    },
    {
        ignores: [
            ...EXCLUDE_PATTERNS,
        ],
    },
    {
        files: [
            ...JAVASCRIPT_FILES,
        ],
    },
    {
        settings: {
            ...perfectionist.settings,
            ...imrt.settings.node,
        },
        languageOptions: {
            sourceType: 'module',
            parser: tseslint.parser,
            ecmaVersion: ECMA_VERSION,
            globals: {
                ...globals.es5,
                ...globals.node,
            },
        },
        rules: {
            '@prettier/prettier': 'error',
            ...js.rules,
            ...perfectionist.rules,
            ...comments.rules,
            ...noComments.rules,
            ...imrt.rules,
            ...unicorn.rules,
            ...regexp.rules,
            ...promise.rules,
        },
    },
    eslintConfigPrettier,
];

export default node;
