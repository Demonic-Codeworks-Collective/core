type Options =
    | import('prettier').Config
    | import('prettier-plugin-multiline-arrays').MultilineArrayOptions
    | import('prettier-plugin-tailwindcss').PluginOptions;

declare module '@demonicattack/prettier' {
    export type PrettierOptions = Options;
}
