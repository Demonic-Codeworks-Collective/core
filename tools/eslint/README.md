![MasterHead](https://cdn.icon-icons.com/icons2/2699/PNG/512/eslint_logo_icon_170171.png)

<h1 align="start">eslint config by @demonicattack</h1>

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

const { eslint } from '@demonicattack/eslint';

/** @type {import('eslint').Linter.Config} */
module.exports = eslint

```

# script

```json
{
  "scripts": {
    "lint": "eslint --ext .ts,.tsx --fix --max-warnings 0 --no-error-on-unmatched-pattern ."
  }
}
```
