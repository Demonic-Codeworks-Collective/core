import eslintReactPlugin from 'eslint-plugin-react';
import eslintReactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintReactRefreshPlugin from 'eslint-plugin-react-refresh';

import { addAtSymbolToRules } from './utils.mjs';
const react = {
    settings: {
        react: { version: 'detect' },
    },
    languageOptions: {
        ...eslintReactPlugin.configs.flat.recommended.languageOptions,
    },
    plugins: {
        '@react': eslintReactPlugin,
        '@react-hooks': eslintReactHooksPlugin,
        '@react-refresh': eslintReactRefreshPlugin,
    },
    rules: {
        ...addAtSymbolToRules(eslintReactPlugin.configs.recommended.rules),
        ...addAtSymbolToRules(eslintReactPlugin.configs['jsx-runtime'].rules),
        '@react/jsx-key': 'error',
        '@react/no-unsafe': 'off',
        '@react/prop-types': 'error',
        '@react/display-name': 'error',
        '@react/jsx-no-undef': 'error',
        '@react/jsx-uses-vars': 'error',
        '@react/no-deprecated': 'error',
        '@react/no-is-mounted': 'error',
        '@react/jsx-uses-react': 'error',
        '@react/no-string-refs': 'error',
        '@react/button-has-type': 'error',
        '@react/no-children-prop': 'error',
        '@react/no-find-dom-node': 'error',
        '@react/react-in-jsx-scope': 'error',
        '@react/jsx-no-target-blank': 'error',
        '@react/no-unknown-property': 'error',
        '@react-hooks/rules-of-hooks': 'error',
        '@react/no-unescaped-entities': 'error',
        '@react/require-render-return': 'error',
        '@react/jsx-no-duplicate-props': 'error',
        '@react/no-render-return-value': 'error',
        '@react/no-danger-with-children': 'error',
        '@react/jsx-no-comment-textnodes': 'error',
        '@react/no-direct-mutation-state': 'error',
        '@react/jsx-curly-spacing': [
            'error',
            { when: 'always', children: true },
        ],
        '@react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
            },
        ],
    },
};

export { react };
