import { HTMLAttributes, useCallback } from 'react'
import classNames from 'classnames'

import styles from './BarPanel.module.scss'
import { Button, Typography } from '@/components/uikit'

export enum EBarPanelType {
  info = 'info',
  commands = 'commands',
}
interface IBarPanelProps extends HTMLAttributes<HTMLElement> {
  title?: string
  isShow: boolean
  type: EBarPanelType
  hideBarHandler: (state: boolean) => void
}

export const BarPanel = ({
  title,
  isShow,
  children,
  className,
  hideBarHandler,
  ...rest
}: IBarPanelProps) => {
  const panelCloseHandler = useCallback(() => {
    hideBarHandler && hideBarHandler(false)
  }, [hideBarHandler])

  return (
    <>
      {isShow ? (
        <div
          className={classNames(styles.BarPanel, className)}
          {...{ ...rest }}
        >
          <div className={styles.BarPanelHeader}>
            {title && <Typography className={styles.Title}>{title}</Typography>}
            <Button
              className={styles.PanelCloseButton}
              onClick={panelCloseHandler}
            >
              x
            </Button>
          </div>
          <div
            className={classNames(styles.BarPanelContent, 'bar-panel-content')}
          >
            {children}
          </div>
        </div>
      ) : null}
    </>
  )
}
