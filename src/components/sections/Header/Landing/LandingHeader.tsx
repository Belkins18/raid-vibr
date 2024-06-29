/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'

import { Brand, EPictureExt, Navigate } from '@/components/smart'
import { HamburgerButton, SideMenu } from '@/components/uikit'

import styles from './LandingHeader.module.scss'
import { TParams } from '@/types'

interface ILandingHeaderProps extends HTMLAttributes<HTMLElement> {
  params: TParams
  navList: {
    title: string
    href?: string
    link?: string
  }[]
  brand?: ReactNode
  onPlay: () => any
  onPause: () => any
}

export const LandingHeader = ({
  className,
  params,
  navList,
  brand,
  onPlay,
  onPause,
  ...rest
}: ILandingHeaderProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  const onPlayHandler = useCallback(() => {
    onPlay && onPlay()
  }, [onPlay])

  const onPauseHandler = useCallback(() => {
    onPause && onPause()
  }, [onPause])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={classNames(styles.Header, className, params, {
        onScroll: scrollPosition > 10,
      })}
      {...{ ...rest }}
    >
      <div className={classNames('container', styles.Header__container)}>
        <div className={styles.LeftZone}>
          {brand ? brand : <Brand />}
          <button onClick={onPlayHandler}>play</button>
          <button onClick={onPauseHandler}>stop</button>
        </div>
        {params.isDesktop && <Navigate navList={navList} hasMute={false} />}

        {!params.isDesktop && <HamburgerButton />}
      </div>
      {!params.isDesktop && (
        <SideMenu
          children={
            <>
              {' '}
              <header className={classNames(styles.Header, params)}>
                <div
                  className={classNames('container', styles.Header__container)}
                >
                  <Brand
                    img={{
                      name: 'logo',
                      path: 'raid/logo',
                      ext: EPictureExt.png,
                    }}
                    text="[BiБр] RAID SL"
                  />
                  <HamburgerButton />
                </div>
              </header>
              <div className={classNames(styles.SideMenu)}>
                <main>
                  <div className="container">
                    <Navigate
                      navList={navList}
                      // isCustomView={<></>}
                      className={styles.SideMenuNavigation}
                    />
                  </div>
                </main>

                {/* <footer>
                  <div className="container">
                    <ul className={styles.SocialList}>
                      {SocialList.map((item, index) => {
                        return (
                          <li className={styles.SocialListItem} key={index}>
                            <Link
                              to={item.href}
                              target={'_blank'}
                              preventScrollReset={true}
                              replace={true}
                              className={styles.SocialListItemLink}
                            >
                              <SocialIntroBg className={styles.LinkBg} />
                              <Icon
                                icon={item.icon}
                                viewBox={item.viewBox}
                                size={'32px'}
                                className={styles.LinkIcon}
                              />
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </footer> */}
              </div>
            </>
          }
        />
      )}
    </header>
  )
}
