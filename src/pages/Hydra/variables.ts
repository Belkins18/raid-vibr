import { IHydraUserStats } from '@/data/types'

export enum EClanWarType {
  default = 'default',
  personal = 'personal',
}

export enum ETableKeys {
  index = 'index',
  tgAlias = 'tgAlias',
  nickname = 'nickname',
  w1_isOptional = 'w1_isOptional',
  w1_keyUsed = 'w1_keyUsed',
  w1_damage = 'w1_damage',
  w1_penalty = 'w1_penalty',
  w2_isOptional = 'w2_isOptional',
  w2_keyUsed = 'w2_keyUsed',
  w2_damage = 'w2_damage',
  w2_penalty = 'w2_penalty',
}

export const MIN_POINT = {
  default: 100000,
  personal: 120000,
}

export const HYDRA_KEY = 3
export const CLAN_WAR_TYPE = EClanWarType.personal

export const PENALTY_CW_POINTS_BY_KEY = Math.round(
  ((MIN_POINT[EClanWarType.personal] / 2) * (100 / HYDRA_KEY)) / 100,
)

export type TTable = IHydraUserStats & { index: number }
