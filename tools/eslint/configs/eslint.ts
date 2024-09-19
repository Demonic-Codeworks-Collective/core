import { eslintPlugin } from '../plugins';
import { TypedFlatConfigItem } from '../types';

const eslint = async (): Promise<TypedFlatConfigItem[]> => [
    {
        name: '@demonicattack/eslint-plugin/rules',
        plugins: {
            'eslint-plugin': eslintPlugin,
        },
        rules: {
            ...eslintPlugin.configs['flat/rules-recommended'].rules,
        },
    },
];

export { eslint };
