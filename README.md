# ⚡️⚡️

## 🚨 Only for nextjs framework ^13 version (app-router)

## Starting a new project? dowload starter from `` examples/nexjs-app-tailwind `` [Dowload](https://download-directory.github.io/?url=https://github.com/Demonic-Attack/core/tree/main/examples/nextjs-app-tailwind)


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
// prettier.config.mjs

import prettier from '@demonicattack/prettier';

/** @type {import('prettier').Options} */
const config = {
  ...prettier,
  plugins: [...prettier.plugins],
};
export default config;
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
// .eslintrc.js

const { eslint } = require('@demonicattack/eslint');

/** @type {import('eslint').Linter.Config} */
module.exports = eslint;
```

# script

```json
{
  "scripts": {
    "lint": "eslint --ext .ts,.tsx --fix --max-warnings 0 --no-error-on-unmatched-pattern ."
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




