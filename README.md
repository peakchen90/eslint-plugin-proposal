# eslint-plugin-proposal-class

![npm (tag)](https://img.shields.io/npm/v/eslint-plugin-proposal-class/latest.svg)
[![Travis (.org) branch](https://img.shields.io/travis/peakchen90/eslint-plugin-proposal-class/master.svg)](https://travis-ci.org/peakchen90/eslint-plugin-proposal-class)
![node](https://img.shields.io/node/v/eslint-plugin-proposal-class.svg)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-proposal-class/peer/eslint.svg)
[![npm](https://img.shields.io/npm/dt/eslint-plugin-proposal-class.svg)](https://www.npmjs.com/package/eslint-plugin-proposal-class)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/peakchen90/eslint-plugin-proposal-class/blob/master/LICENSE)


some rules for proposal class. eg: class property.

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
    "proposal-class/class-property-space-infix-ops": "error"
  }
}
```

## List of supported rules

* [proposal-class/class-property-space-infix-ops](./docs/rules/class-property-space-infix-ops.md) require or disallow spacing between operator '=' in class property.
* [proposal-class/class-property-semi](./docs/rules/class-property-semi.md) require or disallow semicolons instead of ASI in class property.
* [proposal-class/class-property-no-extra-semi](./docs/rules/class-property-no-extra-semi.md) disallow unnecessary semicolons in class property.
* [proposal-class/class-property-no-semi-spacing](./docs/rules/class-property-no-semi-spacing.md) disallow spacing before semicolons in class property.
* [proposal-class/no-dupe-class-property](./docs/rules/no-dupe-class-property.md) disallow duplicate class property.


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

* [proposal-class/class-property-space-infix-ops](./docs/rules/class-property-space-infix-ops.md)
* [proposal-class/class-property-no-extra-semi](./docs/rules/class-property-no-extra-semi.md)
* [proposal-class/class-property-no-semi-spacing](./docs/rules/class-property-no-semi-spacing.md)
* [proposal-class/no-dupe-class-property](./docs/rules/no-dupe-class-property.md)

