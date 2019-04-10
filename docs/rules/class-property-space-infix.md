# require spacing around infix operator '=' in the class property (class-property-space-infix)

This rule allows you to enforce spaced around operator '=' in the class property.

## Rule Details

This rule allows you to enforce spaced around operator '=' in the class property.

## Options

This rule accepts a single options argument. default `true`, it must has infix, `false` for opposite.

```json
"proposal-class/class-property-space-infix": ["error", true]
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
/* eslint proposal-class/class-property-space-infix: ["error", false] */
class A {
  static foo='Alice'

  bar=() => {}
}
```
