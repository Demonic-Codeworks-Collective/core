import { TFrameworkOption, TExtraLibrariesOption, IPromptItem } from '../types';
import color from 'picocolors';
import pkgJson from '../../package.json';

const frameworkOptions: IPromptItem<TFrameworkOption>[] = [
    {
        name: color.cyan('react'),
        value: 'react',
    },
    {
        name: color.white('next'),
        value: 'next',
    },
    {
        name: color.green('node'),
        value: 'node',
    },
];

const extraOptions: IPromptItem<TExtraLibrariesOption>[] = [
    {
        message:
            'Use external formatters (Prettier and/or dprint) to format files that ESLint cannot handle yet (.css, .html, etc)',
        name: color.red('Formatter'),
        value: 'formatter',
    },
];

const frameworks: TFrameworkOption[] = frameworkOptions.map(({ value }) => value);

const extra: TExtraLibrariesOption[] = extraOptions.map(({ value }) => value);

const dependenciesMap = {
    react: [
        '@eslint-react/eslint-plugin',
        'eslint-plugin-react-hooks',
        'eslint-plugin-react-refresh',
    ],
    next: [
        '@next/eslint-plugin-next',
    ],
} as const;

export { frameworkOptions, frameworks, extraOptions, extra, dependenciesMap, pkgJson };
