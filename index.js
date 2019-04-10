module.exports = {
  rules: {
    'class-property-space-infix': require('./lib/rules/class-property-space-infix')
  },
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
        "proposal-class/class-property-space-infix": "error"
      }
    }
  }
}
