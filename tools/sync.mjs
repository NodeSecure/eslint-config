// Import Third-party Dependencies
import { request } from "@myunisoft/httpie";
import { JSDOM } from "jsdom";

// Import Internal Dependencies
import { rules as possibleErrors } from "../src/possible-errors.js";
import { rules as bestPractices } from "../src/best-practices.js";
import ecmascript6Rules from "../src/ecmascript6.js";
const { rules: ecmascript6 } = ecmascript6Rules;
import { rules as styles } from "../src/styles.js";
import { rules as variables } from "../src/variables.js";
import { rules as eslintv9 } from "../src/eslintv9.js";

// CONSTANTS
const kEslintRulesReferenceUrl = "https://eslint.org/docs/latest/rules/";
const kLocalRules = new Set([
  ...Object.keys(possibleErrors),
  ...Object.keys(bestPractices),
  ...Object.keys(ecmascript6),
  ...Object.keys(styles),
  ...Object.keys(variables),
  ...Object.keys(eslintv9)
]);

const result = await request("GET", kEslintRulesReferenceUrl);
const dom = new JSDOM(result.data);
const rules = new Set([...parseESLintRulesReferences(dom)]);

for (const rule of rules) {
  if (kLocalRules.has(rule.ruleName) && rule.isDeprecated) {
    console.error(`Rule "${rule.ruleName}" is deprecated! (https://eslint.org/docs/latest/rules/${rule.ruleName})`);
  }
  else if (kLocalRules.has(rule.ruleName) && rule.isRemoved) {
    console.error(`Rule "${rule.ruleName}" is removed! (https://eslint.org/docs/latest/rules/${rule.ruleName})`);
  }
  else if (!kLocalRules.has(rule.ruleName) && !rule.isDeprecated && !rule.isRemoved) {
    console.error(`Rule "${rule.ruleName}" is not present in the local ESLint configuration! (${kEslintRulesReferenceUrl + rule.ruleName})`);
  }
}

function *parseESLintRulesReferences(dom) {
  const rules = [...dom.window.document.querySelectorAll("article.rule")];
  for (const rule of rules) {
    const isDeprecated = rule.classList.contains("rule--deprecated");
    const isRemoved = rule.classList.contains("rule--removed");
    const ruleName = rule.textContent.replaceAll(/\n/g, " ").trimStart().split(" ")[0];

    yield {
      ruleName,
      isDeprecated,
      isRemoved
    };
  }
}
