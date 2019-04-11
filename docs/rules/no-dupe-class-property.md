# disallow duplicate class property (proposal-class/no-dupe-class-property)

This rule allows you to enforce disallow duplicate class property.

## Rule Details

This rule allows you to enforce disallow duplicate class property.

## Examples of **incorrect** code for this rule:

```js
class A {
  static foo = 'Alice'
  static foo = 'Bob'
}
```

```js
class A {
  foo = 'Alice'
  foo = () => {}
}
```

```js
class A {
  foo = 'Alice'
  foo() {}
}
```

## Examples of **correct** code for this rule:

```js
class A {
  static foo = 'Alice'
  static bar = () => {}
  
  foo = 'Alice'
  bar = () => {}
}
```

```js
class A {
  static foo = 'Alice'
  foo() {}
}
```

```js
class A {
  foo = 'Alice'
  static foo() {}
}
```

