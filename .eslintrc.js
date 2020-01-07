module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/standard',
    'semistandard',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }], // On autorise les declarations non utilisés lorsqu'on fait un spread
    '@typescript-eslint/no-use-before-define': 'off', // Certains objets sont déclarés après leurs utilisations dans le code, par exemple les stylesheet
    '@typescript-eslint/interface-name-prefix': ['error', 'always'], // On préfixe les interface avec I
    // 'import/no-unresolved': 'off', // Typescript s'en occupe pour nous
    'import/no-namespace': 'off', // On utilise les import de ce type
    // '@typescript-eslint/prefer-interface': 'off', // Surtout pour déclarer les states, les types sont plus agréables à utiliser
    '@typescript-eslint/explicit-member-accessibility': 'off', // La règle est trop lourde
    '@typescript-eslint/explicit-function-return-type': 'off', // La règle est trop lourde
    'no-invalid-this': 'off', // La règle est bugué pour les class arrow function
    'import/order': ['error', { 'newlines-between': 'always' }],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
      },
    ],
    // 'sort-imports': 'error'
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['src'],
      },
    },
  },
  globals: {
    page: true,
  },
};
