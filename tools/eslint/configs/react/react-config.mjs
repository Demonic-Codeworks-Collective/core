import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
/**
 * @type { import('../types/configs').TConfig }
 */
const reactConfig = {
    plugins: {
        ['@react']: react,
        ['@react-hooks']: reactHooks,
        ['@react-refresh']: reactRefresh,
    },
    rules: {
        '@react-hooks/rules-of-hooks': 'error',
        '@react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: '(useMyCustomHook|useMyOtherCustomHook)',
            },
        ],
        '@react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        '@react/jsx-curly-spacing': [
            'error',
            { when: 'always', children: true },
        ],
        '@react/display-name': 'error',
        '@react/jsx-key': 'error',
        '@react/jsx-no-comment-textnodes': 'error',
        '@react/jsx-no-duplicate-props': 'error',
        '@react/jsx-no-target-blank': 'error',
        '@react/jsx-no-undef': 'error',
        '@react/jsx-uses-react': 'error',
        '@react/jsx-uses-vars': 'error',
        '@react/no-children-prop': 'error',
        '@react/no-danger-with-children': 'error',
        '@react/no-deprecated': 'error',
        '@react/no-direct-mutation-state': 'error',
        '@react/no-find-dom-node': 'error',
        '@react/no-is-mounted': 'error',
        '@react/no-render-return-value': 'error',
        '@react/no-string-refs': 'error',
        '@react/no-unescaped-entities': 'error',
        '@react/no-unknown-property': 'error',
        '@react/no-unsafe': 'off',
        '@react/prop-types': 'error',
        '@react/react-in-jsx-scope': 'error',
        '@react/require-render-return': 'error',
        '@react/react-in-jsx-scope': 'off',
        '@react/jsx-uses-react': 'off',
    },
    settings: {
        react: { version: 'detect' },
    },
    languageOptions: {
        ...react.configs.flat.recommended.languageOptions,
    },
};

export { reactConfig };
