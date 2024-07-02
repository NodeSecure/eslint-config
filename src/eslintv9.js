"use strict";

const rules = {
  "no-constant-binary-expression": "error",
  "no-constructor-return": "off",
  "no-dupe-else-if": "error",
  "no-import-assign": "off",
  "no-loss-of-precision": "error",
  "no-new-native-nonconstructor": "off",
  "no-promise-executor-return": ["error", { allowVoid: true }],
  "no-setter-return": "error",
  "no-unreachable-loop": "error",
  "no-unsafe-optional-chaining": "error",
  "no-unused-private-class-members": "error",
  "no-use-before-define": "off",
  "no-useless-assignment": "error",
  "no-useless-backreference": "error",
  "default-case-last": "error",
  "default-param-last": ["error"],
  "grouped-accessor-pairs": "error",
  "logical-assignment-operators": ["error", "always"],
  "no-empty-static-block": "error",
  "no-nonoctal-decimal-escape": "error",
  "no-object-constructor": "off",
  "no-restricted-exports": "off",
  "no-useless-catch": "error",
  "prefer-exponentiation-operator": "off",
  "prefer-named-capture-group": "off",
  "prefer-object-has-own": "error",
  "prefer-regex-literals": "off",
  "strict": "safe"
};

module.exports = { rules };
