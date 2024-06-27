import { HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Typography } from '@/components/uikit'

import styles from './ClanWars.page.module.scss'

interface IClanWarsPageProps extends HTMLAttributes<HTMLDivElement> {}

export const ClanWarsPage = ({ className, ...rest }: IClanWarsPageProps) => {
  return (
    <div
      className={classNames(styles.ClanWarsPage, className)}
      {...{ ...rest }}
    >
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            Clan Wars
            <span>05.06-19.06</span>
          </Typography>
        </div>
      </section>
    </div>
  )
}
