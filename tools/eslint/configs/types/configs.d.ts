import type { Linter } from 'eslint';
export type TConfig = {
    rules?: Linter.Config<Linter.RulesRecord>['rules'];
    plugins?: Linter.Config<Linter.RulesRecord>['plugins'];
    settings?: Linter.Config<Linter.RulesRecord>['settings'];
};

export type TIgnores = Linter.Config<Linter.RulesRecord>['ignores'];
export type TFiles = Linter.Config<Linter.RulesRecord>['files'];
export type TGlobals = Linter.Config<Linter.RulesRecord>['languageOptions']['globals'];
