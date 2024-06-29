import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RaidLayout } from '@/layouts'
import { RaidPage, HydraPage, ClanWarsPage, NotFoundPage } from '@/pages'
// import { IHydraInfo } from '@/data'

export const App = () => {
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
