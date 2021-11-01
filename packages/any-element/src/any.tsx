import { jsx } from '@emotion/react'
import type { CSSObject } from '@emotion/react'
import { anyReset } from './resets/any-reset'
import { elementResetMap, ElementResetName } from './resets/element-reset-map'

type JSXIntrElName = keyof jsx.JSX.IntrinsicElements
export type StyleObject = CSSObject | CSSObject[]

/**
 * Extend JSX.IntrinsicElements with AnyProps: `is` and `anyCss`
 */
export type AnyProps = {
  [K in JSXIntrElName]: jsx.JSX.IntrinsicElements[K] & {
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: JSXIntrElName
    anyCss?: StyleObject
  }
}

export const Any: React.FC<any> = ({ anyCss, is, ...props }: any) => {
  const elementName: ElementResetName = is || 'div'
  const elementReset: CSSObject = elementResetMap[elementName]
  return jsx(
    elementName,
    { css: [anyReset, elementReset, anyCss], ...props },
    props.children
  )
}
