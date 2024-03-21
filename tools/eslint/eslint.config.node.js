/* Parser */
import parser from '@babel/eslint-parser';
/* Config */
import eslintConfigPrettier from 'eslint-config-prettier';
/* Plugins */
import eslintJs from '@eslint/js';
import eslintPluginNode from 'eslint-plugin-n';
import eslintJsStylistic from '@stylistic/eslint-plugin-js';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPlugin from 'eslint-plugin-eslint-plugin';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintUnicornPlugin from 'eslint-plugin-unicorn';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import * as eslintRegExpPlugin from 'eslint-plugin-regexp';
import eslintPluginEslintComments from 'eslint-plugin-eslint-comments';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

/* Rules  */
import { es6Rules } from './rules/es6.js';
import { nodeRules } from './rules/node.js';
import { importRules } from './rules/import.js';
import { regExpRules } from './rules/regexp.js';
import { sonarjsRules } from './rules/sonarjs.js';
import { promiseRules } from './rules/promise.js';
import { unicornRules } from './rules/unicorn.js';
import { commentsRules } from './rules/comments.js';
import { prettierRules } from './rules/prettier.js';
import { stylisticRules } from './rules/stylistic.js';
import { variablesRules } from './rules/variables.js';
import { bestPracticeRules } from './rules/best-practice.js';
import { possibleErrorsRules } from './rules/possible-errors.js';

/* Utils */
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import { constant } from './utils/constant.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

/** @type {import('eslint').Linter.FlatConfig[]} */
const nodeConfig = [
  {
    plugins: {
      ['@eslint/js']: eslintJs,
      ['n']: eslintPluginNode,
      ['@stylistic/js']: eslintJsStylistic,
      ['jsdoc']: eslintPluginJsdoc,
      ['sonarjs']: eslintPluginSonarjs,
      ['import']: eslintPluginImport,
      ['eslint-plugin']: eslintPluginPlugin,
      ['promise']: eslintPluginPromise,
      ['unicorn']: eslintUnicornPlugin,
      ['prettier']: eslintPluginPrettier,
      ['regexp']: eslintRegExpPlugin,
      ['eslint-comments']: eslintPluginEslintComments,
      ['simple-import']: eslintPluginSimpleImportSort,
    },
  },
  ...compat.extends('airbnb-base'),
  ...compat.config(eslintPluginPlugin.configs.recommended),
  {
    files: constant.JAVASCRIPT_FILES,
    languageOptions: {
      parser,
      parserOptions: {
        requireConfigFile: false,
      },
      ecmaVersion: constant.ECMA_VERSION,
      sourceType: 'module',
    },
  },
  {
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...eslintJsStylistic.configs['all-flat'].rules,
      ...eslintPluginJsdoc.configs['flat/recommended-error'].rules,
      ...eslintRegExpPlugin.configs['flat/recommended'].rules,
      ...eslintPluginSonarjs.configs.recommended.rules,
      ...eslintPluginPromise.configs.recommended.rules,
      ...eslintPluginSonarjs.configs.recommended.rules,
      ...eslintUnicornPlugin.configs.recommended.rules,
      ...eslintPluginEslintComments.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintPluginImport.configs.recommended.rules,
      ...es6Rules,
      ...nodeRules,
      ...importRules,
      ...regExpRules,
      ...sonarjsRules,
      ...promiseRules,
      ...unicornRules,
      ...commentsRules,
      ...prettierRules,
      ...stylisticRules,
      ...variablesRules,
      ...bestPracticeRules,
      ...possibleErrorsRules,
    },
  },
  eslintConfigPrettier,
];

export { nodeConfig };
