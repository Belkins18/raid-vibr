/* eslint-disable no-extra-semi */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

import './style.scss'

interface IRangeComponentProps {
  initValue: number | string
  min: number
  max: number
  // onChange?: (value: number) => void
  onChange: {
    (e: ChangeEvent<any>): void
    <T = string | ChangeEvent<any>>(
      field: T,
    ): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void
  }
  color?: string
  isDisabled?: boolean
  step?: number
  name: string
}
export const RangeComponent = ({
  initValue,
  min,
  max,
  onChange,
  color,
  isDisabled,
  step,
  name,
}: IRangeComponentProps) => {
  const sliderRef = useRef(null)

  const [value, setValue] = useState<number>(Number(initValue))
  const [maxRange, setMaxRange] = useState<number>(max)
  const [stepRange, setStepRange] = useState<number>(
    step ? step : maxRange / 100,
  )

  const fillRender = (payload: {
    input: HTMLInputElement
    event?: ChangeEvent<HTMLInputElement> | any
    property?: {
      value: number
      min: number
      max: number
    }
  }) => {
    const { input } = payload
    const elRangeBar = input.parentElement
    const intThumbWidth = elRangeBar!.clientHeight * 3
    const intRangeBarWidth = elRangeBar!.clientWidth - intThumbWidth
    const intThumbWidthOffset = intThumbWidth / 2

    const intProgressPosition = payload?.event
      ? (payload.event.target.value - payload.event.target.min) /
        (payload.event.target.max - payload.event.target.min)
      : (payload.property!.value - payload.property!.min) /
        (payload.property!.max - payload.property!.min)
    const intRangePosition =
      intRangeBarWidth * intProgressPosition + intThumbWidthOffset

    if (max === 0) {
      elRangeBar!.style.background = '#ECECEC'
    } else {
      elRangeBar!.style.background =
        'linear-gradient(to right, currentColor ' +
        intRangePosition +
        'px, #141b2f ' +
        intRangePosition +
        'px'
    }
  }

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (sliderRef.current) {
        fillRender({ input: sliderRef.current, event })
      }
      const newValue = parseInt(event.target.value, 10)
      const roundedValue = Math.round(newValue / stepRange) * stepRange
      setValue(roundedValue)
      onChange && onChange(event)
    },
    [onChange],
  )

  useEffect(() => {
    setMaxRange(max)
    // setStepRange(max / 100)
    setStepRange(step ? step : max / 100)
    const event = new Event('onChange', { bubbles: true })

    if (sliderRef.current) {
      ;(sliderRef.current as HTMLInputElement).dispatchEvent(event)
      fillRender({ input: sliderRef.current, event })
    }
  }, [max, step])

  useEffect(() => {
    fillRender({ input: sliderRef.current!, property: { value, min, max } })
  }, [value, min, max])

  useEffect(() => {
    setValue(Number(initValue))
  }, [initValue])

  return (
    <div
      className="range"
      style={{
        color: color,
        background: color,
      }}
    >
      <input
        name={name}
        ref={sliderRef}
        type="range"
        value={value}
        min={min}
        max={maxRange}
        step={stepRange}
        dir="ltr"
        onChange={onChangeHandler}
        disabled={isDisabled}
      />
    </div>
  )
}
