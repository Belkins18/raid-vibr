/* eslint-disable @typescript-eslint/no-var-requires */

import classNames from 'classnames'
import { HTMLAttributes } from 'react'

export enum EPictureExt {
  png = '.png',
  jpeg = '.jpeg',
  jpg = '.jpg',
  webp = '.webp',
}
interface IPictureProps extends HTMLAttributes<HTMLElement> {
  img: {
    name: string
    path: string | null
    ext: EPictureExt
  }
}
export const Picture = ({ img, className, ...rest }: IPictureProps) => {
  const { name, path, ext } = img
  const avifSrc = !path
    ? new URL(`/src/assets/images/${name}.avif`, import.meta.url).href
    : new URL(`/src/assets/images/${path}/avif/${name}.avif`, import.meta.url)
        .href
  const imgSrc = !path
    ? new URL(`/src/assets/images/${name}${ext}`, import.meta.url).href
    : new URL(
        `/src/assets/images/${path}/default/${name}${ext}`,
        import.meta.url,
      ).href

  return (
    <picture className={classNames(className)} {...rest}>
      <source srcSet={avifSrc} type="image/avif" />
      <img src={imgSrc} alt="img" loading="lazy" />
    </picture>
  )
}
