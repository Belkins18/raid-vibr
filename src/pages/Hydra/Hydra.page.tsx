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

export enum EClanWarType {
  default = 'default',
  personal = 'personal',
}

export const MIN_POINT = {
  default: 100000,
  personal: 120000,
}

export const HYDRA_KEY = 3

export const PENALTY_CW_POINTS_BY_KEY = Math.round(
  ((MIN_POINT[EClanWarType.personal] / 2) * (100 / HYDRA_KEY)) / 100,
)

const jsonData: Omit<ITable, 'index'>[] = [
  {
    tgAlias: 'Boichun',
    nickname: 'DreadnoughtUA',
    isOptional: null,
    keyUsed: 3,
    damage: 1744546469,
    penalty: 0,
  },
  {
    tgAlias: '@Ifvien',
    nickname: 'lfvien',
    isOptional: null,
    keyUsed: 3,
    damage: 1644757886,
    penalty: 0,
  },
  {
    tgAlias: 'Паша',
    nickname: 'PashaTKO',
    isOptional: null,
    keyUsed: 3,
    damage: 1536258421,
    penalty: 0,
  },
  {
    tgAlias: 'al glass',
    nickname: 'Crystal Castle',
    isOptional: null,
    keyUsed: 3,
    damage: 1530479225,
    penalty: 0,
  },
  {
    tgAlias: 'Анатолій',
    nickname: 'Radoran',
    isOptional: null,
    keyUsed: 3,
    damage: 1152184621,
    penalty: 0,
  },
  {
    tgAlias: 'Мирослав',
    nickname: 'МирославUA',
    isOptional: null,
    keyUsed: 3,
    damage: 1041638903,
    penalty: 0,
  },
  {
    tgAlias: 'Виталик Бакс',
    nickname: 'Baks23',
    isOptional: null,
    keyUsed: 3,
    damage: 697591793,
    penalty: 0,
  },
  {
    tgAlias: '@mbIk0lo',
    nickname: 'mbIk0lo',
    isOptional: null,
    keyUsed: 3,
    damage: 447312145,
    penalty: 0,
  },
  {
    tgAlias: 'Богдан',
    nickname: 'DrumBall',
    isOptional: null,
    keyUsed: 3,
    damage: 393976131,
    penalty: 0,
  },
  {
    tgAlias: '@belkins_22',
    nickname: 'Belkins_22',
    isOptional: null,
    keyUsed: 3,
    damage: 391959491,
    penalty: 0,
  },
  {
    tgAlias: 'Андрій',
    nickname: 'Крегул',
    isOptional: null,
    keyUsed: 3,
    damage: 280941704,
    penalty: 0,
  },
  {
    tgAlias: '@Tambourin',
    nickname: 'Tambourin',
    isOptional: null,
    keyUsed: 3,
    damage: 226600000,
    penalty: 0,
  },
  {
    tgAlias: 'Ksondr',
    nickname: 'Ksondr',
    isOptional: null,
    keyUsed: 3,
    damage: 221481553,
    penalty: 0,
  },
  {
    tgAlias: 'Roman',
    nickname: 'NikROman',
    isOptional: null,
    keyUsed: 3,
    damage: 184324369,
    penalty: 0,
  },
  {
    tgAlias: 'Oleg',
    nickname: 'Oleg77713',
    isOptional: null,
    keyUsed: 3,
    damage: 183760000,
    penalty: 0,
  },
  {
    tgAlias: 'Міша',
    nickname: 'Бітанга',
    isOptional: null,
    keyUsed: 3,
    damage: 172700000,
    penalty: 0,
  },
  {
    tgAlias: 'Ihor',
    nickname: 'Rigel_beta',
    isOptional: null,
    keyUsed: 3,
    damage: 154764901,
    penalty: 0,
  },
  {
    tgAlias: 'Влад',
    nickname: 'VLAD_XIII',
    isOptional: null,
    keyUsed: 3,
    damage: 147223134,
    penalty: 0,
  },
  {
    tgAlias: 'Kiyasik',
    nickname: 'Кіясік',
    isOptional: null,
    keyUsed: 3,
    damage: 143090000,
    penalty: 0,
  },
  {
    tgAlias: 'Oleksandr',
    nickname: 'BEDbMAK_777',
    isOptional: null,
    keyUsed: 2,
    damage: 136175610,
    penalty: 0,
  },
  {
    tgAlias: '@ArtemSolokha',
    nickname: 'ArtemDE',
    isOptional: null,
    keyUsed: 3,
    damage: 121050000,
    penalty: 0,
  },
  {
    tgAlias: 'юра',
    nickname: 'Юрец',
    isOptional: null,
    keyUsed: 2,
    damage: 76730000,
    penalty: 0,
  },
  {
    tgAlias: 'Oleksandr',
    nickname: 'Eriddicus',
    isOptional: null,
    keyUsed: 3,
    damage: 72370000,
    penalty: 0,
  },
  {
    tgAlias: '@Vander7',
    nickname: 'Vander7',
    isOptional: null,
    keyUsed: 3,
    damage: 53330000,
    penalty: 0,
  },
  {
    tgAlias: '@Mikaela_pak',
    nickname: 'dei.m',
    isOptional: null,
    keyUsed: 3,
    damage: 47150000,
    penalty: 0,
  },
  {
    tgAlias: 'kanndai',
    nickname: 'kanndai',
    isOptional: null,
    keyUsed: 3,
    damage: 17890000,
    penalty: 0,
  },
  {
    tgAlias: 'Просто в Кайф',
    nickname: 'Просто в Кайф',
    isOptional: true,
    keyUsed: 0,
    damage: 0,
    penalty: 0,
  },
  {
    tgAlias: '',
    nickname: 'AleKsBeN',
    isOptional: true,
    keyUsed: 0,
    damage: 0,
    penalty: 0,
  },
]

interface ITable {
  index: number
  tgAlias: string
  nickname: string
  isOptional: boolean | null
  keyUsed: number
  damage: number
  penalty: number
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
    header: 'Cycle Info',
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: 'isOptional',
        header: () => <span>Optional</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'keyUsed',
        header: () => <span>Key Used</span>,
        cell: (props) => {
          if (props.row.original.isOptional) {
            switch (props.getValue()) {
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

          switch (props.getValue()) {
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
        accessorKey: 'damage',
        header: () => <span>Damage</span>,
        cell: (props) => {
          return formatNumber(props.getValue(), 2)
        },
        footer: (props) => props.column.id,
      },
      {
        accessorKey: 'penalty',
        header: () => <span>Penalty</span>,
        cell: (props) => {
          if (props.row.original.isOptional) {
            return 0
          } else {
            return formatNumber(
              PENALTY_CW_POINTS_BY_KEY *
                (HYDRA_KEY - props.row.original.keyUsed),
              0,
            )
          }
        },
        footer: (props) => props.column.id,
      },
    ],
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
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    tgAlias: false,
    isOptional: false,
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
            <span>Week 1 / 2</span>
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
          {/* <TableComponent data={data} columns={columns} /> */}
          {/* <MDRender markdown={markdown} /> */}
        </div>
      </section>
    </div>
  )
}
