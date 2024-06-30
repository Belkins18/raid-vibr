/* eslint-disable @typescript-eslint/ban-ts-comment */
import { HTMLAttributes, Suspense, lazy, useCallback, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import WebApp from '@twa-dev/sdk'
import classNames from 'classnames'

import { Loader, Typography } from '@/components/uikit'

import styles from './Hydra.page.module.scss'

import { Tab, Tabs, TabList } from 'react-tabs'
import 'react-tabs/style/react-tabs.scss'
const Table = lazy(() => import('./components/TSTable'))

import { hydraTournamentsKeys } from '@/data'
import {
  EHydraTournamentStatus,
  IHydraInfo,
  IHydraUserStats,
} from '@/data/types'
import { normaliseData } from '@/data/utils'

console.log(WebApp)

const getData = async (route: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_BIN_ROOT}/b/${route}`,
    {
      headers: {
        'X-Master-Key': `${import.meta.env.VITE_APP_BIN_MASTER_KEY}`,
      },
    },
  )
  return (await response.json()) as {
    record: IHydraInfo
  }
}

interface IHydraPageProps extends HTMLAttributes<HTMLDivElement> {}

export const HydraPage = ({ className, ...rest }: IHydraPageProps) => {
  const [tabIndex, setTabIndex] = useState(0)

  const { data, isLoading } = useQuery({
    queryKey: [''],
    queryFn: () => getData(import.meta.env.VITE_APP_BIN_ROUTE_HYDRA_ID),
    select: (selectData) => {
      // @ts-ignore
      const _data = selectData.record[hydraTournamentsKeys[tabIndex].id]
      Object.assign(_data, {
        ..._data,
        data: normaliseData(_data.data as IHydraUserStats[]),
      })
      Object.assign(selectData.record, {
        ...selectData.record,
      })
      console.log(selectData)

      return selectData.record
    },
  })

  const tableUpdate = useCallback(() => {
    return (
      <Table
        tableData={
          // @ts-ignore
          data[hydraTournamentsKeys[tabIndex].id].data
        }
      />
    )
  }, [data, tabIndex])

  return (
    <div className={classNames(styles.HydraPage, className)} {...{ ...rest }}>
      <section>
        <div className="container">
          <Typography tag={'h3'} className={styles.Title}>
            Hydra
            <span>{hydraTournamentsKeys[tabIndex].id}</span>
          </Typography>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              {hydraTournamentsKeys.map((item, index) => {
                return (
                  <Tab
                    key={index}
                    disabled={item.state === EHydraTournamentStatus.isNotActive}
                  >
                    {item.id}
                  </Tab>
                )
              })}
            </TabList>
          </Tabs>

          <Suspense
            fallback={
              <div className="main-loader">
                <Loader width={'100'} />
              </div>
            }
          >
            {isLoading ? (
              <div className="main-loader">
                <Loader width={'100'} />
              </div>
            ) : Object.prototype.hasOwnProperty.call(
                data,
                hydraTournamentsKeys[tabIndex].id,
              ) ? (
              <>{tableUpdate()}</>
            ) : (
              <>Data not found!</>
            )}
          </Suspense>

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
