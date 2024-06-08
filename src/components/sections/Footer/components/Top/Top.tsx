import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Brand, Navigate } from '@/components/smart'

import { TParams } from '@/types'

import styles from './Top.module.scss'

interface ITopProps extends HTMLAttributes<HTMLDivElement> {
  params: TParams
  navList: {
    title: string
    href?: string
    link?: string
  }[]
}

export const Top = ({ className, params, navList, ...rest }: ITopProps) => {
  return (
    <div className={classNames(styles.Top, className)} {...{ ...rest }}>
      <div className="container">
        <Brand className={styles.Brand} />

        {!params.isMobile && (
          <Navigate navList={navList} className={styles.Navigate} />
        )}
      </div>
    </div>
  )
}
