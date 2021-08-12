const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-dynamic-import');

new RuleTester({
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
}).run('no-dynamic-import', rule, {
  valid: [
    'import React from "react"',
    'import "jquery"',
    'import "./a.scss"',
    'require("react")',
    'require("jquery")',
    'require("./a.scss")',
    'foo.import()',
    'foo.require()',
    'foo.require.ensure()',
  ],
  invalid: [
    {
      code: 'import("react")',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    },
    {
      code: 'import("./a.scss")',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    },
    {
      code: 'require(["react"])',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    },
    {
      code: 'require(["./a.scss"])',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    },
    {
      code: 'require.ensure([])',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    },
    {
      code: 'require.ensure(["react"])',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    },
    {
      code: 'require.ensure(["./a.scss"])',
      errors: [{
        message: 'Cannot use dynamic import syntax.'
      }]
    }
  ]
});
