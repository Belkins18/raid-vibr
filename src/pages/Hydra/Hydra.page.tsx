 
import { HTMLAttributes, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import classNames from 'classnames'

import { Typography } from '@/components/uikit'

import styles from './Hydra.page.module.scss'
import {
  PaginationState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { Table, TablePagination, defaultColumns } from './components'
// const Table = lazy(() => import('./components/TSTable/Table'))

import { TTable } from './variables'
import { tableName, tableData } from '@/data'

console.log(WebApp)

interface IHydraPageProps extends HTMLAttributes<HTMLDivElement> {}

export const HydraPage = ({ className, ...rest }: IHydraPageProps) => {
  const [data] = useState<TTable[]>(
    Array(tableData.length)
      .fill({})
      .map((_, index) => ({ index: index + 1 }))
      .map((item, i) => ({ ...item, ...tableData[i] })),
  )

  const [columns] = useState<typeof defaultColumns>(() => [...defaultColumns])
  const [sorting, setSorting] = useState<SortingState>([])

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
            <span>{tableName}</span>
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
            <Table table={table} />
          </div>

          <TablePagination table={table} />

          {/* <button
            onClick={() => WebApp.showAlert(`Hello World! Current count is`)}
          >
            Show Alert
          </button> */}
        </div>
      </section>
    </div>
  )
}
