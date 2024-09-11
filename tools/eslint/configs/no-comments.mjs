import eslintNoCommentedCodePlugin from 'eslint-plugin-no-commented-code';
const noComments = {
    rules: {
        '@no-commented-code/no-commented-code': 'warn',
    },
    plugins: {
        '@no-commented-code': eslintNoCommentedCodePlugin,
    },
};

export { noComments };
