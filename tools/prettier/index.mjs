/**
 * @type {import('prettier').Options}
 */
const prettier = {
    semi: true,
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    endOfLine: 'lf',
    singleQuote: true,
    proseWrap: 'always',
    jsxSingleQuote: true,
    bracketSpacing: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    bracketSameLine: false,
    quoteProps: 'as-needed',
    experimentalTernaries: true,
    multilineArraysWrapThreshold: 1,
    htmlWhitespaceSensitivity: 'css',
    embeddedLanguageFormatting: 'auto',
    plugins: [
        'prettier-plugin-multiline-arrays',
        'prettier-plugin-tailwindcss',
        'prettier-plugin-packagejson',
        'prettier-plugin-sort-json',
        'prettier-plugin-prisma',
    ],
};

export { prettier };
