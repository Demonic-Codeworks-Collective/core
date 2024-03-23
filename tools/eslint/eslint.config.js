/* Config */
import prettierConfig from 'eslint-config-prettier';
import airbnbTypescriptConfig from 'eslint-config-airbnb-typescript';
/* Plugins */
import js from '@eslint/js';
import nPlugin from 'eslint-plugin-n';
import tseslint from 'typescript-eslint';
import esxPlugin from 'eslint-plugin-es-x';
import nextPlugin from '@next/eslint-plugin-next';
import tsdocPlugin from 'eslint-plugin-tsdoc';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import eslintPlugin from 'eslint-plugin-eslint-plugin';
import * as regexpPlugin from 'eslint-plugin-regexp';
import promisePlugin from 'eslint-plugin-promise';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import unicornPlugin from 'eslint-plugin-unicorn';
import prettierPlugin from 'eslint-plugin-prettier';
import commentsPlugin from 'eslint-plugin-eslint-comments';
import stylisticPlugin from '@stylistic/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import deprecationPlugin from 'eslint-plugin-deprecation';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
/* Utils */
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';

const baseDirectory = fileURLToPath(new URL('.', import.meta.url));
const compat = new FlatCompat({ baseDirectory });

const eslint = tseslint.config(
  {
    plugins: {
      /* Typescript */
      ['@typescript-eslint']: tseslint.plugin,
      /* N Plugin */
      ['n']: nPlugin,
      /* ESx Plugin */
      ['es-x']: esxPlugin,
      /* Next Plugins */
      ['@next/next']: nextPlugin,
      /* TSDoc Plugins */
      ['tsdoc']: tsdocPlugin,
      /* JSDoc Plugins */
      ['jsdoc']: jsdocPlugin,
      /* React Plugins */
      ['react']: reactPlugin,
      /* Imports Plugins */
      ['import']: importPlugin,
      ['simple-import-sort']: simpleImportSortPlugin,
      /* RegExp Plugins */
      ['regexp']: regexpPlugin,
      /* Promise Plugins */
      ['promise']: promisePlugin,
      /* JSXA11y Plugins */
      ['jsx-a11y']: jsxA11yPlugin,
      /* Unicorn Plugins */
      ['unicorn']: unicornPlugin,
      /* Prettier Plugin */
      ['prettier']: prettierPlugin,
      /* Comments Plugin */
      ['eslint-comments']: commentsPlugin,
      /* Deprecation Plugin */
      ['deprecation']: deprecationPlugin,
      /* @stylistic Plugin */
      ['@stylistic']: stylisticPlugin,
      /* React Hooks Plugin */
      ['react-hooks']: reactHooksPlugin,
    },
  },
  {
    ignores: [
      '**/jest.config.js',
      '**/node_modules/**',
      '**/dist/**',
      '**/fixtures/**',
      '**/coverage/**',
      '**/__snapshots__/**',
      '**/.docusaurus/**',
      '**/build/**',
      '.next/*',
      '**/*.config.{js,cjs,mjs}',
    ],
  },
  js.configs.recommended,
  ...compat.config(eslintPlugin.configs.recommended),
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb/hooks'),
  ...compat.extends('eslint-config-airbnb-base'),
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  jsdocPlugin.configs['flat/recommended-typescript-error'],
  {
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        cacheLifetime: {
          glob: 'Infinity',
        },
        project: ['tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: false,
      },
      sourceType: 'module',
    },
  },
  {
    rules: {
      /*
       * Esx Rules
       */

      'es-x/no-arraybuffer-prototype-transfer': 'error',
      'es-x/no-atomics-waitasync': 'error',
      'es-x/no-object-map-groupby': 'error',
      'es-x/no-promise-withresolvers': 'error',
      'es-x/no-regexp-v-flag': 'error',
      'es-x/no-resizable-and-growable-arraybuffers': 'error',
      'es-x/no-string-prototype-iswellformed-towellformed': 'error',

      /*
       * N Rules
       */

      'n/no-unsupported-features/es-builtins': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-extraneous-require': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-missing-require': 'off',
      'n/prefer-global/buffer': [
        'error',
        'never',
      ],
      'n/prefer-global/process': [
        'error',
        'never',
      ],
      'n/prefer-global/console': [
        'error',
        'always',
      ],
      'n/prefer-global/text-decoder': [
        'error',
        'always',
      ],
      'n/prefer-global/text-encoder': [
        'error',
        'always',
      ],
      'n/prefer-global/url-search-params': [
        'error',
        'always',
      ],
      'n/prefer-global/url': [
        'error',
        'always',
      ],
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'n/no-path-concat': 'error',
      'n/no-new-require': 'error',
      'n/no-process-exit': 'off',

      /*
       * @stylistic Rules
       */
      ...stylisticPlugin.configs['recommended-flat'].rules,

      /*
       * Prettier Rules
       */

      'prettier/prettier': 'error',

      /*
       * Deprecation Rules
       */

      'deprecation/deprecation': 'error',

      /*
       * Eslint Comments Rules
       */

      'eslint-comments/no-unused-disable': 'warn',
      'eslint-comments/require-description': 'error',

      /*
       * JSDoc Rules
       */

      'jsdoc/check-tag-names': 'off',
      'jsdoc/check-param-names': 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-yields': 'off',
      'jsdoc/tag-lines': 'off',
      'jsdoc/informative-docs': 'error',

      /*
       * TSDoc Rules
       */

      'tsdoc/syntax': 'error',

      /*
       * Imports Rules
       */

      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-cycle': 'error',
      'import/no-default-export': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        { includeTypes: true },
      ],
      'import/no-mutable-exports': 'error',
      'import/no-relative-packages': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': ['error'],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // Packages
            'internal', // Aliased modules
            'parent', // Relative parent
            'sibling', // Relative sibling
            'index', // Relative index
          ],
          'newlines-between': 'never',
        },
      ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [
              '^react',
              '^@?\\w',
            ],
            ['^@(demonicattack/.*|$)'],
            ['^@(([\\/.]?\\w)|assets|test-utils)'],
            ['^\\u0000'],
            [
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
            ],
            [
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
            ],
            ['^.+\\.s?css$'],
          ],
        },
      ],

      /*
       * RegExp Rules
       */
      'regexp/no-super-linear-move': 'off',
      'regexp/order-in-character-class': 'off',
      'regexp/sort-character-class-elements': 'off',
      'regexp/match-any': [
        'error',
        {
          allows: [
            'dotAll',
            '[\\S\\s]',
          ],
        },
      ],
      'regexp/strict': 'off',
      'regexp/no-useless-flag': [
        'error',
        { strictTypes: false },
      ],
      'regexp/prefer-lookaround': 'off',
      'regexp/prefer-named-capture-group': 'off',
      'regexp/require-unicode-regexp': 'off',
      'regexp/require-unicode-sets-regexp': 'off',

      /*
       * Promise Rules
       */

      'promise/always-return': 'error',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/catch-or-return': 'error',
      'promise/no-native': 'off',
      'promise/no-nesting': 'error',
      'promise/no-promise-in-callback': 'error',
      'promise/no-callback-in-promise': 'error',
      'promise/avoid-new': 'error',
      'promise/no-new-statics': 'error',
      'promise/no-return-in-finally': 'error',
      'promise/valid-params': 'error',

      /*
       * Unicorn Rules
       */

      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'unicorn/no-process-exit': 'warn',
      'unicorn/no-for-loop': 'warn',
      'unicorn/prefer-add-event-listener': 'off',
      'unicorn/prefer-dom-node-append': 'off',
      'unicorn/prefer-dom-node-remove': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          checkDefaultAndNamespaceImports: true,
          checkShorthandProperties: true,
          checkShorthandImports: true,
        },
      ],
      'unicorn/expiring-todo-comments': 'warn',
      'unicorn/prefer-modern-dom-apis': 'off',
      'unicorn/prefer-dom-node-text-content': 'off',
      'unicorn/prefer-dom-node-dataset': 'off',
      'unicorn/consistent-function-scoping': 'warn',
      'unicorn/no-array-callback-reference': 'warn',
      'unicorn/no-null': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/explicit-length-check': [
        'error',
        { 'non-zero': 'not-equal' },
      ],
      'unicorn/prefer-ternary': 'off',
      'unicorn/prefer-default-parameters': 'off',
      'unicorn/consistent-destructuring': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/import-index': 'off',
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

      /*
       * Best-Practices Rules
       */

      'block-scoped-var': 'error',
      'default-case-last': 'error',
      'grouped-accessor-pairs': 'error',
      'no-alert': 'error',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-else-return': 'warn',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-floating-decimal': 'error',
      'no-implicit-coercion': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-regex-literals': 'error',
      'array-callback-return': [
        'error',
        { allowImplicit: true },
      ],
      'prefer-promise-reject-errors': [
        'error',
        { allowEmptyReject: true },
      ],
      curly: [
        'error',
        'multi-line',
      ],
      eqeqeq: 'error',
      yoda: 'error',

      /*
       * Stylistic Rules
       */

      camelcase: [
        'error',
        {
          allow: ['^UNSAFE_'],
          ignoreDestructuring: false,
          properties: 'never',
        },
      ],
      'func-names': [
        'error',
        'as-needed',
      ],
      'new-cap': [
        'error',
        { capIsNew: false },
      ],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'prefer-object-spread': 'error',

      /*
       * PossibleErrors Rules
       */

      'no-console': 'error',
      'no-constant-binary-expression': 'error',
      'no-promise-executor-return': 'error',
      'no-template-curly-in-string': 'error',
      'no-unreachable-loop': 'error',

      /*
       * Variables Rules
       */

      'no-label-var': 'error',
      'no-undef-init': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: false,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],

      /*
       * ES6 Rules
       */

      'no-useless-computed-key': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'symbol-description': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
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
      'arrow-body-style': [
        'error',
        'as-needed',
        {
          requireReturnForObjectLiteral: false,
        },
      ],
      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: ['then'],
        },
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          ignoreConstructors: false,
          avoidQuotes: true,
          avoidExplicitReturnArrows: true,
        },
      ],

      /*
       * @typescript-eslint Rules
       */

      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: false,
          vars: 'all',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/consistent-type-exports': [
        'warn',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        { allowExpressions: true },
      ],
      '@typescript-eslint/method-signature-style': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['PascalCase'],
          selector: [
            'typeLike',
            'enumMember',
          ],
        },
        {
          custom: {
            match: false,
            regex: '^I[A-Z]|^(Interface|Props|State)$',
          },
          format: ['PascalCase'],
          selector: 'interface',
        },
      ],
      '@typescript-eslint/no-redundant-type-constituents': 'warn',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        { ignoreStringArrays: true },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
    settings: {
      settings: {
        ...importPlugin.configs.typescript.settings,
        'import/resolver': {
          ...importPlugin.configs.typescript.settings['import/resolver'],
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts,js,jsx}'],
    extends: [
      ...compat.config(jsxA11yPlugin.configs.recommended),
      ...compat.config(reactPlugin.configs.recommended),
      ...compat.config(reactHooksPlugin.configs.recommended),
      ...compat.config(nextPlugin.configs.recommended),
      ...compat.config(nextPlugin.configs['core-web-vitals']),
    ],
    rules: {
      ...airbnbTypescriptConfig.rules,
      '@typescript-eslint/internal/prefer-ast-types-enum': 'off',
      'react/jsx-no-target-blank': 'off',
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/button-has-type': 'warn',

      'react/hook-use-state': 'warn',
      'react/jsx-boolean-value': 'warn',
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-fragments': 'warn',
      'react/jsx-no-leaked-render': 'warn',

      'react/jsx-pascal-case': 'warn',
      'react/no-array-index-key': 'warn',
      'react/no-unstable-nested-components': 'error',
      'react/self-closing-comp': 'warn',
      'react/jsx-no-useless-fragment': [
        'warn',
        { allowExpressions: true },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function'],
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-no-target-blank': [
        'error',
        {
          allowReferrer: true,
        },
      ],
    },
    settings: {
      ...importPlugin.configs.react.settings,
      'import/resolver': {
        ...importPlugin.configs.react.settings['import/resolver'],
        node: {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [
      'src/app/**/page.tsx',
      'src/app/**/layout.tsx',
      'src/app/**/not-found.tsx',
      'src/app/**/error.tsx',
      'src/app/sitemap.ts',
      'src/app/robots.ts',
      'src/app/sitemap.ts',
      'src/app/robots.ts',
      'app/**/page.tsx',
      'app/**/layout.tsx',
      'app/**/not-found.tsx',
      'app/**/error.tsx',
      'app/sitemap.ts',
      'app/robots.ts',
      'middleware.ts',
    ],
    rules: {
      'import/no-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'deprecation/deprecation': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'tsdoc/syntax': 'off',
    },
  },
  prettierConfig,
);

export { eslint };
