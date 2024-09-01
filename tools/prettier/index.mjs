const prettier = {
    plugins: [
        'prettier-plugin-multiline-arrays',
        'prettier-plugin-tailwindcss',
        'prettier-plugin-packagejson',
        'prettier-plugin-sort-json',
        'prettier-plugin-prisma',
    ],
    htmlWhitespaceSensitivity: 'strict',
    embeddedLanguageFormatting: 'auto',
    multilineArraysWrapThreshold: 1,
    experimentalTernaries: true,
    bracketSameLine: false,
    jsxSingleQuote: true,
    bracketSpacing: true,
    trailingComma: 'all',
    arrowParens: 'avoid',
    singleQuote: true,
    quoteProps: 'as-needed',
    printWidth: 120,
    endOfLine: 'lf',
    proseWrap: 'always',
    tabWidth: 4,
    useTabs: false,
    semi: true,
};

export { prettier };
