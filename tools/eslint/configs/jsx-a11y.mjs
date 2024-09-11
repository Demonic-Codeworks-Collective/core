import eslintJsxA11yPlugin from 'eslint-plugin-jsx-a11y';

import { addAtSymbolToRules } from './utils.mjs';

const jsxA11y = {
    plugins: {
        '@jsx-a11y': eslintJsxA11yPlugin,
    },
    languageOptions: {
        ...eslintJsxA11yPlugin.flatConfigs.recommended.languageOptions,
    },
    rules: {
        ...addAtSymbolToRules(eslintJsxA11yPlugin.flatConfigs.recommended.rules),
    },
};

export { jsxA11y };
