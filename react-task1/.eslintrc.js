module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'jsx-quotes': [1, 'prefer-double'],
    'react/self-closing-comp': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
  },
};
