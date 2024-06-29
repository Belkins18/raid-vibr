import { normaliseData } from '@/data/utils'
import {
  EHydraTournamentStatus,
  IHydraInfo,
  IHydraUserStats,
} from '@/data/types'
import hydraDataJson from './hydra_05-06-24_19-06-24.json'

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

const data = {
  name: hydraDataJson.name,
  period: hydraDataJson.period,
  data: normaliseData(hydraDataJson.data as IHydraUserStats[]),
} as IHydraInfo

export const { name: tableName, period: tablePeriod, data: tableData } = data

export const hydraTournamentsKeys = [
  {
    id: '05.06.24-19.06.24',
    state: EHydraTournamentStatus.isEnded,
  },
  {
    id: '19.06.24-03.07.24',
    state: EHydraTournamentStatus.isActive,
  },
  {
    id: '03.07.24-17.07.24',
    state: EHydraTournamentStatus.isNotActive,
  },
  {
    id: '17.07.24-31.07.24',
    state: EHydraTournamentStatus.isNotActive,
  },
]
