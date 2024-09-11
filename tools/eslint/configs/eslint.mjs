import eslintPlugin from 'eslint-plugin-eslint-plugin';

import { addAtSymbolToRules } from './utils.mjs';

const eslint = {
    plugins: {
        '@eslint-plugin': eslintPlugin,
    },
    rules: {
        ...addAtSymbolToRules(eslintPlugin.configs['flat/recommended'].rules),
    },
};

export { eslint };
