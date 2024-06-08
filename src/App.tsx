/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RaidLayout } from '@/layouts'
import { RaidPage } from '@/pages'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RaidLayout />}>
            <Route index element={<RaidPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
