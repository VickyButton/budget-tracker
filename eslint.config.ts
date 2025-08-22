// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import stylistic from '@stylistic/eslint-plugin';

export default withNuxt([
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/curly-newline': ['error'],
      '@stylistic/eol-last': ['error'],
      '@stylistic/max-len': ['error', 100],
      '@stylistic/multiline-ternary': ['error'],
      '@stylistic/newline-per-chained-call': ['error'],
      '@stylistic/no-multiple-empty-lines': ['error'],
      '@stylistic/no-trailing-spaces': ['error'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/spaced-comment': ['error'],
    },
  },
]);
