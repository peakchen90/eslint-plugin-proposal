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

## Supported Rules

* [class-property-space-infix](./docs/rules/class-property-space-infix.md)





