import eslintTailwindPlugin from 'eslint-plugin-tailwindcss';

import { addAtSymbolToRules } from './utils.mjs';

const tailwind = {
    plugins: {
        '@tailwindcss': eslintTailwindPlugin,
    },
    settings: {
        ...eslintTailwindPlugin.configs['flat/recommended'].map(array => array.settings),
    },
    rules: {
        ...addAtSymbolToRules(eslintTailwindPlugin.configs['flat/recommended'].map(array => array.rules)),
        '@tailwindcss/classnames-order': 'warn',
        '@tailwindcss/no-arbitrary-value': 'off',
        '@tailwindcss/enforces-shorthand': 'warn',
        '@tailwindcss/no-custom-classname': 'warn',
        '@tailwindcss/migration-from-tailwind-2': 'warn',
        '@tailwindcss/no-contradicting-classname': 'error',
        '@tailwindcss/no-unnecessary-arbitrary-value': 'warn',
        '@tailwindcss/enforces-negative-arbitrary-values': 'warn',
    },
};

export { tailwind };
