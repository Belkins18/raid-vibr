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

  const mandatoryRules = t('mandatoryRules', { returnObjects: true }) as {
    title: string
    description: any[]
  }[]

  console.log(mandatoryRules)
  return (
    <div className={styles.RaidPage} {...{ ...rest }}>
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            {t('clanValuesTitle')}
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

      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            {t('mandatoryTitle')}
          </Typography>

          <ul className={styles.List}>
            {mandatoryRules.map(({ title, description }, index) => {
              return (
                <li key={index} className={styles.ListItem}>
                  <Typography tag={'h5'}>{title}</Typography>

                  <ul className={styles.List}>
                    {description.map((_item, _index) => {
                      return (
                        <li key={_index} className={styles.ListItem}>
                          {_item?.rule && (
                            <Typography variant={ETypographyVariant.body}>
                              {_item.rule}
                            </Typography>
                          )}

                          {_item?.title && (
                            <>
                              <Typography tag={'h5'}>{_item.title}</Typography>
                              <ul className={styles.List}>
                                {(_item.description as { rule: string }[]).map(
                                  (__item, __index) => {
                                    return (
                                      <li
                                        key={__index}
                                        className={styles.ListItem}
                                      >
                                        <Typography
                                          variant={ETypographyVariant.body}
                                        >
                                          {__item.rule}
                                        </Typography>
                                      </li>
                                    )
                                  },
                                )}
                              </ul>
                            </>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}
