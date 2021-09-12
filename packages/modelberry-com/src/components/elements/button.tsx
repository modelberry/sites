import { Button as AnyButton } from '@modelberry/any-element/react'
import {
  ComponentOptions,
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type ButtonVariant = 'primary' | 'secondary' | 'display'
export type ButtonOptions = ComponentOptions<'hideHeading' | 'hideIcon'>
export type ButtonProps = ComponentProps<
  undefined,
  ButtonVariant,
  ButtonOptions
>['button']

const buttonStyle: StyleObject = {
  color: 'white',
  display: 'inline-flex',
  justifyContent: 'center',
  fontSize: 16,
  padding: '8px 16px',
  userSelect: 'none',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 4,
  borderColor: 'transparent',
  textDecoration: 'none',
  ':focus': {
    outlineColor: 'outline',
  },
  svg: {
    margin: '0 auto',
    transform: 'translateX(4px)',
    alignSelf: 'center',
  },
}

const primaryVariantStyle: StyleObject = {
  ...buttonStyle,
  backgroundColor: 'var(--colors-azure)',
  borderColor: 'var(--colors-azure)',
  transition: 'background-color .25s ease',
  ':hover, :focus': {
    backgroundColor: 'var(--colors-ocean)',
  },
}

const secondaryVariantStyle: StyleObject = {
  ...buttonStyle,
  color: 'black',
  borderColor: 'var(--colors-metal)',
  transition: 'border-color .25s ease',
  ':hover, :focus': {
    borderColor: 'var(--colors-bullet)',
  },
}

const displayVariantStyle: StyleObject = {
  ...primaryVariantStyle,
  fontSize: ['18px', '18px', '20px'],
  padding: ['16px 24px', '16px 24px', '16px 32px'],
}

const styleMap: StyleMap<ButtonVariant> = {
  primary: primaryVariantStyle,
  secondary: secondaryVariantStyle,
  display: displayVariantStyle,
}

const hideHeadingOptionStyle: StyleObject = {
  padding: 8,
  borderColor: 'transparent',
  svg: {
    transform: 'translateX(0)',
  },
}

export const buttonStyleFactory: StyleFactory<ButtonVariant, ButtonOptions> = (
  args
) => {
  const useVariant = args.variant || 'primary'
  const baseButtonStyle = styleMap[useVariant]
  return mediaQuery([
    baseButtonStyle,
    args.options?.hideHeading && hideHeadingOptionStyle,
  ])
}

export const Button = ({ variant, options, ...props }: ButtonProps) => {
  const css = buttonStyleFactory({
    variant,
    options,
  })
  return <AnyButton css={css} {...props} />
}
