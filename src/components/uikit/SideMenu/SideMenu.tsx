import { HTMLAttributes, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from '@/providers'

import styles from './SideMenu.module.scss'

interface ISideMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const SideMenu = ({ children, className, ...rest }: ISideMenuProps) => {
  const { isMenuOpen } = useContext(MenuContext)

  return (
    <div
      className={classNames(className, styles.Menu, { isMenuOpen })}
      {...{ ...rest }}
    >
      {children}
    </div>
  )
}
