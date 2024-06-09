/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLAttributes, useMemo, useState } from 'react'
import { formatNumber } from '@/utils'

export type Column = {
  header: string
  accessor: string
}

interface ITableComponentProps extends HTMLAttributes<HTMLTableElement> {
  data: Array<{ [key: string]: any }>
  columns: Column[]
}
export const TableComponent = ({ data, columns }: ITableComponentProps) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string
    direction: 'ascending' | 'descending'
  } | null>(null)

  const sortedData = useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return data
  }, [data, sortConfig])

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          {columns.map((column) => (
            <th
              key={column.accessor}
              onClick={() => requestSort(column.accessor)}
            >
              {column.header}
              {sortConfig?.key === column.accessor ? (
                <span>
                  {sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}
                </span>
              ) : null}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <td>{rowIndex + 1}</td>
              {columns.map((column) => (
                <td key={column.accessor}>
                  {column.accessor === 'sumDamage'
                    ? formatNumber(row[column.accessor], 3)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
