import { Outlet } from 'react-router-dom'
import { useContainerQuery } from 'react-container-query'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { MenuProvider } from '@/providers/MenuProvider'
import { LandingHeader } from '@/components/sections'
import { Brand, EPictureExt } from '@/components/smart'

import styles from './Raid.layout.module.scss'

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

  return (
    <MenuProvider>
      <div
        className={classNames(styles.RaidContainer, params)}
        ref={containerRef}
      >
        <LandingHeader
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
