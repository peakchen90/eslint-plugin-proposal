# disallow use dynamic import syntax (proposal/no-dynamic-import)

This rule allows you to enforce disallow use dynamic import syntax.

## Rule Details

This rule allows you to enforce disallow use dynamic import syntax.

## Examples of **incorrect** code for this rule:

```js
import('react')

import('./dynamic-module').then(res => {
  console.log(res)
})

require(['./dynamic-module'], res => {
  console.log(res)
})

require.ensure(['./dynamic-module'], res => {
  console.log(res)
})
```

## Examples of **correct** code for this rule:

```js
import React from 'react'
import 'jquery'
import './style.scss'
```

```js
const React = require('react')
require('jquery')
require('./style.scss')
```
