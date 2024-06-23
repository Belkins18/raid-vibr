/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'

import { Loader } from '@/components/uikit'

import styles from './Button.module.scss'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  isLinkView?: boolean
  svgBg?: JSX.Element
  type?: 'button' | 'submit'
  onClick?: (e?: SyntheticEvent) => void | Promise<void>
}

export const Button = ({
  className,
  children,
  isDisabled,
  isLoading,
  isLinkView,
  svgBg,
  type,
  onClick,
  ...rest
}: IButtonProps) => {
  const [showLoader, setShowLoader] = useState(false)
  const [isInternalLoading, setIsInternalLoading] = useState(false)
  const audio: any = {}

  useEffect(() => {
    if (isLoading || isInternalLoading) {
      setShowLoader(true)
    } else {
      setShowLoader(false)
    }
  }, [isLoading, isInternalLoading])

  const activateContext = () => {
    const AudioContext =
      globalThis.AudioContext || (globalThis as any).webkitAudioContext
    const context = new AudioContext()

    audio.value = new Audio()
    const gain = context.createGain()
    gain.connect(context.destination)
    const audioURL = new URL('/src/assets/audio/click.mp3', import.meta.url)
      .href
    audio.value.src = audioURL

    const source = context.createMediaElementSource(audio.value)

    source.connect(gain)
  }

  const handleClick = useCallback(
    async (e?: SyntheticEvent) => {
      try {
        setIsInternalLoading(true)
        activateContext()
        audio.value!.play()
        onClick && (await onClick(e))
      } catch (error) {
        setShowLoader(false)
        setIsInternalLoading(false)
      } finally {
        setShowLoader(false)
        setIsInternalLoading(false)
      }
    },
    [onClick],
  )

  return (
    <button
      type={type ? type : 'button'}
      className={classNames(styles.Button, className, {
        linkView: isLinkView,
        loading: showLoader,
      })}
      onClick={handleClick}
      disabled={showLoader || isInternalLoading || isDisabled}
      {...rest}
    >
      {showLoader ? (
        <>
          {svgBg && svgBg}
          <Loader />
        </>
      ) : (
        <>
          {svgBg && svgBg}
          {children}
        </>
      )}
    </button>
  )
}
