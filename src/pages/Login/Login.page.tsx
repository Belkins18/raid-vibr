import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './Login.page.module.scss'

interface ILoginPageProps extends HTMLAttributes<HTMLDivElement> {}

export const LoginPage = ({ className, ...rest }: ILoginPageProps) => {
  return (
    <div
      className={classNames(styles.LoginPage, className)}
      {...{ ...rest }}
    ></div>
  )
}
