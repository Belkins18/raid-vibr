import { HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'

import { EPictureExt, Picture } from '@/components/smart'

import styles from './Brand.module.scss'

interface IBrandProps extends HTMLAttributes<HTMLDivElement> {
  img?: {
    name: string
    path: string | null
    ext: EPictureExt
  }
  text?: string
}

export const Brand = ({
  className,
  img = { name: 'logo', path: null, ext: EPictureExt.png },
  text,
  ...rest
}: IBrandProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'landing.components.brand',
  })

  return (
    <Link to="/">
      <div className={classNames(styles.Brand, className)} {...{ ...rest }}>
        <div className={styles.Brand__icon}>
          <Picture img={img} />
        </div>
        <div className={styles.Brand__slogan}>{text ? text : t('text')}</div>
      </div>
    </Link>
  )
}
