const requireIndex = require("requireindex");

module.exports = {
  rules: requireIndex(__dirname + '/lib/rules'),
  configs: {
    recommended: {
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 6
      },
      plugins: [
        'proposal-class'
      ],
      rules: {
        "proposal-class/class-property-space-infix-ops": "error"
      }
    }
  }
}
