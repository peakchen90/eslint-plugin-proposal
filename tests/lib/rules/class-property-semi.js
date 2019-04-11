const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/class-property-semi');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  }
}).run('class-property-semi', rule, {
  valid: [
    {
      code: `
        class A {
          static foo = 'Alice';
          bar = () => {};
        }
      `
    },
    {
      code: `
        class A {
          static foo = 'Alice';
          bar = () => {};
        }
      `,
      options: ['always']
    },
    {
      code: `
        class A {
          static foo = 'Alice'
          bar = () => {}
        }
      `,
      options: ['never']
    }
  ],
  invalid: [
    {
      code: `
        class A {
          static foo = 'Alice'
        }
      `,
      options: ['always'],
      errors: [{
        message: 'Missing semicolon.'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice';
        }
      `,
      options: ['never'],
      errors: [{
        message: 'Extra semicolon.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {}
        }
      `,
      options: ['always'],
      errors: [{
        message: 'Missing semicolon.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {};
        }
      `,
      options: ['never'],
      errors: [{
        message: 'Extra semicolon.'
      }]
    }
  ]
});
