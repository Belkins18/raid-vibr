import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { ETypographyVariant, Typography } from '@/components/uikit'

import { ENetworkMode } from '@/types'
import styles from './Down.module.scss'

interface IDownProps extends HTMLAttributes<HTMLDivElement> {}

export const Down = ({ className, ...rest }: IDownProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'landing.section.footer',
  })

  const links = [
    {
      id: 'terms',
      href: '#',
    },
    {
      id: 'privacy',
      href: '#',
    },
  ].map((item, i) => ({
    ...item,
    title: t(`links.${i}.title`),
  }))
  return (
    <div className={classNames(styles.Down, className)} {...{ ...rest }}>
      <div className="container">
        <Typography
          className={styles.Copyright}
          variant={ETypographyVariant.body}
          tag={'p'}
        >
          {t('copyright')}
        </Typography>

        {import.meta.env.MODE === ENetworkMode.testnet && (
          <ul className={styles.Links}>
            {links.map((item) => {
              return (
                <li key={item.id} className={styles.LinksItem}>
                  <Link
                    to={item.href}
                    target={'_blank'}
                    preventScrollReset={true}
                    replace={true}
                    className={styles.LinksItemLink}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
