import eslintTailwindPlugin from 'eslint-plugin-tailwindcss';

import { addAtSymbolToRules } from './utils.mjs';

const tailwind = {
    plugins: {
        '@tailwindcss': eslintTailwindPlugin,
    },
    languageOptions: {
        ...eslintTailwindPlugin.configs['flat/recommended'].map(item => item.languageOptions),
    },
    rules: {
        ...addAtSymbolToRules(eslintTailwindPlugin.configs['flat/recommended'].map(item => item.rules)),
    },
};

export { tailwind };
