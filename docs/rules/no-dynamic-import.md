# disallow use dynamic import syntax (proposal/no-dynamic-import)

This rule allows you to enforce disallow use dynamic import syntax.

## Rule Details

This rule allows you to enforce disallow use dynamic import syntax.

## Examples of **incorrect** code for this rule:

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

## Examples of **correct** code for this rule:

```js
import('react')

import('./dynamic-module').then(res => {
  console.log(res)
})

const comp = resolve => require(['./dynamic-module'], resolve)

```

```js
require([])

require(['./dynamic-module'])

require(['./dynamic-module'], res => {
  console.log(res)
})

```

```js
require.ensure(['react'])

require.ensure(['./dynamic-module'])

require.ensure(['./dynamic-module'], res => {
  console.log(res)
})
```
