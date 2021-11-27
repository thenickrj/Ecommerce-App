module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    // "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  // parser: "@babel/eslint-parser",
  // Newly added property
  // ecmaVersion: 2017,

  // parserOptions: {
  //   ecmaVersion: 2017,
  // },
};
