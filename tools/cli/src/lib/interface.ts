interface PromItem<T> {
    name: string;
    value: T;
    message?: string;
}

interface PromptResult {
    uncommittedConfirmed: boolean;
    frameworks: FrameworkOption[];
    extra: ExtraLibrariesOption[];
    updateVscodeSettings: unknown;
}

type FrameworkOption = 'next' | 'react' | 'node';

type ExtraLibrariesOption = 'formatter';

export type { PromItem, PromptResult, FrameworkOption, ExtraLibrariesOption };
