import { plugin as typescriptPlugin } from 'typescript-eslint';
const ts = {
    plugins: {
        '@typescript-eslint': typescriptPlugin,
    },
    rules: {
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'warn',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/method-signature-style': 'warn',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/internal/prefer-ast-types-enum': 'off',
        '@typescript-eslint/no-redundant-type-constituents': 'warn',
        '@typescript-eslint/explicit-function-return-type': [
            'warn',
            { allowExpressions: true },
        ],
        '@typescript-eslint/require-array-sort-compare': [
            'error',
            { ignoreStringArrays: true },
        ],
        '@typescript-eslint/consistent-type-exports': [
            'warn',
            { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: true,
                fixStyle: 'inline-type-imports',
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: false,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                format: ['PascalCase'],
                selector: [
                    'typeLike',
                    'enumMember',
                ],
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    match: false,
                    regex: '^I[A-Z]|^(Interface|Props|State)$',
                },
            },
        ],
    },
};

export { ts };
