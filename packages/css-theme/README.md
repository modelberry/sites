# Modelberry CSS Theme

Library for working with css theme variables.

## About

The library takes an object and converts it to css variables. It was designed to
be used with Storybook and Gatsby but can be used with any other javascript
framework.

## Example theme

This example contains only a few colors but any css value can be used.

```ts
export const myTheme: ThemeProps = {
  color: {
    rock: {
      100: '#e0e0e0',
      200: '#b0b0b0',
      300: '#909090',
    },
  },
}
```

This results in the css variables: `color-rock-100`, `color-rock-200` and `color-rock-300`.


## Gatbsy

To use the library with Gatbsy, create a typescript file like this:

```ts
import { setCssVars } from '@modelberry/css-theme/plain'
import { myTheme } from './my-theme'

setCssVars({ theme: myTheme })
```

Compile this to javascript (by using e.g. Rollup's umd format) and tell Gatsby
to load this in `gatsby-ssr.js`:

```js
export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setPreBodyComponents([
    <script key="1" type="text/javascript" src="/set-css-vars.js" />,
  ])
}
```

## Storybook

A `StyleElement` is provided that can be used with e.g. Storybook.

```ts
import { Story } from '@storybook/react'
import { StyleElement } from '@modelberry/css-theme/react'
import { myTheme } from './my-theme'

export const ThemeDecorator = (Story: Story<any>) => {
  return (
    <>
      <StyleElement theme={myTheme} />
      <Story />
    </>
  )
}
```


