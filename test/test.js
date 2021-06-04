"use strict";

// Require Node.js dependencies
const { join } = require("path");
const { strictEqual } = require("assert");

// Require third-party dependencies
const { CLIEngine } = require("eslint");

const engine = new CLIEngine({
    configFile: join(__dirname, "..", "index.js")
});

const result = engine.executeOnText('', 'test.js');
try {
    strictEqual(result.errorCount, 0);
    strictEqual(result.warningCount, 0);
}
catch (err) {
    console.error(JSON.stringify(result.results, null, 2));
    throw err;
}
