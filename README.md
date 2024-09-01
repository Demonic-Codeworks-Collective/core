# ⚡️⚡️

## 🚨 Only for nextjs framework ^13 version (app-router)

## 🛠️ tools

![MasterHead](https://prettier.io/icon.png)

# npm

```sh
npm install -D @demonicattack/prettier
```

# yarn

```sh
yarn add -D @demonicattack/prettier
```

# pnpm

```sh
pnpm add -D @demonicattack/prettier
```

# configuration file

```js
// prettier.config.js

import { prettier } from '@demonicattack/prettier';

/** @type {import('prettier').Options} */
export default prettier;
```

# .prettierignore

```bash
# unix
cp node_modules/@demonicattack/prettier/.prettierignore .prettierignore

# windows
copy node_modules/@demonicattack/prettier/.prettierignore .prettierignore
```

# script

```json
{
    "scripts": {
        "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json}\""
    }
}
```

![MasterHead](https://cdn.icon-icons.com/icons2/2699/PNG/512/eslint_logo_icon_170171.png)

# npm

```sh
npm install -D @demonicattack/eslint
```

# yarn

```sh
yarn add -D @demonicattack/eslint
```

# pnpm

```sh
pnpm add -D @demonicattack/eslint
```

# configuration file

```js
// eslint.config.js

import { eslint } from '@demonicattack/eslint';

/**@type {import('eslint').Linter.FlatConfig[]} */
export default eslint;
```

# add .vscode settings

```js
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.options": {
    "overrideConfigFile": "./eslint.config.js"
  },
}
```

# script

```json
{
    "scripts": {
        "lint": "eslint -c eslint.config.js --fix --no-error-on-unmatched-pattern ."
    }
}
```

![MasterHead](https://img-c.udemycdn.com/course/750x422/4834448_66ec.jpg)

# npm

```sh
npm install -D @demonicattack/tsconfig
```

# yarn

```sh
yarn add -D @demonicattack/tsconfig
```

# pnpm

```sh
pnpm add -D @demonicattack/tsconfig
```

# configuration file

```js
// tsconfig.json

{
  "extends": ["@demonicattack/tsconfig/tsconfig.next.json"],
}
```
