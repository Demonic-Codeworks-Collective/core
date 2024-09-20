import { execSync } from 'node:child_process';
import fs from 'node:fs';

export const loadJSON = (path: string) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)).toString());

export function isGitClean(): boolean {
    try {
        execSync('git diff-index --quiet HEAD --');
        return true;
    } catch {
        return false;
    }
}

// const getEslintConfigContent = (mainConfig: string, additionalConfigs?: string[]): string => {
//     return `
// import antfu from '@antfu/eslint-config'

// export default antfu({
// ${mainConfig}
// }${additionalConfigs?.map(config => `,{\n${config}\n}`)})
// `.trimStart();
// };
