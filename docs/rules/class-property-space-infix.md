# require spacing around infix operator '=' in the class property (class-property-space-infix)

This rule allows you to enforce spaced around operator '=' in the class property.

The `--fix` option on the command line can automatically fix some of the problems reported by this rule.

## Rule Details

This rule allows you to enforce spaced around operator '=' in the class property.

## Options

This rule accepts a single options argument. default `always`, it must has infix, `never` for opposite.

```json
"proposal-class/class-property-space-infix": ["error", "always"]
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
/* eslint proposal-class/class-property-space-infix: ["error", "never"] */
class A {
  static foo='Alice'

  bar=() => {}
}
```

## Example

### invalid
```js
class A {
  static foo= 'Alice'

  bar =() => {}
}
```

### valid
```js
class A {
  static foo = 'Alice'

  bar = () => {}
}
```

```js
/* eslint proposal-class/class-property-space-infix: ["error", "never"] */
class A {
  static foo='Alice'

  bar=() => {}
}
```
