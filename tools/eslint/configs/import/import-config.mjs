import { configs } from '@eslint/js';

/**
 * @type { import('eslint').Linter.Config }
 */
const jsConfig = {
    plugins: {
        ...configs.recommended,
    },
};

export { jsConfig };
