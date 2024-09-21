interface ICliRunOptions {
    /**
     * Skip prompts and use default values
     */
    skip?: boolean;
    /**
     * NextJS / ReactJS / VanillaJS
     */
    frameworks?: string[];
    /**
     * formatter / tailwindcss
     */
    extraOptions?: string[];
}
interface IPromptItem<T> {
    name: string;
    value: T;
    message?: string;
}

type TFrameworkOption = 'next' | 'react' | 'node';

type TExtraLibrariesOption = 'formatter' | 'tailwindcss';

interface IPromptResult {
    uncommittedConfirmed: boolean;
    frameworks: TFrameworkOption[];
    extra: TExtraLibrariesOption[];
    updateVscodeSettings: unknown;
}

export type { ICliRunOptions, IPromptItem, IPromptResult, TFrameworkOption, TExtraLibrariesOption };
