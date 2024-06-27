export enum ESocialName {
  twitter = 'x',
  telegram = 'telegram',
  discord = 'discord',
  youtube = 'youtube',
}

export const SocialList = [
  {
    name: ESocialName.twitter,
    icon: 'socialX',
    viewBox: '0 0 41 39',
    href: 'https://twitter.com/SpaceMinersAI',
  },
  {
    name: ESocialName.telegram,
    icon: 'socialTelegram',
    viewBox: '0 0 36 29',
    href: 'https://t.me/space_saga_miners',
  },
  // {
  //   name: ESocialName.discord,
  //   icon: 'socialDiscord',
  //   viewBox: '0 0 41 31'
  // },
  // {
  //   name: ESocialName.youtube,
  //   icon: 'socialYoutube',
  //   viewBox: '0 0 44 29'
  // },
]
import { formatNumber } from '@/utils'
import hydraDataJson from './hydra_05-06-24_19-06-24.json'

export interface IHydraUserStats {
  tgAlias: string
  nickname: string
  w1_isOptional: boolean | null | 'ИСТИНА'
  w1_keyUsed: number
  w1_damage: number | string
  w1_penalty: number
  w2_isOptional: boolean | null | 'ИСТИНА'
  w2_keyUsed: number
  w2_damage: number | string
  w2_penalty: number
}

export interface IHydraDate {
  day: number | string
  month: number | string
  year: number | string
}
export interface IHydraInfo {
  name: string
  period: {
    start: IHydraDate
    end: IHydraDate
  }
  data: IHydraUserStats[]
}

const normaliseData = (data: IHydraUserStats[]) => {
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

console.log(normaliseData(hydraDataJson.data as IHydraUserStats[]))
console.log(formatNumber(1152184621, 2))

const data = {
  name: hydraDataJson.name,
  period: hydraDataJson.period,
  data: normaliseData(hydraDataJson.data as IHydraUserStats[]),
} as IHydraInfo

export const { name: tableName, period: tablePeriod, data: tableData } = data
