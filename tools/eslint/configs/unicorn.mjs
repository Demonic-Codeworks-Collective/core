import eslintUnicornPlugin from 'eslint-plugin-unicorn';

import { addAtSymbolToRules } from './utils.mjs';
const unicorn = {
    plugins: {
        '@unicorn': eslintUnicornPlugin,
    },
    rules: {
        ...addAtSymbolToRules(eslintUnicornPlugin.configs['flat/recommended'].rules),
        '@unicorn/no-for-loop': 'warn',
        '@unicorn/no-process-exit': 'warn',
        '@unicorn/prefer-string-raw': 'off',
        '@unicorn/expiring-todo-comments': 'warn',
        '@unicorn/no-unnecessary-polyfills': 'off',
        '@unicorn/prefer-json-parse-buffer': 'error',
        '@unicorn/consistent-function-scoping': 'warn',
        '@unicorn/no-array-callback-reference': 'warn',
        '@unicorn/switch-case-braces': [
            'error',
            'avoid',
        ],
        '@unicorn/relative-url-style': [
            'error',
            'always',
        ],
        '@unicorn/prefer-export-from': [
            'error',
            { ignoreUsedVariables: true },
        ],
        '@unicorn/explicit-length-check': [
            'error',
            { 'non-zero': 'not-equal' },
        ],
        '@unicorn/filename-case': [
            'error',
            {
                case: 'kebabCase',
            },
        ],
        '@unicorn/prevent-abbreviations': [
            'error',
            {
                checkShorthandImports: true,
                checkShorthandProperties: true,
                checkDefaultAndNamespaceImports: true,
            },
        ],
    },
};

export { unicorn };
