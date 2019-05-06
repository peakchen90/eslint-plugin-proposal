const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/class-property-space-infix-ops');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  }
}).run('class-property-space-infix-ops', rule, {
  valid: [
    {
      code: `
        class A {
          foo
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
          bar = () => {}
        }
      `
    },
    {
      code: `
        class A {
          static foo='Alice'
        }
      `,
      options: ['never']
    },
    {
      code: `
        class A {
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
        message: 'Operator \'=\' must be spaced.'
      }]
    },
    {
      code: `
        class A {
          static foo ='Alice'
        }
      `,
      options: ['always'],
      errors: [{
        message: 'Operator \'=\' must be spaced.'
      }]
    },
    {
      code: `
        class A {
          static foo= 'Alice'
        }
      `,
      options: ['always'],
      errors: [{
        message: 'Operator \'=\' must be spaced.'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice'
        }
      `,
      options: ['never'],
      errors: [{
        message: 'Operator \'=\' should not be spaced.'
      }]
    },
    {
      code: `
        class A {
          static foo= 'Alice'
        }
      `,
      options: ['never'],
      errors: [{
        message: 'Operator \'=\' should not be spaced.'
      }]
    },
    {
      code: `
        class A {
          static foo ='Alice'
        }
      `,
      options: ['never'],
      errors: [{
        message: 'Operator \'=\' should not be spaced.'
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
        message: 'Operator \'=\' must be spaced.'
      }]
    },
    {
      code: `
        class A {
          bar = () => {}
        }
      `,
      options: ['never'],
      errors: [{
        message: 'Operator \'=\' should not be spaced.'
      }]
    }
  ]
});
