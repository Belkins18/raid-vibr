/* eslint-disable @typescript-eslint/no-unused-vars */
import { HTMLAttributes } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { ETypographyVariant, Typography } from '@/components/uikit'

import styles from './RaidPage.module.scss'

interface IRaidPageProps extends HTMLAttributes<HTMLElement> {}

export const RaidPage = ({ ...rest }: IRaidPageProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'raid',
  })

  const clanValuesList = t('clanValuesList', { returnObjects: true }) as {
    title: string
    description: string
  }[]

  return (
    <div className={styles.RaidPage} {...{ ...rest }}>
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            clan values and chat rules
          </Typography>

          <ul className={styles.List}>
            {clanValuesList.map((item, index) => {
              return (
                <li key={index} className={styles.ListItem}>
                  <Typography tag={'h5'}>{item.title}</Typography>
                  <Typography variant={ETypographyVariant.body}>
                    <Trans
                      i18nKey={item.description}
                      components={{
                        p: <p />,
                      }}
                    />
                  </Typography>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}
