import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
