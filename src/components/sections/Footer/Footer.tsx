import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Down, Middle, Top } from './components'

import styles from './Footer.module.scss'
import { TParams } from '@/types'

interface IFooterProps extends HTMLAttributes<HTMLElement> {
  params: TParams
  navList: {
    title: string
    href?: string
    link?: string
  }[]
}

export const Footer = ({
  className,
  params,
  navList,
  ...rest
}: IFooterProps) => {
  return (
    <footer className={classNames(styles.Footer, className)} {...{ ...rest }}>
      <Top params={params} navList={navList} />
      <Middle />
      <Down />
    </footer>
  )
}
