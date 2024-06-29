import { IHydraUserStats } from '@/data/types'
import { formatNumber } from '@/utils'
import { ColumnDef } from '@tanstack/react-table'
import {
  ETableKeys,
  PENALTY_CW_POINTS_BY_KEY,
  HYDRA_KEY,
  MIN_POINT,
  CLAN_WAR_TYPE,
} from '../../variables'

export const defaultColumns: ColumnDef<IHydraUserStats & { index: number }>[] =
  [
    {
      header: 'Name',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: ETableKeys.index,
          cell: (info) => info.getValue(),
          header: () => <span>№</span>,
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.tgAlias,
          cell: (info) => {
            return info.getValue()
          },
          header: () => <span>Group Name</span>,
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.nickname,
          cell: (info) => info.getValue(),
          header: () => <span>NickName</span>,
          footer: (props) => props.column.id,
          size: 170,
        },
      ],
    },
    {
      header: 'Week 1',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: ETableKeys.w1_isOptional,
          header: () => <span>Optional</span>,
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.w1_keyUsed,
          header: () => <span>Key Used</span>,
          cell: (props) => {
            if (props.row.original.w1_isOptional) {
              switch (props.row.original.w1_keyUsed) {
                case 0:
                  return '❌❌❌'
                case 1:
                  return '✅❌❌'
                case 2:
                  return '✅✅❌'
                case 3:
                  return '✅✅✅'
                default:
                  return '❌❌❌'
              }
            }

            switch (props.row.original.w1_keyUsed) {
              case 0:
                return '⭕️⭕️⭕️'
              case 1:
                return '✅⭕️⭕️'
              case 2:
                return '✅✅⭕️'
              case 3:
                return '✅✅✅'
              default:
                return '❌❌❌'
            }
          },
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.w1_damage,
          header: () => <span>Damage</span>,
          cell: (props) => {
            return formatNumber(props.row.original.w1_damage as number, 2)
          },
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.w1_penalty,
          header: () => <span>Penalty</span>,
          cell: (props) => {
            if (props.row.original.w1_isOptional) {
              return 0
            } else if (props.row.original.w1_penalty) {
              return formatNumber(props.row.original.w1_penalty)
            } else {
              return formatNumber(
                PENALTY_CW_POINTS_BY_KEY *
                  (HYDRA_KEY - props.row.original.w1_keyUsed),
                0,
              )
            }
          },
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Week 2',
      footer: (props) => props.column.id,
      columns: [
        {
          accessorKey: ETableKeys.w2_isOptional,
          header: () => <span>Optional</span>,
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.w2_keyUsed,
          header: () => <span>Key Used</span>,
          cell: (props) => {
            if (props.row.original.w2_isOptional) {
              switch (props.row.original.w2_keyUsed) {
                case 0:
                  return '❌❌❌'
                case 1:
                  return '✅❌❌'
                case 2:
                  return '✅✅❌'
                case 3:
                  return '✅✅✅'
                default:
                  return '❌❌❌'
              }
            }

            switch (props.row.original.w2_keyUsed) {
              case 0:
                return '⭕️⭕️⭕️'
              case 1:
                return '✅⭕️⭕️'
              case 2:
                return '✅✅⭕️'
              case 3:
                return '✅✅✅'
              default:
                return '❌❌❌'
            }
          },
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.w2_damage,
          header: () => <span>Damage</span>,
          cell: (props) => {
            return formatNumber(props.row.original.w2_damage as number, 2)
          },
          footer: (props) => props.column.id,
        },
        {
          accessorKey: ETableKeys.w2_penalty,
          header: () => <span>Penalty</span>,
          cell: (props) => {
            if (props.row.original.w2_isOptional) {
              return 0
            } else if (props.row.original.w2_penalty) {
              return formatNumber(props.row.original.w2_penalty)
            } else {
              return formatNumber(
                PENALTY_CW_POINTS_BY_KEY *
                  (HYDRA_KEY - props.row.original.w2_keyUsed),
                0,
              )
            }
          },
          footer: (props) => props.column.id,
        },
      ],
    },
    {
      header: 'Clan Wars Points',
      footer: (props) => props.column.id,
      cell: (props) => {
        const penaltyByWeek = (keyUsed: number, isOption: boolean | null) => {
          return isOption ? 0 : PENALTY_CW_POINTS_BY_KEY * (HYDRA_KEY - keyUsed)
        }
        const { w1_keyUsed, w1_isOptional, w2_keyUsed, w2_isOptional } =
          props.row.original

        return formatNumber(
          MIN_POINT[CLAN_WAR_TYPE] +
            penaltyByWeek(w1_keyUsed, w1_isOptional as boolean) +
            penaltyByWeek(w2_keyUsed, w2_isOptional as boolean),
          0,
        )
      },
    },
  ]
