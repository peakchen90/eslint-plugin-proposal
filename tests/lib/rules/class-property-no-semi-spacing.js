const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/class-property-no-semi-spacing');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
}).run('class-property-no-semi-spacing', rule, {
  valid: [
    `class A {
      foo
    }`,
    `class A {
      static foo = 'Alice';
    }`,
    `class A {
      bar = () => {};
    }`,
    `class A {
      static foo = 'Alice'
    }`,
    `class A {
      bar = () => {}
    }`
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
});
