import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { formatNumber } from '@/utils'

import { MDRender, TableComponent } from '@/components/smart'
import { Typography } from '@/components/uikit'

import styles from './Hydra.page.module.scss'

const markdown = `
| № | Name        | Key Used       | Damage
|:-:|-------------|:---------:|:---------:|
|1  | МирославUA | ✅✅✅ |${formatNumber(1176947895, 3)}
|2  | Кіясік | ✅✅✅ |
|3  | NikROman | ✅✅✅ | 
|4  | Eriddicus | ✅✅✅ | 
|5  | kanndai | ✅✅✅ |
|6  | Крегул | ✅✅⭕️ |
|7  | VLAD_XIII | ✅✅⭕️ |
|8  | Crystal Castle | ✅⭕️⭕️ |
|9  | lfvien | ✅⭕️⭕️ |
|10 | DreadnoughtUA | ✅⭕️⭕️ |
|11 | Radoran | ✅⭕️⭕️ |
|12 | DrumBall | ✅⭕️⭕️ |
|13 | Tambourin | ✅⭕️⭕️ |
|14 | Ksondr | ✅⭕️⭕️ |
|15 | dei.m | ✅⭕️⭕️ |
|16 | PashaTKO | ✅⭕️⭕️ |
|17 | Belkins_22 | ✅⭕️⭕️ |
|18 | Просто в Кайф | ❌❌❌ |
|19 | Oleg77713 | ⭕️⭕️⭕️ |
|20 | Бітанга | ⭕️⭕️⭕️ |
|21 | BEDbMAK_777 | ⭕️⭕️⭕️ |
|22 | ArtemDE | ⭕️⭕️⭕️ |
|23 | Юрец | ⭕️⭕️⭕️ |
|24 | Vander7 | ⭕️⭕️⭕️ |
|25 | Baks23 | ⭕️⭕️⭕️ |
|26 | mbIk0lo | ⭕️⭕️⭕️ |
|27 | Rigel_beta | ⭕️⭕️⭕️ |
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
  { name: 'Crystal Castle', keyUsed: 1, sumDamage: 1 },
  { name: 'lfvien', keyUsed: 1, sumDamage: 1 },
  { name: 'DreadnoughtUA', keyUsed: 1, sumDamage: 1 },
  { name: 'Radoran', keyUsed: 1, sumDamage: 1 },
  { name: 'МирославUA', keyUsed: 3, sumDamage: 1 },
  { name: 'Крегул', keyUsed: 2, sumDamage: 1 },
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

interface IHydraPageProps extends HTMLAttributes<HTMLDivElement> {}

export const HydraPage = ({ className, ...rest }: IHydraPageProps) => {
  return (
    <div className={classNames(styles.HydraPage, className)} {...{ ...rest }}>
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            Hydra {PENALTY_CW_POINTS_BY_KEY}
            <span>22.05-05.06</span>
          </Typography>

          <TableComponent data={data} columns={columns} />
          <MDRender markdown={markdown} />
        </div>
      </section>
    </div>
  )
}
