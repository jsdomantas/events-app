module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-use-before-define': ["error", { "functions": true, "classes": true, "variables": false }],
    'react/prop-types': 'off',
    'react/jsx-curly-spacing': ['error', { when: 'always' }],
    'import/no-cycle': 'off',
    'max-len': ['error', { 'code': 140 }],
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'global-require': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-closing-tag-location': 'off',
  },
};
