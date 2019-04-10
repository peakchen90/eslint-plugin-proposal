const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/class-property-space-infix')

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
      options: ['never']
    }
  ],
  invalid: [
    {
      code: `
        class A {
          static foo='Alice'
        }
      `,
      options: ['always'],
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
      options: ['always'],
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
      options: ['always'],
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
      options: ['always'],
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
      options: ['always'],
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
      options: ['never'],
      errors: [{
        message: 'Operator \'=\' must be spaced'
      }]
    }
  ]
})
