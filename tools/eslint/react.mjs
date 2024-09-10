import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import eslintPrettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { reactConfig } from './configs/react/react-config.mjs';
import { perfectionistConfig } from './configs/perfectionist/perfectionist-config.mjs';
import { typescriptConfig } from './configs/ts/typescript-config.mjs';
import { ignores } from './configs/ignores.mjs';
import { files } from './configs/files.mjs';
import globals from 'globals';

const react = tseslint.config(
    {
        plugins: {
            ['@prettier']: eslintPrettierPlugin,
            ...typescriptConfig.plugins,
            ...reactConfig.plugins,
            ...perfectionistConfig.plugins,
        },
    },
    {
        ignores,
    },
    {
        files,
    },
    {
        extends: [
            js.configs.recommended,
            tseslint.configs.eslintRecommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.recommendedTypeChecked,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        languageOptions: {
            ...reactConfig.languageOptions,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.es5,
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker,
                React: true,
                JSX: true,
            },
            parserOptions: {
                warnOnUnsupportedTypeScriptVersion: false,
                projectService: true,
                ecmaFeatures: {
                    jsx: true,
                },
                cacheLifetime: {
                    glob: 'Infinity',
                },
            },
        },
        settings: {
            ...perfectionistConfig.settings,
            ...reactConfig.settings,
        },
        rules: {
            '@prettier/prettier': 'error',
            ...reactConfig.rules,
            ...perfectionistConfig.rules,
        },
    },
    {
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked],
    },
    eslintConfigPrettier,
);

export default react;
