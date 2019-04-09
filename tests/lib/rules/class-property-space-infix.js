const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/class-property-space-infix')

// rule
new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  }
}).run('class-property-space-infix', rule, {
  valid: [
    {
      code: `
        class A {
          constructor() {}

          foo() {}
        }
      `
    },
    {
      code: `
        class A {
          static foo = 'Alice'
          bar = () => {}
        }
      `
    },
    {
      code: `
        class A {
          static foo='Alice'
          bar=() => {}
        }
      `,
      options: [0]
    },
    {
      code: `
        class A {
          static foo     =     'Alice'
          bar     =     () => {}
        }
      `,
      options: [5]
    }
  ],
  invalid: [
    {
      code: `
        class A {
          static foo='Alice'
        }
      `,
      options: [1],
      errors: [{
        message: 'Operator \'=\' must be spaced'
      }]
    },
    {
      code: `
        class A {
          bar=() => {}
        }
      `,
      options: [1],
      errors: [{
        message: 'Operator \'=\' must be spaced'
      }]
    },
    {
      code: `
        class A {
          bar= () => {}
        }
      `,
      options: [1],
      errors: [{
        message: 'Operator \'=\' must be spaced'
      }]
    },
    {
      code: `
        class A {
          bar =() => {}
        }
      `,
      options: [1],
      errors: [{
        message: 'Operator \'=\' must be spaced'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice'
          bar=() => {}
        }
      `,
      options: [1],
      errors: [{
        message: 'Operator \'=\' must be spaced'
      }]
    }
  ]
})
