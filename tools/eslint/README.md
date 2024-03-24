![MasterHead](https://cdn.icon-icons.com/icons2/2699/PNG/512/eslint_logo_icon_170171.png)

<h1 align="start">flat eslint config by @demonicattack</h1>

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

# script

```json
{
  "scripts": {
    "lint": "eslint -c eslint.config.js --fix --no-error-on-unmatched-pattern ."
  }
}
```
