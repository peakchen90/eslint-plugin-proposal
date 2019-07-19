# require or disallow spacing between operator '=' in class property (proposal/class-property-space-infix-ops)

This rule allows you to enforce require or disallow spacing between operator '=' in class property.

The `--fix` option on the command line can automatically fix some of the problems reported by this rule.

## Rule Details

This rule allows you to enforce require or disallow spacing between operator '=' in class property.

## Options

This rule accepts a single options argument. default `always`, it for require spacing, `never` for disallow spacing.

```json
{
  "proposal/class-property-space-infix-ops": ["error", "always"]
}
```

### always

```js
class A {
  static foo = 'Alice'
  bar = () => {}
}
```

### never

```js
/* eslint proposal/class-property-space-infix-ops: ["error", "never"] */
class A {
  static foo='Alice'
  bar=() => {}
}
```

## Examples of **incorrect** code for this rule:

```js
class A {
  static foo='Alice'
  bar=() => {}
}
```

```js
class A {
  static foo= 'Alice'
  bar =() => {}
}
```

```js
/* eslint proposal/class-property-space-infix-ops: ["error", "never"] */
class A {
  static foo = 'Alice'
  bar = () => {}
}
```

## Examples of **correct** code for this rule:

```js
class A {
  static foo = 'Alice'
  bar = () => {}
}
```

```js
/* eslint proposal/class-property-space-infix-ops: ["error", "never"] */
class A {
  static foo='Alice'
  bar=() => {}
}
```
