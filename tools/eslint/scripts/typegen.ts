import fs from 'node:fs/promises';

import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { builtinRules } from 'eslint/use-at-your-own-risk';
// import type { Rule } from 'eslint';
import { combine } from '../utils';
import { comments, eslint, imrt } from '../configs';

const configs = await combine(
    {
        plugins: {
            '': {
                rules: Object.fromEntries(builtinRules.entries()),
            },
        },
    },
    comments(),
    eslint(),
    imrt(),
);

const configNames = configs.map(i => i.name).filter(Boolean) as string[];

let dts = await flatConfigsToRulesDTS(configs, {
    includeAugmentation: false,
});

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map(i => `'${i}'`).join(' | ')}
`;

await fs.writeFile('typegen.d.ts', dts);