import eslintPromisePlugin from 'eslint-plugin-promise';

import { addAtSymbolToRules } from './utils.mjs';

const promise = {
    plugins: {
        '@promise': eslintPromisePlugin,
    },
    rules: {
        ...addAtSymbolToRules(eslintPromisePlugin.configs['flat/recommended'].rules),
        '@promise/avoid-new': 'error',
        '@promise/no-nesting': 'error',
        '@promise/param-names': 'error',
        '@promise/valid-params': 'error',
        '@promise/always-return': 'error',
        '@promise/no-return-wrap': 'error',
        '@promise/no-new-statics': 'error',
        '@promise/catch-or-return': 'error',
        '@promise/no-return-in-finally': 'error',
        '@promise/no-promise-in-callback': 'error',
        '@promise/no-callback-in-promise': 'error',
    },
};

export { promise };
