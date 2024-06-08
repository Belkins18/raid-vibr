import { HTMLAttributes, useContext } from 'react'
import classNames from 'classnames'

import { MenuContext } from '@/providers'

import styles from './HamburgerButton.module.scss'

interface IHamburgerButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const HamburgerButton = ({
  className,
  ...rest
}: IHamburgerButtonProps) => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)

  const clickHandler = () => {
    toggleMenu()
  }

  return (
    <>
      <button
        className={classNames(className, styles.MenuButton, {
          active: isMenuOpen,
        })}
        aria-label="Open main menu"
        onClick={clickHandler}
        {...{ ...rest }}
      >
        <span className={styles.Bar} />
        <span className={styles.Bar} />
        <span className={styles.Bar} />
      </button>
    </>
  )
}
