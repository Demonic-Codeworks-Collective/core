import eslintNextPlugin from '@next/eslint-plugin-next';

import { addAtSymbolToRules } from './utils.mjs';

const next = {
    plugins: {
        '@next/next': eslintNextPlugin,
    },
    rules: {
        ...addAtSymbolToRules(eslintNextPlugin.configs.recommended.rules),
        ...addAtSymbolToRules(eslintNextPlugin.configs['core-web-vitals'].rules),
    },
};

export { next };
