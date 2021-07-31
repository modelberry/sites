import { Div } from '@modelberry/any/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
} from '../../lib/component-styles'

export type WrapperOptions = ComponentOptions<'noMargin' | 'useMaxWidth'>
export type WrapperProps = ComponentProps<
  undefined,
  undefined,
  WrapperOptions
>['div']

const baseStyle = {
  margin: '0 auto',
  padding: 16,
  width: '100%',
  maxWidth: 992,
}

export const wrapperStyleFactory: StyleFactory<any, WrapperOptions> = (
  args
) => {
  return [baseStyle, { marginBottom: args.options?.noMargin ? 0 : 4 }]
}

export const Wrapper = ({ options, ...props }: WrapperProps) => {
  const css = wrapperStyleFactory({ options })
  return <Div css={css} {...props} />
}
