import { ETypographyVariant, Typography } from '@/components/uikit'
import styles from './BaseModal.module.scss'
import { ReactNode } from 'react'

export interface IBaseModalProps {
  onClose: (data?: any) => void
  className?: string
  children: ReactNode
  isRequired?: boolean
  title?: string
}
export const BaseModal = (props: IBaseModalProps) => {
  const { children, isRequired, onClose, title } = props

  return (
    <div
      className={styles.BaseModal}
      onClick={isRequired ? undefined : onClose}
    >
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <Typography tag={ETypographyVariant.h3} className="header-title">
            {title}
          </Typography>
          {isRequired ? (
            '<div></div>'
          ) : (
            <div className={'header-close'} onClick={onClose}>
              x
            </div>
          )}
        </div>

        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  )
}
