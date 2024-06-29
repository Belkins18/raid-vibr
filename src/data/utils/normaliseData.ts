import { IHydraUserStats } from '@/data/types'

export const normaliseData = (data: IHydraUserStats[]) => {
  return data.map((item) => {
    const stringToNumber = (input: string): number => {
      return typeof input === 'string'
        ? parseInt(input.replace(/\s/g, ''), 10)
        : input
    }
    return {
      ...item,
      w1_damage: stringToNumber(item.w1_damage as string),
      w2_damage: stringToNumber(item.w2_damage as string),
      w1_isOptional: item.w1_isOptional === 'ИСТИНА',
      w2_isOptional: item.w2_isOptional === 'ИСТИНА',
    }
  })
}
