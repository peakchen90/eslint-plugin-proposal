const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/class-property-no-extra-semi');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module'
  }
}).run('class-property-no-extra-semi', rule, {
  valid: [
    `class A {
      foo;
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
          static foo = 'Alice';;
        }
      `,
      errors: [{
        message: 'Unnecessary semicolon.'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice';
          ;
        }
      `,
      errors: [{
        message: 'Unnecessary semicolon.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {};;
        }
      `,
      errors: [{
        message: 'Unnecessary semicolon.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {};
          ;;
        }
      `,
      errors: [{
        message: 'Unnecessary semicolon.'
      }, {
        message: 'Unnecessary semicolon.'
      }]
    }
  ]
});
