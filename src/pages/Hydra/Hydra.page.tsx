/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HTMLAttributes, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import classNames from 'classnames'

import { Typography } from '@/components/uikit'

import styles from './Hydra.page.module.scss'
import {
  ColumnDef,
  PaginationState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { formatNumber } from '@/utils'

console.log(WebApp)

export enum EClanWarType {
  default = 'default',
  personal = 'personal',
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

const jsonData: Omit<ITable, 'index'>[] = [
  {
    tgAlias: 'Boichun',
    nickname: 'DreadnoughtUA',
    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 1744546469,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@Ifvien',
    nickname: 'lfvien',
    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 1644757886,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Паша',
    nickname: 'PashaTKO',
    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 1536258421,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'al glass',
    nickname: 'Crystal Castle',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 1530479225,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Анатолій',
    nickname: 'Radoran',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 1152184621,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Мирослав',
    nickname: 'МирославUA',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 1041638903,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Виталик Бакс',
    nickname: 'Baks23',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 697591793,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@mbIk0lo',
    nickname: 'mbIk0lo',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 447312145,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Богдан',
    nickname: 'DrumBall',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 393976131,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@belkins_22',
    nickname: 'Belkins_22',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 391959491,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Андрій',
    nickname: 'Крегул',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 280941704,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@Tambourin',
    nickname: 'Tambourin',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 226600000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Ksondr',
    nickname: 'Ksondr',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 221481553,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Roman',
    nickname: 'NikROman',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 184324369,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Oleg',
    nickname: 'Oleg77713',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 183760000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Міша',
    nickname: 'Бітанга',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 172700000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Ihor',
    nickname: 'Rigel_beta',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 154764901,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Влад',
    nickname: 'VLAD_XIII',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 147223134,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Kiyasik',
    nickname: 'Кіясік',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 143090000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Oleksandr',
    nickname: 'BEDbMAK_777',

    w1_isOptional: null,
    w1_keyUsed: 2,
    w1_damage: 136175610,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@ArtemSolokha',
    nickname: 'ArtemDE',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 121050000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'юра',
    nickname: 'Юрец',

    w1_isOptional: null,
    w1_keyUsed: 2,
    w1_damage: 76730000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Oleksandr',
    nickname: 'Eriddicus',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 72370000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@Vander7',
    nickname: 'Vander7',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 53330000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '@Mikaela_pak',
    nickname: 'dei.m',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 47150000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'kanndai',
    nickname: 'kanndai',

    w1_isOptional: null,
    w1_keyUsed: 3,
    w1_damage: 17890000,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: 'Просто в Кайф',
    nickname: 'Просто в Кайф',
    w1_isOptional: true,
    w1_keyUsed: 0,
    w1_damage: 0,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
  {
    tgAlias: '',
    nickname: 'AleKsBeN',
    w1_isOptional: true,
    w1_keyUsed: 0,
    w1_damage: 0,
    w1_penalty: 0,
    w2_isOptional: null,
    w2_keyUsed: 0,
    w2_damage: 0,
    w2_penalty: 0,
  },
]

interface ITable {
  index: number
  tgAlias: string
  nickname: string
  w1_isOptional: boolean | null
  w1_keyUsed: number
  w1_damage: number
  w1_penalty: number
  w2_isOptional: boolean | null
  w2_keyUsed: number
  w2_damage: number
  w2_penalty: number
}

const defaultColumns: ColumnDef<ITable>[] = [
  {
    header: 'Name',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'index',
        cell: (info) => info.getValue(),
        header: () => <span>№</span>,
        footer: (props) => props.column.id,
      },
      {
        id: 'tgAlias',
        accessorKey: 'tgAlias',
        cell: (info) => {
          console.log('tgAlias info: ', info)
          return info.getValue()
        },
        header: () => <span>Group Name</span>,
        footer: (props) => props.column.id,
      },
      {
        id: 'nickname',
        accessorKey: 'nickname',
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
        accessorKey: 'w1_isOptional',
        id: 'w1_isOptional',
        header: () => <span>Optional</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'w1_keyUsed',
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
        accessorKey: 'w1_damage',
        header: () => <span>Damage</span>,
        cell: (props) => {
          return formatNumber(props.row.original.w1_damage, 2)
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'w1_penalty',
        header: () => <span>Penalty</span>,
        cell: (props) => {
          if (props.row.original.w1_isOptional) {
            return 0
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
        id: 'w2_isOptional',
        accessorKey: 'w2_isOptional',
        header: () => <span>Optional</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'w2_keyUsed',
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
        accessorKey: 'w2_damage',
        header: () => <span>Damage</span>,
        cell: (props) => {
          return formatNumber(props.row.original.w2_damage, 2)
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'w2_penalty',
        header: () => <span>Penalty</span>,
        cell: (props) => {
          if (props.row.original.w2_isOptional) {
            return 0
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
          penaltyByWeek(w1_keyUsed, w1_isOptional) +
          penaltyByWeek(w2_keyUsed, w2_isOptional),
        0,
      )
    },
  },
]

interface IHydraPageProps extends HTMLAttributes<HTMLDivElement> {}

export const HydraPage = ({ className, ...rest }: IHydraPageProps) => {
  const [data] = useState<ITable[]>(
    Array(jsonData.length)
      .fill({})
      .map((_, index) => ({ index: index + 1 }))
      .map((item, i) => ({ ...item, ...jsonData[i] })),
  )

  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns])
  const [sorting, setSorting] = useState<SortingState>([])

  console.log('sorting: ', sorting)
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    tgAlias: false,
    w1_isOptional: false,
    w2_isOptional: false,
    keyUsed: true,
    damage: true,
    penalty: true,
  })

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      size: 80, //starting column size
      minSize: 20, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,
    state: {
      columnVisibility,
      pagination,
      sorting,
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })

  return (
    <div className={classNames(styles.HydraPage, className)} {...{ ...rest }}>
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            Hydra
            <span>05.06-19.06</span>
            <span>Week 2 / 2</span>
          </Typography>

          {table
            .getAllLeafColumns()
            .filter((item) => item.id !== 'index')
            .filter((item) => item.id !== 'nickname')
            .map((column) => {
              return (
                <div key={column.id} className="px-1">
                  <label>
                    <input
                      {...{
                        type: 'checkbox',
                        checked: column.getIsVisible(),
                        onChange: column.getToggleVisibilityHandler(),
                      }}
                    />{' '}
                    {column.id}
                  </label>
                </div>
              )
            })}

          <div className={styles.TableContainer}>
            <table
              style={{
                width: table.getTotalSize(),
              }}
            >
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : (
                            <div
                              className={
                                header.column.getCanSort()
                                  ? 'cursor-pointer select-none'
                                  : ''
                              }
                              onClick={header.column.getToggleSortingHandler()}
                              title={
                                header.column.getCanSort()
                                  ? header.column.getNextSortingOrder() ===
                                    'asc'
                                    ? 'Sort ascending'
                                    : header.column.getNextSortingOrder() ===
                                        'desc'
                                      ? 'Sort descending'
                                      : 'Clear sort'
                                  : undefined
                              }
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                              {{
                                asc: ' 🠕',
                                desc: ' 🠗',
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          )}
                        </th>
                      )
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      console.log()

                      return (
                        <td
                          key={cell.id}
                          className={classNames({
                            alignInitial:
                              cell.column.id === 'tgAlias' ||
                              cell.column.id === 'nickname',
                          })}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="border rounded p-1"
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<<'}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {'<'}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>'}
            </button>
            <button
              className="border rounded p-1"
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
            >
              {'>>'}
            </button>

            <select
              value={table.getState().pagination.pageSize}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>

            <span className="flex items-center gap-1">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount().toLocaleString()}
              </strong>
            </span>
          </div>

          <button
            onClick={() => WebApp.showAlert(`Hello World! Current count is`)}
          >
            Show Alert
          </button>
        </div>
      </section>
    </div>
  )
}
