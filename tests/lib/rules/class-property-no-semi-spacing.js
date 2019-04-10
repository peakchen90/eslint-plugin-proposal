const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/class-property-no-semi-spacing')

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  }
}).run('class-property-no-semi-spacing', rule, {
  valid: [
    {
      code: `
        class A {
          static foo = 'Alice';
        }
      `
    },
    {
      code: `
        class A {
          bar = () => {};
        }
      `
    },
    {
      code: `
        class A {
          static foo = 'Alice'
        }
      `
    },
    {
      code: `
        class A {
          bar = () => {}
        }
      `
    }
  ],
  invalid: [
    {
      code: `
        class A {
          static foo = 'Alice' ;
        }
      `,
      errors: [{
        message: 'Unexpected whitespace before semicolon.'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice'
          ;
        }
      `,
      errors: [{
        message: 'Unexpected whitespace before semicolon.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {} ;
        }
      `,
      errors: [{
        message: 'Unexpected whitespace before semicolon.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {}
          ;
        }
      `,
      errors: [{
        message: 'Unexpected whitespace before semicolon.'
      }]
    }
  ]
})
