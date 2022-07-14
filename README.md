# Project setup

## Typescript

[Typescript in your project](https://www.typescriptlang.org/download)

```sh
npm install typescript --save-dev
```

```sh
npx tsc
```

## ESLint

[Linting your TypeScript Codebase](https://typescript-eslint.io/docs/linting/)

```sh
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
```
## Prettier

```sh
npm install --save-dev prettier
```

```js
// .prettierrc.js
module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: true,
  };
```

## Pre-Commit hook using Husky and Link-staged
