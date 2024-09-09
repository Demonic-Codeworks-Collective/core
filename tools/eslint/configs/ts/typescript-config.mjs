import { plugin as typescriptPlugin } from 'typescript-eslint';

/**
 * @type { import('../types/configs').TConfig }
 */
const typescriptConfig = {
    plugins: {
        ['@typescript-eslint']: typescriptPlugin,
    },
    rules: {},
};

export { typescriptConfig };
