module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['prettier', 'prettier/react'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    // project: './tsconfig.json',
    // tsconfigRootDir: __dirname,
    // createDefaultProgram: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'react/static-property-placement': ['off'],
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
