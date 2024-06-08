import { HTMLAttributes, useEffect } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { ETypographyVariant, Typography } from '@/components/uikit'
import { TableComponent } from './components'

import styles from './RaidPage.module.scss'
import i18n, { EDirection, ELangSupport } from '@/i18n'

interface IRaidPageProps extends HTMLAttributes<HTMLElement> {}

export enum EClanWarType {
  default = 'default',
  personal = 'personal',
}

export const MIN_POINT = {
  default: 100000,
  personal: 120000,
}

export const HYDRA_KEY = 3

export const PENALTY_CW_POINTS_BY_KEY = Math.round(
  ((MIN_POINT[EClanWarType.personal] / 2) * (100 / HYDRA_KEY)) / 100,
)

const columns = [
  { header: 'Name', accessor: 'name' },
  { header: 'Key Used', accessor: 'keyUsed' },
  { header: 'Damage', accessor: 'sumDamage' },
]

const data = [
  { name: 'Crystal Castle', keyUsed: 3, sumDamage: 1176947895 },
  { name: 'lfvien', keyUsed: 3, sumDamage: 1 },
  { name: 'DreadnoughtUA', keyUsed: 3, sumDamage: 1 },
  { name: 'Radoran', keyUsed: 3, sumDamage: 1 },
  { name: 'МирославUA', keyUsed: 3, sumDamage: 1 },
  { name: 'Крегул', keyUsed: 3, sumDamage: 1 },
  { name: 'DrumBall', keyUsed: 3, sumDamage: 1 },
  { name: 'Просто в Кайф', keyUsed: 3, sumDamage: 1 },
  { name: 'Oleg77713', keyUsed: 3, sumDamage: 1 },
  { name: 'Бітанга', keyUsed: 3, sumDamage: 1 },
  { name: 'Кіясік', keyUsed: 3, sumDamage: 1 },
  { name: 'NikROman', keyUsed: 3, sumDamage: 1 },
  { name: 'BEDbMAK_777', keyUsed: 3, sumDamage: 1 },
  { name: 'Tambourin', keyUsed: 3, sumDamage: 1 },
  { name: 'ArtemDE', keyUsed: 3, sumDamage: 1 },
  { name: 'Юрец', keyUsed: 3, sumDamage: 1 },
  { name: 'Ksondr', keyUsed: 3, sumDamage: 1 },
  { name: 'Eriddicus', keyUsed: 3, sumDamage: 1 },
  { name: 'Vander7', keyUsed: 3, sumDamage: 1 },
  { name: 'dei.m', keyUsed: 3, sumDamage: 1 },
  { name: 'kanndai', keyUsed: 3, sumDamage: 1 },
  { name: 'PashaTKO', keyUsed: 3, sumDamage: 1 },
  { name: 'Baks23', keyUsed: 3, sumDamage: 1 },
  { name: 'Belkins_22', keyUsed: 3, sumDamage: 1 },
  { name: 'mbIk0lo', keyUsed: 3, sumDamage: 1 },
  { name: 'Rigel_beta', keyUsed: 2, sumDamage: 1 },
  { name: 'VLAD_XIII', keyUsed: 1, sumDamage: 1 },
]

export const RaidPage = ({ ...rest }: IRaidPageProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'raid',
  })

  const clanValuesList = t('clanValuesList', { returnObjects: true }) as {
    title: string
    description: string
  }[]

  useEffect(() => {
    document.body.dir =
      i18n.language === ELangSupport.ar ? EDirection.rtl : EDirection.ltr
  }, [])

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

      <section id="hydra">
        <div className="container">
          <img
            src="https://metawar.co.uk/wp-content/uploads/2022/05/hydra-rebalance.webp"
            alt="hydra"
          />
          <Typography tag={'h3'} className={styles.Title}>
            Hydra {PENALTY_CW_POINTS_BY_KEY}
            <span>22.05-05.06</span>
          </Typography>
          <TableComponent data={data} columns={columns} />
        </div>
      </section>
    </div>
  )
}
