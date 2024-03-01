import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '@/config'
import { Layout } from '@/routing/layout'
import { About } from '@/views/about'
import { Home } from '@/views/home'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.PATH} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.HOME.PATH} element={<Home />} />
        <Route path={ROUTES.ABOUT.PATH} element={<About />} />
      </Route>
    </Routes>
  )
}
