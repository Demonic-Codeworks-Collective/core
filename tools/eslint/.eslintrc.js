const path = require('node:path');
const { TYPESCRIPT_FILES } = require('@vercel/style-guide/eslint/constants');

const MAX_PARAMS = 5;

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: { project: path.resolve(__dirname, 'tsconfig.json') },
  settings: {
    'import/resolver': {
      typescript: { project: path.resolve(__dirname, 'tsconfig.json') },
    },
    /**
     * enable MUI Joy components to be checked
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#configurations}
     */
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {
        Button: 'button',
        Icon: 'svg',
        IconButton: 'button',
        Image: 'img',
        Input: 'input',
        Link: 'a',
        List: 'ul',
        ListItem: 'li',
        ListItemButton: 'button',
        ListDivider: 'li',
        NextImage: 'img',
        NextLink: 'a',
        Textarea: 'textarea',
      },
    },
  },
  rules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-process-exit.md
    'unicorn/no-process-exit': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-for-loop.md
    'unicorn/no-for-loop': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-add-event-listener.md
    'unicorn/prefer-add-event-listener': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-append.md
    'unicorn/prefer-dom-node-append': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-node-remove.md
    'unicorn/prefer-dom-node-remove': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-query-selector.md
    'unicorn/prefer-query-selector': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkDefaultAndNamespaceImports: true,
        checkShorthandProperties: true,
        checkShorthandImports: true,
      },
    ],

    // warn
    'unicorn/expiring-todo-comments': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-modern-dom-apis.md
    // I'll decide myself
    'unicorn/prefer-modern-dom-apis': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-dom-node-dataset': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/consistent-function-scoping.md
    // buggy https://github.com/sindresorhus/eslint-plugin-unicorn/issues/391
    'unicorn/consistent-function-scoping': 'warn',

    'unicorn/no-array-callback-reference': 'warn',

    'unicorn/no-null': 'off',

    // It's useful when sum things
    'unicorn/no-array-reduce': 'off',

    'unicorn/explicit-length-check': [
      'error',
      { 'non-zero': 'not-equal' },
    ],

    // Sometimes `if-else` is more readable
    'unicorn/prefer-ternary': 'off',

    // Unsafe
    'unicorn/prefer-default-parameters': 'off',
    'unicorn/consistent-destructuring': 'off',
    'unicorn/no-object-as-default-parameter': 'off',

    // Not playing well with ES Module
    'unicorn/import-index': 'off',

    // We'll enable later
    'unicorn/prefer-module': 'off',

    'unicorn/prefer-export-from': [
      'error',
      { ignoreUsedVariables: true },
    ],

    'unicorn/relative-url-style': [
      'error',
      'always',
    ],

    'unicorn/prefer-json-parse-buffer': 'error',

    'unicorn/switch-case-braces': [
      'error',
      'avoid',
    ],

    'unicorn/no-unnecessary-polyfills': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/always-return.md
    'promise/always-return': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/catch-or-return.md
    'promise/catch-or-return': 'off',

    // https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-return-wrap.md

    curly: [
      'error',
      'multi-or-nest',
    ],

    /*
     * disallow use of jsdoc-marked-deprecated imports
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'error',

    // allow single export
    'import/prefer-default-export': 'off',

    /*
     * allow dynamic require
     * Forbid require() calls with expressions
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',

    /*
     * This rule enforces that all exports are declared at the bottom of the file.
     * https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
     * airbnb allow this
     */
    'import/exports-last': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'never',
    ],

    'import/no-anonymous-default-export': 'off',

    // Buggy
    'import/no-relative-packages': 'off',
    'import/no-import-module-exports': 'off',

    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-extraneous-dependencies': 'off',

    'import/no-cycle': 'off',

    // allow `require` called anywhere
    // https://eslint.org/docs/rules/global-require
    'global-require': 'off',

    // enforces error handling in callbacks (node environment)
    'handle-callback-err': [
      'error',
      'error',
    ],

    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'always',
        children: 'always',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
      },
    ],

    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // suggest using of const declaration for variables that are never modified after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],

    // Disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: [
          'then', // this will cause tons of confusion when your module is dynamically `import()`ed
        ],
      },
    ],

    // require method and property shorthand syntax for object literals
    // https://eslint.org/docs/rules/object-shorthand
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
        avoidExplicitReturnArrows: true, // airbnb didn't enforce this
      },
    ],

    // Testing

    // allow unnamed function
    'func-names': 'off',

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],

    // enforce a maximum line length
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': 'off',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': [
      'warn',
      MAX_PARAMS,
    ],

    // restrict the number of statements per line
    // https://eslint.org/docs/rules/max-statements-per-line
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    // airbnb allow this
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],

    // allow for...in and for...of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // disallow if as the only statement in an else block
    // https://eslint.org/docs/rules/no-lonely-if
    // readable
    'no-lonely-if': 'off',

    // disallow use of unary operators, ++ and --
    // https://eslint.org/docs/rules/no-plusplus
    'no-plusplus': [
      'error',
      { allowForLoopAfterthoughts: true },
    ],

    // allow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    // I love this
    // example code
    // context.fillStyle = context.strokeStyle = color
    'no-multi-assign': 'off',

    // disallow use of the continue statement
    // https://eslint.org/docs/rules/no-continue
    'no-continue': 'off',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    'prefer-exponentiation-operator': 'error',

    // end Testing

    // https://eslint.org/docs/rules/no-shadow
    'no-shadow': 'off',

    // allow functions & classes use before define
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],

    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    // sort import statements
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
    // sort named imports within an import statement
    'sort-imports': [
      'error',
      { ignoreDeclarationSort: true },
    ],
  },
  overrides: [
    /**
     * JS files are using @babel/eslint-parser, so typed linting doesn't work there.
     * @see {@link https://typescript-eslint.io/linting/typed-linting#how-can-i-disable-type-aware-linting-for-a-subset-of-files}
     */
    {
      files: TYPESCRIPT_FILES,
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    // Varies file convention from libraries, e.g. Next.js App Router and Prettier
    // Must use default export
    {
      files: [
        'next.config.js',
        'prettier.config.js',
        'app/**/page.tsx',
        'app/**/layout.tsx',
        'app/**/not-found.tsx',
        'app/**/*error.tsx',
        'app/apple-icon.tsx',
        'app/**/opengraph-image.tsx',
        'app/sitemap.ts',
        'app/robots.ts',
        'tailwind.config.ts',
        'i18n.ts',
        'middleware.ts',
      ],
      rules: {
        'multiline-ternary': [
          'error',
          'never',
        ],
        'import/no-default-export': 'off',
        'import/exports-last': 'off',
        'unicorn/prefer-export-from': 'off',
        'import/prefer-default-export': [
          'error',
          { target: 'any' },
        ],
      },
    },
    // module declarations
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
