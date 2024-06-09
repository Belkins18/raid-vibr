import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Typography } from '@/components/uikit'

import styles from './NotFound.page.module.scss'

interface INotFoundPageProps extends HTMLAttributes<HTMLDivElement> {}

export const NotFoundPage = ({ className, ...rest }: INotFoundPageProps) => {
  return (
    <div
      className={classNames(styles.NotFoundPage, className, 'container')}
      {...{ ...rest }}
    >
      <Typography tag={'h3'} className={styles.Title}>
        404
        <br />
        <br />
        <span>Page Not Found</span>
      </Typography>
    </div>
  )
}
