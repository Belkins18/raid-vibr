import { Outlet, useMatch } from 'react-router-dom'
import { useContainerQuery } from 'react-container-query'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import i18n, { EDirection, ELangSupport } from '@/i18n'
import { MenuProvider } from '@/providers/MenuProvider'

import { LandingHeader } from '@/components/sections'
import { Brand, EPictureExt } from '@/components/smart'

import styles from './Raid.layout.module.scss'
import { useEffect } from 'react'

const query = {
  isMobile: {
    maxWidth: 767,
  },
  isTablet: {
    minWidth: 768,
    maxWidth: 1023,
  },
  isTabletXL: {
    minWidth: 1024,
    maxWidth: 1199,
  },
  isDesktop: {
    minWidth: 1200,
  },
}

export const RaidLayout = () => {
  const isHydra = useMatch('/hydra')

  const { t: tNavigate } = useTranslation('translation', {
    keyPrefix: 'raid',
  })

  const [params, containerRef] = useContainerQuery(query, {
    width: 0,
    height: 0,
  })

  const navList = tNavigate('navList', { returnObjects: true }) as {
    title: string
    href?: string
    link?: string
  }[]

  useEffect(() => {
    document.body.dir =
      i18n.language === ELangSupport.ar ? EDirection.rtl : EDirection.ltr
  }, [])

  return (
    <MenuProvider>
      <div
        className={classNames(styles.RaidContainer, params, {
          isHydra: isHydra,
        })}
        ref={containerRef}
      >
        <LandingHeader
          className={styles.Header}
          params={params}
          navList={navList}
          brand={
            <Brand
              img={{ name: 'logo', path: 'raid/logo', ext: EPictureExt.png }}
              text="[BiБр] RAID SL"
            />
          }
        />
        <Outlet context={[]} />
      </div>
    </MenuProvider>
  )
}
