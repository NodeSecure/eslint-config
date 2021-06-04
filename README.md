# Eslint-config
NodeSecure Node.js Eslint configuration (Work for both JavaScript and TypeScript projects).

## Requirements
- [Node.js](https://nodejs.org/en/) v12 or higher

## Getting Started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @nodesecure/eslint-config -D
# or
$ yarn add @nodesecure/eslint-config -D
```

## Usage example

Create an `.eslintrc` file at the root of your project with the following (JSON) content:
```json
{
    "extends": "@nodesecure/eslint-config"
}
```

Edit the file as you want by adding [custom rules](https://eslint.org/docs/rules/) if required !
