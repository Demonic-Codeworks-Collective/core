import eslintNextPlugin from '@next/eslint-plugin-next';

const next = {
    plugins: {
        '@next/next': eslintNextPlugin,
    },
    extends: {
        ...eslintNextPlugin.configs.recommended,
        ...eslintNextPlugin.configs['core-web-vitals'],
    },
    rules: {
        ...eslintNextPlugin.configs.recommended.rules,
        ...eslintNextPlugin.configs['core-web-vitals'].rules,
    },
};

export { next };
