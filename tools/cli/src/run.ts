import { isGitClean } from './utils';
import { extra, extraOptions as e, frameworkOptions, frameworks as f } from './constants';
import { TExtraLibrariesOption, ICliRunOptions, TFrameworkOption, IPromptItem, IPromptResult } from './types';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import * as p from '@clack/prompts';
import c from 'picocolors';

const run = async ({ extraOptions, frameworks, skip }: ICliRunOptions = {}): Promise<void> => {
    const log = p.log;
    const argSkipPrompt = !!process.env.SKIP_PROMPT || skip;
    const argTemplate = <TFrameworkOption[]>frameworks?.map(m => m.trim());
    const argExtra = <TExtraLibrariesOption[]>extraOptions?.map(m => m.trim());
    if (fs.existsSync(path.join(process.cwd(), 'eslint.config.js'))) {
        log.warn(c.yellow(`eslint.config.js already exists, migration wizard exited.`));
        return process.exit(1);
    }
    let result: IPromptResult = {
        extra: argExtra ?? [],
        frameworks: argTemplate ?? [],
        uncommittedConfirmed: false,
        updateVscodeSettings: true,
    };
    if (!argSkipPrompt) {
        result = (await p.group(
            {
                uncommittedConfirmed: () => {
                    if (argSkipPrompt || isGitClean()) return Promise.resolve(true);

                    return p.confirm({
                        initialValue: false,
                        message: 'There are uncommitted changes in the current repository, are you sure to continue?',
                    });
                },
                frameworks: ({ results }) => {
                    const isArgTemplateValid =
                        typeof argTemplate === 'string' && !!f.includes(<TFrameworkOption>argTemplate);

                    if (!results.uncommittedConfirmed || isArgTemplateValid) return;

                    const message =
                        !isArgTemplateValid && argTemplate ?
                            `"${argTemplate}" isn't a valid template. Please choose from below: `
                        :   'Select a framework:';

                    return p.multiselect<IPromptItem<TFrameworkOption>[], TFrameworkOption>({
                        message: c.reset(message),
                        options: frameworkOptions,
                        required: false,
                    });
                },
                extra: ({ results }) => {
                    const isArgExtraValid =
                        argExtra?.length &&
                        !argExtra.filter(element => !extra.includes(<TExtraLibrariesOption>element)).length;

                    if (!results.uncommittedConfirmed || isArgExtraValid) return;

                    const message =
                        !isArgExtraValid && argExtra ?
                            `"${argExtra}" isn't a valid extra util. Please choose from below: `
                        :   'Select a extra utils:';

                    return p.multiselect<IPromptItem<TExtraLibrariesOption>[], TExtraLibrariesOption>({
                        message: c.reset(message),
                        options: e,
                        required: false,
                    });
                },
                updateVscodeSettings: ({ results }) => {
                    if (!results.uncommittedConfirmed) return;
                    return p.confirm({
                        initialValue: true,
                        message: 'Update .vscode/settings.json for better VS Code experience?',
                    });
                },
            },
            {
                onCancel: () => {
                    p.cancel('Operation cancelled.');
                    process.exit(0);
                },
            },
        )) as IPromptResult;
        if (!result.uncommittedConfirmed) return process.exit(1);
    }

    // await updatePackageJson(result)
    // await updateEslintFiles(result)
    // await updateVscodeSettings(result)

    log.success(c.green(`Setup completed`));
    p.outro(`Now you can update the dependencies and run ${c.blue('eslint . --fix')}\n`);
};

export { run };
