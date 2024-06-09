import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './Home.page.module.scss'

interface IHomePageProps extends HTMLAttributes<HTMLDivElement> {}

export const HomePage = ({ className, ...rest }: IHomePageProps) => {
  return (
    <div
      className={classNames(styles.HomePage, className)}
      {...{ ...rest }}
    ></div>
  )
}
