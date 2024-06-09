import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import styles from './Register.page.module.scss'

interface IRegisterPageProps extends HTMLAttributes<HTMLDivElement> {}

export const RegisterPage = ({ className, ...rest }: IRegisterPageProps) => {
  return (
    <div
      className={classNames(styles.RegisterPage, className)}
      {...{ ...rest }}
    ></div>
  )
}
