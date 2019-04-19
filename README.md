# eslint-plugin-proposal

![npm (tag)](https://img.shields.io/npm/v/eslint-plugin-proposal/latest.svg)
[![Travis (.org) branch](https://img.shields.io/travis/peakchen90/eslint-plugin-proposal/master.svg)](https://travis-ci.org/peakchen90/eslint-plugin-proposal)
![node](https://img.shields.io/node/v/eslint-plugin-proposal.svg)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/eslint-plugin-proposal/peer/eslint.svg)
[![npm](https://img.shields.io/npm/dt/eslint-plugin-proposal.svg)](https://www.npmjs.com/package/eslint-plugin-proposal)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/peakchen90/eslint-plugin-proposal/blob/master/LICENSE)


some rules for proposal class. eg: class property.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-proposal`:

```
$ npm install eslint-plugin-proposal --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-proposal` globally.

## Usage

Add `proposal` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "proposal"
  ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "proposal/class-property-space-infix-ops": "error"
  }
}
```

## List of supported rules

* [proposal/class-property-space-infix-ops](./docs/rules/class-property-space-infix-ops.md) require or disallow spacing between operator '=' in class property.
* [proposal/class-property-semi](./docs/rules/class-property-semi.md) require or disallow semicolons instead of ASI in class property.
* [proposal/class-property-no-extra-semi](./docs/rules/class-property-no-extra-semi.md) disallow unnecessary semicolons in class property.
* [proposal/class-property-no-semi-spacing](./docs/rules/class-property-no-semi-spacing.md) disallow spacing before semicolons in class property.
* [proposal/no-dupe-class-property](./docs/rules/no-dupe-class-property.md) disallow duplicate class property.


## Shareable configurations

### Recommended
This plugin exports a recommended configuration.

To enable this configuration use the extends property in your .eslintrc config file:

```json
{
  "extends": [
    "plugin:proposal/recommended"
  ]
}
```

The rules enabled in this configuration are:

* [proposal/class-property-space-infix-ops](./docs/rules/class-property-space-infix-ops.md)
* [proposal/class-property-no-extra-semi](./docs/rules/class-property-no-extra-semi.md)
* [proposal/class-property-no-semi-spacing](./docs/rules/class-property-no-semi-spacing.md)
* [proposal/no-dupe-class-property](./docs/rules/no-dupe-class-property.md)

