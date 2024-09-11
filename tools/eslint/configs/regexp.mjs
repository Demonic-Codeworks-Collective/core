import * as eslintRegExpPlugin from 'eslint-plugin-regexp';
const regexp = {
    plugins: {
        regexp: eslintRegExpPlugin,
    },
    rules: {
        ...eslintRegExpPlugin.configs['flat/recommended'].rules,
        'regexp/no-useless-flag': [
            'error',
            { strictTypes: false },
        ],
        'regexp/match-any': [
            'error',
            {
                allows: [
                    'dotAll',
                    '[\\S\\s]',
                ],
            },
        ],
    },
};

export { regexp };
