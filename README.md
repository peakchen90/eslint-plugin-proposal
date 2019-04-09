# eslint-plugin-proposal-class

some rules for class proposal. eg: class property.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-proposal-class`:

```
$ npm install eslint-plugin-proposal-class --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-proposal-class` globally.

## Usage

Add `proposal-class` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "proposal-class"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "proposal-class/class-property-space-infix": ["error", 1]
  }
}
```

## List of supported rules

* [class-property-space-infix](./docs/rules/class-property-space-infix.md) require spacing around infix operator '='


## Shareable configurations

### Recommended
This plugin exports a recommended configuration.

To enable this configuration use the extends property in your .eslintrc config file:

```json
{
  "extends": [
    "plugin:proposal-class/recommended"
  ]
}
```

The rules enabled in this configuration are:

* [class-property-space-infix](./docs/rules/class-property-space-infix.md)

