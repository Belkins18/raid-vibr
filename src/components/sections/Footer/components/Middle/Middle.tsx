import { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { SocialList } from '@/data'
import { ETypographyVariant, Icon, Typography } from '@/components/uikit'
import { SocialIntroBg } from '@/components/smart'

import styles from './Middle.module.scss'

interface IMiddleProps extends HTMLAttributes<HTMLDivElement> {}

export const Middle = ({ className, ...rest }: IMiddleProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'landing.section.footer',
  })

  const list = [
    {
      text: t('contacts'),
      value: (
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
                    size={'18px'}
                    className={styles.LinkIcon}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      ),
    },
    {
      text: t('email'),
      value: (
        <Typography variant={ETypographyVariant.body} tag="p">
          spaceminers.help@gmail.com
        </Typography>
      ),
    },
  ]

  return (
    <div className={classNames(styles.Middle, className)} {...{ ...rest }}>
      <div className="container">
        <ul className={styles.List}>
          {list.map((item, index) => {
            return (
              <li key={index} className={styles.ListItem}>
                <Typography variant={ETypographyVariant.body} tag="p">
                  {item.text}
                </Typography>
                {item.value}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
