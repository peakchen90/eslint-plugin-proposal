const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/class-property-no-initialized');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  }
}).run('class-property-no-initialized', rule, {
  valid: [
    `class A {
      foo = 'Alice'
    }`,
    `class A {
      foo = () => {}
    }`,
    `class A {
      static foo = 'Alice'
    }`,
    `class A {
      static foo = () => {}
    }`,
    `class A {
      foo = undefined
    }`,
    `class A {
      foo = null
    }`,
    `class A {
      static foo = undefined
    }`,
    `class A {
      static foo = null
    }`,
  ],
  invalid: [
    {
      code: `
        class A {
          foo
        }
      `,
      errors: [{
        message: 'It is necessary be initialized.'
      }]
    },
    {
      code: `
        class A {
          static foo
        }
      `,
      errors: [{
        message: 'It is necessary be initialized.'
      }]
    }
  ]
});
