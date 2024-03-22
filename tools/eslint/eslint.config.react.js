/* Parser */
import tsParser from '@typescript-eslint/parser';
/* Config */
import eslintConfigPrettier from 'eslint-config-prettier';
/* Plugins */
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginStylisticJsx from '@stylistic/eslint-plugin-jsx';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
/* Rules  */
import { reactRules } from './rules/react.js';
/* Utils */
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import { constant } from './utils/constant.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.FlatConfig[]} */
const reactConfig = [
  {
    plugins: {
      ['react']: eslintPluginReact,
      ['jsx-a11y']: eslintPluginJsxA11y,
      ['prettier']: eslintPluginPrettier,
      ['import']: eslintPluginImport,
      ['react-hooks']: eslintPluginReactHooks,
      ['@stylistic/jsx']: eslintPluginStylisticJsx,
      ['react-refresh']: eslintPluginReactRefresh,
    },
  },
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb/hooks'),
  {
    files: [
      ...constant.JAVASCRIPT_FILES,
      ...constant.TYPESCRIPT_FILES,
    ],
    languageOptions: {
      parser: tsParser,
      project: ['tsconfig.json'],
      ecmaVersion: constant.ECMA_VERSION,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      ...eslintPluginImport.configs.react.settings,
      'import/resolver': {
        ...eslintPluginImport.configs.react.settings['import/resolver'],
        node: {
          extensions: constant.JAVASCRIPT_FILES,
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react-refresh/only-export-components': 'error',
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginStylisticJsx.configs['all-flat'].rules,
      ...eslintPluginImport.configs.react.rules,
      ...reactRules,
    },
  },
  eslintConfigPrettier,
];

export { reactConfig };
