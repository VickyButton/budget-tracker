// @ts-check
import { globalIgnores } from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt([
  globalIgnores(['**/.nuxt/**', '**/node_modules/**', '**/*.js', '**/*.d.ts']),
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['error', { 'singleline': { 'max': 4 } }],
    },
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    plugins: { '@stylistic': stylistic },
    rules: {
      '@stylistic/array-bracket-newline': ['error', { multiline: true }],
      '@stylistic/array-element-newline': ['error', { multiline: true }],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/curly-newline': ['error', 'always'],
      '@stylistic/eol-last': ['error'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/lines-between-class-members': [
        'error',
        {
          enforce: [
            {
              blankLine: 'always',
              prev: 'method',
              next: 'method',
            },
          ],
        },
        { exceptAfterOverload: true },
      ],
      '@stylistic/max-len': ['error', 100],
      '@stylistic/member-delimiter-style': ['error', { multiline: { delimiter: 'semi' } }],
      '@stylistic/multiline-ternary': ['error'],
      '@stylistic/newline-per-chained-call': ['error'],
      '@stylistic/no-multiple-empty-lines': ['error'],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/object-curly-newline': [
        'error',
        {
          'ObjectExpression': { 'multiline': true },
          'ImportDeclaration': { 'multiline': true },
        },
      ],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/object-property-newline': ['error'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/spaced-comment': ['error'],
    },
  },
]);
