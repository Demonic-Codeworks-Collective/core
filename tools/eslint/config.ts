import type { Linter } from 'eslint';
import type { RuleOptions, ConfigNames } from './typegen';
import type { Awaitable, OptionsConfig, TypedFlatConfigItem } from './types';
import { comments, eslint, imrt } from './configs';
import { FlatConfigComposer } from 'eslint-flat-config-utils';

const config = (
    options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {},
    ...rest: Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | FlatConfigComposer<any, any> | Linter.Config[]>[]
): FlatConfigComposer<TypedFlatConfigItem, ConfigNames> => {
    const {} = options;

    const configs: Awaitable<TypedFlatConfigItem[]>[] = [];

    configs.push(imrt(), eslint(), comments());
    if ('files' in options) {
        throw new Error(
            '[@demonicattack/eslint-config] The first argument should not contain the "files" property as the options are supposed to be global. Place it in the second or later config instead.',
        );
    }
    let composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>();
    composer = composer.append(...configs, ...(rest as any));
    return composer;
};

export default config;
