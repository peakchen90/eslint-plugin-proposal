# require spacing around infix operator '=' in the class property (class-property-space-infix)

This rule allows you to enforce spaced around operator '=' in the class property.

## Rule Details

This rule allows you to enforce spaced around operator '=' in the class property.

## Options

This rule accepts a single options argument for space size, default `1`

```json
"proposal-class/class-property-space-infix": ["error", 1]
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
/* eslint proposal-class/class-property-space-infix: ["error", 0] */
class A {
  static foo='Alice'

  bar=() => {}
}
```
