import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { TableComponent } from '@/components/smart'
import { Typography } from '@/components/uikit'

import styles from './Hydra.page.module.scss'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const markdown = `
| № | Name           | Key Used| Damage
|:-:|----------------|:-------:|:---------:|
|1  | МирославUA     | ✅✅✅ |
|2  | Крегул         | ✅✅✅ |
|3  | NikROman       | ✅✅✅ |
|4  | VLAD_XIII      | ✅✅✅ |
|5  | Кіясік         | ✅✅✅ |
|6  | Eriddicus      | ✅✅✅ |
|7  | kanndai        | ✅✅✅ |
|8  | Vander7        | ✅✅✅ |
|9  | DrumBall       | ✅✅⭕️ |
|10 | Ksondr         | ✅✅⭕️ |
|11 | dei.m          | ✅✅⭕️ |
|12 | Crystal Castle | ✅⭕️⭕️ |
|13 | Radoran        | ✅⭕️⭕️ |
|14 | DreadnoughtUA  | ✅⭕️⭕️ |
|15 | lfvien         | ✅⭕️⭕️ |
|16 | Belkins_22     | ✅⭕️⭕️ |
|17 | Tambourin      | ✅⭕️⭕️ |
|18 | PashaTKO       | ✅⭕️⭕️ |
|19 | ArtemDE        | ✅⭕️⭕️ |
|20 | Просто в Кайф  | ❌❌❌ |
|21 | Oleg77713      | ⭕️⭕️⭕️ |
|22 | Бітанга        | ⭕️⭕️⭕️ |
|23 | BEDbMAK_777    | ⭕️⭕️⭕️ |
|24 | Юрец           | ⭕️⭕️⭕️ |
|25 | Baks23         | ⭕️⭕️⭕️ |
|26 | mbIk0lo        | ⭕️⭕️⭕️ |
|27 | Rigel_beta     | ⭕️⭕️⭕️ |
`

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
  { name: 'МирославUA', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'Крегул', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'NikROman', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'VLAD_XIII', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'Кіясік', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'Eriddicus', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'kanndai', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'Vander7', keyUsed: '✅✅✅', sumDamage: 1 },
  { name: 'DrumBall', keyUsed: '✅✅⭕️', sumDamage: 1 },
  { name: 'Ksondr', keyUsed: '✅✅⭕️', sumDamage: 1 },
  { name: 'dei.m', keyUsed: '✅✅⭕️', sumDamage: 1 },
  { name: 'Crystal Castle', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'Radoran', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'DreadnoughtUA', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'lfvien', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'Belkins_22', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'Tambourin', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'PashaTKO', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'ArtemDE', keyUsed: '✅⭕️⭕️', sumDamage: 1 },
  { name: 'Просто в Кайф', keyUsed: '❌❌❌', sumDamage: 1 },
  { name: 'Oleg77713', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
  { name: 'Бітанга', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
  { name: 'BEDbMAK_777', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
  { name: 'Юрец', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
  { name: 'Baks23', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
  { name: 'mbIk0lo', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
  { name: 'Rigel_beta', keyUsed: '⭕️⭕️⭕️', sumDamage: 1 },
]

interface IHydraPageProps extends HTMLAttributes<HTMLDivElement> {}

export const HydraPage = ({ className, ...rest }: IHydraPageProps) => {
  return (
    <div className={classNames(styles.HydraPage, className)} {...{ ...rest }}>
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            Hydra
            <span>05.06-19.06</span>
            <span>Week 1 / 2</span>
          </Typography>

          <TableComponent data={data} columns={columns} />
          {/* <MDRender markdown={markdown} /> */}
        </div>
      </section>
    </div>
  )
}
