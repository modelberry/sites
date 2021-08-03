import { CSSObject } from '@emotion/react'
import { AnyProps } from '@modelberry/any/react'

export type ComponentProps<
  Model = undefined,
  Variant = undefined,
  Options = undefined
> = {
  [K in keyof AnyProps]: {
    model?: Model
    variant?: Variant
    options?: Options
  } & AnyProps[K]
}

export type ComponentOptions<Option extends string> = Partial<
  Record<Option, boolean>
>

export type StyleFactory<Variant = undefined, Options = undefined> = (args: {
  variant?: Variant
  options?: Options
}) => any

export type StyleObject = CSSObject | CSSObject[]

export type StyleMap<Variant extends string> = Record<Variant, StyleObject>
