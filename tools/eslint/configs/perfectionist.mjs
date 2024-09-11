import eslintPerfectionistPlugin from 'eslint-plugin-perfectionist';
const type = {
    type: 'line-length',
};
const perfectionist = {
    plugins: {
        '@perfectionist': eslintPerfectionistPlugin,
    },
    settings: {
        perfectionist: {
            type,
            partitionByComment: true,
        },
    },

    rules: {
        '@perfectionist/sort-exports': 'off',
        '@perfectionist/sort-imports': 'off',
        '@perfectionist/sort-classes': 'off',
        '@perfectionist/sort-jsx-props': 'error',
        '@perfectionist/sort-switch-case': 'error',
        '@perfectionist/sort-named-exports': 'off',
        '@perfectionist/sort-named-imports': 'off',
        '@perfectionist/sort-vue-attributes': 'off',
        '@perfectionist/sort-astro-attributes': 'off',
        '@perfectionist/sort-svelte-attributes': 'off',
        '@perfectionist/sort-intersection-types': 'error',
        '@perfectionist/sort-maps': [
            'error',
            type,
        ],

        '@perfectionist/sort-sets': [
            'error',
            type,
        ],
        '@perfectionist/sort-enums': [
            'error',
            type,
        ],
        '@perfectionist/sort-objects': [
            'error',
            type,
        ],
        '@perfectionist/sort-interfaces': [
            'error',
            type,
        ],
        '@perfectionist/sort-union-types': [
            'error',
            type,
        ],

        '@perfectionist/sort-object-types': [
            'error',
            type,
        ],
        '@perfectionist/sort-array-includes': [
            'error',
            type,
        ],
        '@perfectionist/sort-variable-declarations': [
            'error',
            type,
        ],
    },
};

export { perfectionist };
