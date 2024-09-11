import type { Linter } from 'eslint';
import type { Config } from 'typescript-eslint';
export type FlatConfig = Config;

export const node: Linter.Config;
export const react: FlatConfig;
export const next: FlatConfig;
