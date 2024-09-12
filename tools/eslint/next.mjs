import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslintJsPlugin from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

import { comments } from './configs/comments.mjs';
import { ECMA_VERSION, EXCLUDE_PATTERNS, JAVASCRIPT_FILES, TYPESCRIPT_FILES } from './configs/constants.mjs';
import { imrt } from './configs/import.mjs';
import { js } from './configs/js.mjs';
import { jsxA11y } from './configs/jsx-a11y.mjs';
import { noComments } from './configs/no-comments.mjs';
import { perfectionist } from './configs/perfectionist.mjs';
import { preferArrowFunctions } from './configs/prefer-arrow-functions.mjs';
import { promise } from './configs/promise.mjs';
import { react } from './configs/react.mjs';
import { regexp } from './configs/regexp.mjs';
import { tailwind } from './configs/tailwind.mjs';
import { ts } from './configs/ts.mjs';
import { unicorn } from './configs/unicorn.mjs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });
const nxt = tseslint.config(
    ...fixupConfigRules([
        ...compat.extends('plugin:@next/next/recommended'),
        ...compat.extends('plugin:@next/next/core-web-vitals'),
    ]),
    {
        plugins: {
            '@prettier': eslintPrettierPlugin,
            ...js.plugins,
            ...ts.plugins,
            ...react.plugins,
            ...perfectionist.plugins,
            ...comments.plugins,
            ...noComments.plugins,
            ...imrt.plugins,
            ...unicorn.plugins,
            ...regexp.plugins,
            ...promise.plugins,
            ...jsxA11y.plugins,
            ...tailwind.plugins,
            ...preferArrowFunctions.plugins,
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
            ...TYPESCRIPT_FILES,
        ],
    },
    {
        settings: {
            ...perfectionist.settings,
            ...react.settings,
            ...imrt.settings.react,
            ...imrt.settings.ts,
        },
        extends: [
            eslintJsPlugin.configs.recommended,
            tseslint.configs.eslintRecommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        rules: {
            '@prettier/prettier': 'error',
            ...js.rules,
            ...ts.rules,
            ...perfectionist.rules,
            ...comments.rules,
            ...noComments.rules,
            ...imrt.rules,
            ...unicorn.rules,
            ...regexp.rules,
            ...promise.rules,
            ...react.rules,
            ...jsxA11y.rules,
            ...tailwind.rules,
            ...preferArrowFunctions.rules,
        },
        languageOptions: {
            ...react.languageOptions,
            ...jsxA11y.languageOptions,
            sourceType: 'module',
            ecmaVersion: ECMA_VERSION,
            globals: {
                ...globals.es5,
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker,
                JSX: true,
                React: true,
            },
            parserOptions: {
                projectService: true,
                warnOnUnsupportedTypeScriptVersion: false,
                ecmaFeatures: {
                    jsx: true,
                },
                cacheLifetime: {
                    glob: 'Infinity',
                },
            },
        },
    },
    {
        rules: {
            '@import/no-default-export': 'off',
            '@react/react-in-jsx-scope': 'off',
            '@react-refresh/only-export-components': 'off',
        },
        files: [
            'src/app/**/{page,layout,not-found,error,loading}.tsx',
            'src/app/{sitemap,robots}.ts',
            'app/**/{page,layout,not-found,error,loading}.tsx',
            'app/{sitemap,robots}.ts',
            'middleware.ts',
        ],
    },
    {
        files: [
            '**/*.d.ts',
        ],
        rules: {
            '@unicorn/prevent-abbreviations': 'off',
            '@no-commented-code/no-commented-code': 'off',
        },
    },
    {
        extends: [tseslint.configs.disableTypeChecked],
        files: [
            ...JAVASCRIPT_FILES,
        ],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },

    eslintConfigPrettier,
);

export default nxt;
