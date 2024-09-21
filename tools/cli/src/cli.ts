import process from 'node:process';
import * as p from '@clack/prompts';
import c from 'picocolors';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { pkgJson } from './constants';
import { run } from './run';

function header(): void {
    console.log('\n');
    p.intro(`${c.green(`@demonicattack/prettier`)}${c.dim(`v${pkgJson.version}`)}`);
}

const instance = yargs(hideBin(process.argv))
    .scriptName('@demonicattack/prettier')
    .usage('')
    .command(
        '*',
        'Run the initialization or migration',
        args =>
            args
                .option('skip', {
                    alias: '--skip',
                    description: 'Skip prompts and use default values',
                    type: 'boolean',
                })
                .option('template', {
                    alias: '--template',
                    description: 'Use the framework template for optimal customization: vue / react / svelte / astro',
                    type: 'string',
                })
                .option('extra', {
                    alias: '--extra',
                    array: true,
                    description: 'Use the extra utils: formatter / perfectionist / unocss',
                    type: 'string',
                })
                .help(),
        async ({ extra, template, yes }) => {
            header();
            try {
                await run({
                    skip: !!yes,
                    extraOptions: extra,
                    frameworks: template ? [template] : undefined,
                });
            } catch (error) {
                p.log.error(c.inverse(c.red(' Failed to migrate ')));
                p.log.error(c.red(`✘ ${String(error)}`));
                process.exit(1);
            }
        },
    )
    .showHelpOnFail(false)
    .alias('h', 'help')
    .version('version', pkgJson.version)
    .alias('v', 'version');

instance.help().argv;

// import { example } from './commands/command';
// import { Command } from 'commander';

// import { version } from '../package.json';

// function main() {
//     try {
//         const program = new Command()
//             .name('cli')
//             .description('A simple CLI template')
//             .version(version || '0.0.0');

//         program.addCommand(example);

//         program.parse(process.argv);
//     } catch (error) {
//         console.error('Ошибка при выполнении CLI:', error);
//         process.exit(1);
//     }
// }

// main();
