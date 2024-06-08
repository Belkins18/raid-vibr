import {
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
  useContext,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import styles from './Navigate.module.scss'
import {
  NavigateLinkSideMenuSvg,
  NavigateLinkSvg,
  VolumeIcon,
  VolumeIconOff,
} from './btn-svg'
import { MuteBtnSvg } from './btn-svg'
import { MenuContext } from '@/providers/index'

interface INavigateProps extends HTMLAttributes<HTMLElement> {
  navList: {
    title: string
    href?: string
    link?: string
  }[]
  hasMute?: boolean
  isCustomView?: ReactNode
}

export const Navigate = ({
  navList,
  hasMute = false,
  className,
  isCustomView,
  ...rest
}: INavigateProps) => {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  const navigate = useNavigate()

  const [isMute, setMute] = useState<boolean>(false)

  const scrollAnchor = (event: SyntheticEvent, href: string) => {
    console.log(event)
    console.log(href)
    isMenuOpen && toggleMenu()
    event.preventDefault()
    event.stopPropagation()
    window.scrollTo({
      top: (document.getElementById(href) as HTMLDivElement).offsetTop - 70,
      behavior: 'smooth',
    })
  }

  const muteToggleHandler = () => {
    setMute(!isMute)
  }

  return (
    <div className={classNames(styles.Navigate, className)} {...{ ...rest }}>
      <ul className={classNames(styles.NavigateList, styles.Navigate__List)}>
        {navList
          ? navList?.map(({ title, href, link }, index) => {
              return (
                <li key={index}>
                  {href && (
                    <div
                      className={styles.NavigateList__Item}
                      onClick={(event) => scrollAnchor(event, href)}
                    >
                      {isCustomView ? (
                        <NavigateLinkSideMenuSvg />
                      ) : (
                        <NavigateLinkSvg />
                      )}
                      <a href={'#' + href}>{title}</a>
                    </div>
                  )}
                  {link && (
                    <div
                      className={styles.NavigateList__Item}
                      onClick={(e) => {
                        isMenuOpen && toggleMenu()
                        e.preventDefault()
                        navigate(link)
                      }}
                    >
                      {isCustomView ? (
                        <NavigateLinkSideMenuSvg />
                      ) : (
                        <NavigateLinkSvg />
                      )}
                      <a href={link}>{title}</a>
                    </div>
                  )}
                </li>
              )
            })
          : null}
        {hasMute && (
          <li className={styles.NavigateList__Item}>
            <MuteBtnSvg />
            <button onClick={muteToggleHandler}>
              {isMute ? <VolumeIconOff /> : <VolumeIcon />}
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}
