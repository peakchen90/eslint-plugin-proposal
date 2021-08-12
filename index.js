const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(`${__dirname}/lib/rules`),
  configs: {
    recommended: {
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module'
      },
      plugins: [
        'proposal'
      ],
      rules: {
        'proposal/class-property-space-infix-ops': 'error',
        'proposal/class-property-no-extra-semi': 'error',
        'proposal/class-property-no-semi-spacing': 'error',
        'proposal/class-property-no-dupe-property': 'error'
      }
    }
  }
};
