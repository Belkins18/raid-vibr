import { HTMLAttributes } from 'react'
import { flexRender } from '@tanstack/react-table'
import classNames from 'classnames'

import { TTable } from '../../variables'

interface IHydraTableProps extends HTMLAttributes<HTMLTableElement> {
  table: import('@tanstack/table-core').Table<TTable>
}

export const Table = ({ table }: IHydraTableProps) => {
  return (
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
                          ? header.column.getNextSortingOrder() === 'asc'
                            ? 'Sort ascending'
                            : header.column.getNextSortingOrder() === 'desc'
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
