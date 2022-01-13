# Modelberry Any Element

The `Any element` with CSS reset and CSS Emotion props.

## So what is it?

In it's core it's a convenience.

- It's convenient because it supplies all the HTML elements as a React function.
- It's convenient because it provides a build in css reset.
- And it's convenient because the `anyCss` property provides a clear way to
  handle css from parent elements.

## anyCss

All the Any elements pass the `anyCss` property to the Emotion `css` property.
This is convenient because of the way Emotion works together with Babel.

In larger projects where parts of the UI are maintained in separate libraries it
can become unclear which library takes care of handling the Emotion css
property.

Ideally you want to be able to override specific css from the outer most
component all the way down to the inner most HTML element.

The `anyCss` property takes care of this.

```ts
export const MyDiv = ({ anyCss, ...props }: MyProps) => {
  const myCss = { color: 'blue' }
  return (
    <Div anyCss={[myCss, anyCss]} {...props} />
  )
}
```

In the example `anyCss` is passed on to the child element by adding it to the
component style in an array. This way parent elements can override child element
styling. The Any element in the end takes care passing the array to emotion.
Emotion then takes care of merging the styling and generate the required
classes.

## Credits

Developed by Thijs Krooswijk and Jacco Meijer for the Wheelroom project in 2020
and 2021. Fixed and improved by Jacco Meijer for the Modelberry project in 2021,
2022 and onwards.
