import eslintNextPlugin from '@next/eslint-plugin-next';

const next = {
    plugins: {
        '@next/next': eslintNextPlugin,
    },
    rules: {
        ...eslintNextPlugin.configs.recommended.rules,
        ...eslintNextPlugin.configs['core-web-vitals'].rules,
    },
};

export { next };
