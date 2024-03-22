/* Parser */
import parser from '@typescript-eslint/parser';
/* Config */
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigAirbnbTypescript from 'eslint-config-airbnb-typescript';

/* Plugins */
import eslintPluginTsdoc from 'eslint-plugin-tsdoc';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginStylisticTs from '@stylistic/eslint-plugin-ts';

import eslintPluginDeprecation from 'eslint-plugin-deprecation';

/* Utils */
import { constant } from './utils/constant.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
const typescriptConfig = tseslint.config(
  {
    plugins: {
      ['@typescript-eslint']: tseslint.plugin,
      ['jsdoc']: eslintPluginJsdoc,
      ['tsdoc']: eslintPluginTsdoc,
      ['import']: eslintPluginImport,
      ['eslint-plugin']: eslintPluginPlugin,
      ['prettier']: eslintPluginPrettier,
      ['@stylistic/ts']: eslintPluginStylisticTs,
      ['deprecation']: eslintPluginDeprecation,
    },
  },
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    files: constant.TYPESCRIPT_FILES,
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: constant.ECMA_VERSION,
        allowAutomaticSingleRunInference: true,
        cacheLifetime: {
          glob: 'Infinity',
        },
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      ...eslintPluginJsdoc.configs['flat/recommended-typescript-error'].rules,
      ...eslintPluginStylisticTs.configs['all-flat'].rules,
      ...eslintPluginDeprecation.configs.recommended.rules,
      ...eslintPluginImport.configs.typescript.rules,
      ...eslintConfigAirbnbTypescript.rules,
      'eslint-plugin/consistent-output': 'off', // Might eventually be removed from `eslint-plugin/recommended`: https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/issues/284
      'eslint-plugin/require-meta-docs-description': [
        'error',
        { pattern: '^(Enforce|Require|Disallow) .+[^. ]$' },
      ],
      'deprecation/deprecation': 'error',
      'tsdoc/syntax': 'error',
      'import/default': 'off',
      'import/export': 'off',
      'import/namespace': 'off',
      'import/no-unresolved': 'off',
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
      ...eslintPluginImport.configs.typescript.settings,
      'import/resolver': {
        ...eslintPluginImport.configs.typescript.settings['import/resolver'],
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      'deprecation/deprecation': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
  eslintConfigPrettier,
);

export { typescriptConfig };
