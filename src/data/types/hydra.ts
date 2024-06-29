export enum EHydraTournamentStatus {
  isEnded = 'isEnded',
  isActive = 'isActive',
  isNotActive = 'isNotActive',
}

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
