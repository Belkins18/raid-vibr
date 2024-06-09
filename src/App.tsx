/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RaidLayout } from '@/layouts'
import { RaidPage, HydraPage, NotFoundPage } from '@/pages'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/" element={<RaidLayout />}>
            <Route index element={<RaidPage />} />
            <Route path="hydra" element={<HydraPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
