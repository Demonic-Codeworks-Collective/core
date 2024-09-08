import { Config as PrettierConfig } from 'prettier';
import { MultilineArrayOptions } from 'prettier-plugin-multiline-arrays';
import { PluginOptions as TailwindPluginOptions } from 'prettier-plugin-tailwindcss';

export type PrettierOptions = PrettierConfig | MultilineArrayOptions | TailwindPluginOptions;

export const prettier: PrettierOptions;
