import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
/**
 * @type { import('../types/configs').TConfig }
 */
const reactConfig = {
    plugins: {
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
    },
};

export { reactConfig };
