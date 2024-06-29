import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'

import { RaidLayout } from '@/layouts'
import { RaidPage, HydraPage, ClanWarsPage, NotFoundPage } from '@/pages'
// import { IHydraInfo } from '@/data'

// const getData = async (route: string) => {
//   // const response = await fetch(
//   //   `${import.meta.env.VITE_APP_BIN_ROOT}/b/${import.meta.env.VITE_APP_BIN_ROUTE_HYDRA_ID}`,
//   //   `${import.meta.env.VITE_APP_BIN_ROOT}/b/${route}`,
//   //   {
//   //     headers: {
//   //       'X-Master-Key': `${import.meta.env.VITE_APP_BIN_MASTER_KEY}`,
//   //     },
//   //   },
//   // )
//   // return (await response.json()) as IHydraInfo
// }

export const App = () => {
  // const { data, error, isSuccess } = useQuery({
  //   // queryKey: ['05.06.24-19.06.24'],
  //   queryKey: [''],
  //   queryFn: () => getData(import.meta.env.VITE_APP_BIN_ROUTE_HYDRA_ID),
  // })

  // console.log({ data, error, isSuccess })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/" element={<RaidLayout />}>
            <Route index element={<RaidPage />} />
            <Route path="hydra" element={<HydraPage />} />
            <Route path="clan-wars" element={<ClanWarsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
