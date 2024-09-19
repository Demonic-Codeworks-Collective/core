// OptionsIsInEditor, OptionsOverrides, TypedFlatConfigItem
import type { parser } from 'typescript-eslint';
import type { Linter } from 'eslint';
import { ConfigNames, RuleOptions } from 'typegen';
// import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore'
// import type { Options as VueBlocksOptions } from 'eslint-processor-vue-blocks'
// import type { ConfigNames, RuleOptions } from './typegen'
// import type { VendoredPrettierOptions } from './vender/prettier-types'
export type Awaitable<T> = T | Promise<T>;
export type Rules = RuleOptions;

export type TypedFlatConfigItem = Omit<Linter.Config<Linter.RulesRecord & Rules>, 'plugins'> & {
    plugins?: Record<string, any>;
};

export interface OptionsOverrides {
    overrides?: TypedFlatConfigItem['rules'];
}

export interface IOptionsIsInEditor {
    isInEditor?: boolean;
}
export interface OptionsComponentExts {
    /**
     * Additional extensions for components.
     *
     * @example ['vue']
     * @default []
     */
    componentExts?: string[];
}

export interface OptionsProjectType {
    /**
     * Type of the project. `lib` will enable more strict rules for libraries.
     *
     * @default 'app'
     */
    type?: 'app' | 'lib';
}

export interface OptionsUnoCSS extends OptionsOverrides {
    /**
     * Enable attributify support.
     * @default true
     */
    attributify?: boolean;
    /**
     * Enable strict mode by throwing errors about blocklisted classes.
     * @default false
     */
    strict?: boolean;
}

export interface OptionsConfig extends OptionsComponentExts, OptionsProjectType {}
