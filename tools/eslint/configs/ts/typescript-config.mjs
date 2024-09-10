import { plugin as typescriptPlugin } from 'typescript-eslint';

/**
 * @type { import('eslint').Linter.Config }
 */
const typescriptConfig = {
    plugins: {
        ['@typescript-eslint']: typescriptPlugin,
    },
    rules: {},
};

export { typescriptConfig };
