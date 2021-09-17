import { jsx } from '@emotion/react'
import type { CSSObject } from '@emotion/react'
import { anyReset } from './resets/any-reset'
import { elementResetMap, ElementResetName } from './resets/element-reset-map'

type JSXIntrElName = keyof jsx.JSX.IntrinsicElements

/**
 * Extend JSX.IntrinsicElements with AnyProps: `is` and `css`
 */
export type AnyProps = {
  [K in JSXIntrElName]: jsx.JSX.IntrinsicElements[K] & {
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: JSXIntrElName
  }
}

export const Any: React.FC<any> = (props: any) => {
  const elementName: ElementResetName = props.is || 'div'
  const elementReset: CSSObject = elementResetMap[elementName]
  const attr = Object.assign({}, props)
  attr.css = [anyReset, elementReset, props.css]
  delete attr.is
  return jsx(elementName, attr, props.children)
}
