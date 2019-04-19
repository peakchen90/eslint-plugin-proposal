# disallow unnecessary semicolons in class property (proposal/class-property-no-extra-semi)

This rule allows you to enforce disallow unnecessary semicolons in class property.

The `--fix` option on the command line can automatically fix some of the problems reported by this rule.

## Rule Details

This rule allows you to enforce disallow unnecessary semicolons in class property.

## Examples of **incorrect** code for this rule:

```js
class A {
  static foo = 'Alice';;
  bar = () => {};;
}
```

```js
class A {
  static foo = 'Alice';
  ;

  bar = () => {};
  ;
}
```

## Examples of **correct** code for this rule:

```js
class A {
  static foo = 'Alice';
  bar = () => {};
}
```

```js
class A {
  static foo = 'Alice'
  bar = () => {}
}
```
