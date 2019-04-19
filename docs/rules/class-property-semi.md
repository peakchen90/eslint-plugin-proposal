# require or disallow semicolons instead of ASI in class property (proposal/class-property-semi)

This rule allows you to enforce require or disallow semicolons instead of ASI in class property.

The `--fix` option on the command line can automatically fix some of the problems reported by this rule.

## Rule Details

This rule allows you to enforce require or disallow semicolons instead of ASI in class property.

## Options

This rule accepts a single options argument. default `always`, it for require semicolons, `never` for disallow semicolons.

```json
{
  "proposal/class-property-semi": ["error", "always"]
}
```

### always

```js
class A {
  static foo = 'Alice';
  bar = () => {};
}
```

### never

```js
/* eslint proposal/class-property-semi: ["error", "never"] */
class A {
  static foo='Alice'
  bar=() => {}
}
```
