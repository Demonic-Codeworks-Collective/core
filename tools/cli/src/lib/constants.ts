import { ExtraLibrariesOption, FrameworkOption, PromItem } from './interface';
import c from 'picocolors';
import { loadJSON } from '@utils';
export const pkgJson = loadJSON('../package.json');

const frameworkOptions: PromItem<FrameworkOption>[] = [
    {
        name: c.cyan('react'),
        value: 'react',
    },
    {
        name: c.white('next'),
        value: 'next',
    },
    {
        name: c.green('node'),
        value: 'node',
    },
];

const frameworks: FrameworkOption[] = frameworkOptions.map(({ value }) => value);

const extraOptions: PromItem<ExtraLibrariesOption>[] = [
    {
        message:
            'Use external formatters (Prettier and/or dprint) to format files that ESLint cannot handle yet (.css, .html, etc)',
        name: c.red('Formatter'),
        value: 'formatter',
    },
];

const extra: ExtraLibrariesOption[] = extraOptions.map(({ value }) => value);

const dependenciesMap = {
    astro: [
        'eslint-plugin-astro',
        'astro-eslint-parser',
    ],
    react: [
        '@eslint-react/eslint-plugin',
        'eslint-plugin-react-hooks',
        'eslint-plugin-react-refresh',
    ],
    slidev: [
        'prettier-plugin-slidev',
    ],
    solid: [
        'eslint-plugin-solid',
    ],
    svelte: [
        'eslint-plugin-svelte',
        'svelte-eslint-parser',
    ],
    vue: [],
} as const;

export { frameworkOptions, frameworks, extraOptions, extra, dependenciesMap };
