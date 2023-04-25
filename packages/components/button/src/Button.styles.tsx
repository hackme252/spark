import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import {
  contrastVariants,
  filledVariants,
  ghostVariants,
  outlinedVariants,
  tintedVariants,
} from './variants'

export const buttonStyles = cva(
  [
    'gap-md box-border inline-flex items-center justify-center whitespace-nowrap',
    'px-lg',
    'text-body-1 font-bold',
    'focus-visible:ring-outline-high ring-inset focus-visible:outline-none focus-visible:ring-2',
  ],
  {
    variants: {
      /**
       * Main style of the button.
       *
       * - `filled`: Button will be plain.
       *
       * - `outlined`: Button will be transparent with an outline.
       *
       * - `tinted`: Button will be filled but using a lighter color scheme.
       *
       * - `ghost`: Button will look like a link. No borders, plain text.
       *
       * - `contrast`: Button will be surface filled. No borders, plain text.
       *
       */
      design: makeVariants<'design'>({
        filled: [],
        outlined: ['bg-transparent', 'ring-2', 'ring-current'],
        tinted: [],
        ghost: [],
        contrast: ['bg-surface'],
      }),

      /**
       * Color scheme of the button.
       */
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'danger', 'neutral', 'surface']
      >({
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        neutral: [],
        surface: [],
      }),

      size: makeVariants<'size', ['sm', 'md', 'lg']>({
        sm: ['min-w-sz-32', 'h-sz-32'],
        md: ['min-w-sz-44', 'h-sz-44'],
        lg: ['min-w-sz-56', 'h-sz-56'],
      }),

      shape: makeVariants<'shape', ['rounded', 'square', 'pill']>({
        rounded: ['rounded-lg'],
        square: ['rounded-none'],
        pill: ['rounded-full'],
      }),

      /**
       * Disable the button, preventing user interaction and adding opacity.
       */
      disabled: {
        true: ['cursor-not-allowed', 'opacity-dim-3'],
      },
    },
    compoundVariants: [
      ...filledVariants,
      ...outlinedVariants,
      ...tintedVariants,
      ...ghostVariants,
      ...contrastVariants,
    ],
    defaultVariants: {
      design: 'filled',
      intent: 'primary',
      size: 'md',
      shape: 'rounded',
    },
  }
)

export type ButtonStylesProps = VariantProps<typeof buttonStyles>
