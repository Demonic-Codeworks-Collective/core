import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
const comments = {
    plugins: {
        '@eslint-comments': eslintCommentsPlugin,
    },
    rules: {
        '@eslint-comments/no-unused-enable': 'error',
        '@eslint-comments/no-unused-disable': 'error',
        '@eslint-comments/no-duplicate-disable': 'error',
        '@eslint-comments/no-unlimited-disable': 'error',
        '@eslint-comments/no-aggregating-enable': 'error',
        '@eslint-comments/disable-enable-pair': [
            'error',
            {
                allowWholeFile: true,
            },
        ],
        '@eslint-comments/no-use': [
            'error',
            {
                allow: [
                    'eslint-disable',
                    'eslint-disable-line',
                    'eslint-disable-next-line',
                    'eslint-enable',
                    'global',
                ],
            },
        ],
    },
};

export { comments };
