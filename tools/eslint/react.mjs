import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import { reactConfig } from './configs/react/react-config.mjs';
import { perfectionistConfig } from './configs/perfectionist/perfectionist-config.mjs';
import { typescriptConfig } from './configs/ts/typescript-config.mjs';
import { ignores } from './configs/ignores.mjs';
import { files } from './configs/files.mjs';
import globals from 'globals';

const react = tseslint.config(
    {
        plugins: {
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
                cacheLifetime: {
                    glob: 'Infinity',
                },
                warnOnUnsupportedTypeScriptVersion: false,
                projectService: true,
            },
        },
        settings: {
            ...perfectionistConfig.settings,
        },
        rules: {
            ...reactConfig.rules,
            ...perfectionistConfig.rules,
        },
    },
    {
        files: ['**/*.js'],
        extends: [tseslint.configs.disableTypeChecked],
    },
);

export default react;
