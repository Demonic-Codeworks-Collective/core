import js from '@eslint/js';

/**
 * @type { import('../types/configs').TConfig }
 */
const jsConfig = {
    plugins: {
        ['@js']: js,
    },
    rules: {
        ...js.configs.recommended.rules,
    },
};

export { jsConfig };
