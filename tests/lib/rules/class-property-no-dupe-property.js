const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/class-property-no-dupe-property');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  }
}).run('class-property-no-dupe-property', rule, {
  valid: [
    `class A {
      static foo = 'Alice'
      static bar = 'Bob'
    }`,
    `class A {
      foo = () => {}
      bar = () => {}
    }`,
    `class A {
      static foo = 'Alice'
      foo = () => {}
    }`,
    `class A {
      static foo = 'Alice'
      get foo() {}
      set foo(x) {}
    }`,
    `class A {
      static foo = 'Alice'
      static bar() {}
    }`,
    `class A {
      foo = () => {}
      static foo() {}
    }`,
    `class A {
      static foo = 'Alice'
      foo() {}
    }`
  ],
  invalid: [
    {
      code: `
        class A {
          static foo = 'Alice'
          static foo = 'Bob'
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice'
          static foo() {}
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }]
    },
    {
      code: `
        class A {
          foo = 'Alice'
          foo = () => {}
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }]
    },
    {
      code: `
        class A {
          foo = 'Alice'
          foo() {}
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }]
    },
    {
      code: `
        class A {
          foo = 'Alice'
          get foo() {}
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }]
    },
    {
      code: `
        class A {
          foo = 'Alice'
          set foo(x) {}
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }]
    },
    {
      code: `
        class A {
          static foo = 'Alice'
          static foo() {}
          bar = 'Bob'
          bar() {}
        }
      `,
      errors: [{
        message: 'Duplicate name \'foo\'.'
      }, {
        message: 'Duplicate name \'bar\'.'
      }]
    }
  ]
});
