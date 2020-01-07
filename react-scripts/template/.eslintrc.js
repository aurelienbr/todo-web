module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['semistandard', 'plugin:react/recommended', 'prettier', 'prettier/standard', 'plugin:jest/recommended'],
  plugins: ['', 'react', 'prettier', 'standard', 'jest'],
  rules: {
    'no-use-before-define': 'off',
    'import/no-namespace': 'off',
    'no-duplicate-imports': 'off',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'import/no-nodejs-modules': 'off',
    'no-invalid-this': 'off',
    'prettier/prettier': ['error', { singleQuote: true, printWidth: 150 }],
    'max-len': ['error', { code: 150 }],
  },
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  globals: {
    page: 'true',
  },
};
