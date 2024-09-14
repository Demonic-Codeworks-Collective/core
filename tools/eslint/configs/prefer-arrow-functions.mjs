import eslintPreferArrowFunctionsPlugin from 'eslint-plugin-prefer-arrow-functions';

const preferArrowFunctions = {
    plugins: {
        'prefer-arrow-functions': eslintPreferArrowFunctionsPlugin,
    },
    rules: {
        'prefer-arrow-functions/prefer-arrow-functions': [
            'error',
            {
                singleReturnOnly: true,
                returnStyle: 'implicit',
                disallowPrototype: true,
                allowNamedFunctions: true,
                classPropertiesAllowed: true,
            },
        ],
    },
};

export { preferArrowFunctions };
