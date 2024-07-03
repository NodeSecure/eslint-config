"use strict";

// Require Node.js dependencies
const { strictEqual } = require("assert").strict;

// Require third-party dependencies
const { ESLint } = require("eslint");

// Require ESLint config
const config = require("../index");

config.parserOptions.requireConfigFile = false;

async function main() {
  const eslint = new ESLint({
    overrideConfigFile: "config.eslint.mjs"
  });

  const [result] = await eslint.lintText('');

  strictEqual(result.warningCount, 0);
  strictEqual(result.errorCount, 0);
}
main().catch(console.error);
