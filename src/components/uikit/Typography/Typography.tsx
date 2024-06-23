import { ElementType, HTMLAttributes, createElement, forwardRef } from 'react'
import classNames from 'classnames'

import styles from './Typography.module.scss'

// eslint-disable-next-line react-refresh/only-export-components
export enum ETypographyVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  subtitle = 'subtitle',
  body = 'body',
  button = 'button',
  caption = 'caption',
  overline = 'overline',
  badge = 'badge',
}

interface ITypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: ETypographyVariant
  tag?: ElementType
}

export const Typography = forwardRef<HTMLDivElement, ITypographyProps>(
  (
    {
      children,
      variant = ETypographyVariant.subtitle,
      className,
      tag = 'div',
      ...rest
    },
    ref,
  ) => {
    return createElement(
      tag,
      {
        ...{ ...rest, ref, variant },
        className: classNames(styles.Typography, className),
      },
      children,
    )
  },
)
