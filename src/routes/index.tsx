import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ErrorFallback } from '@/components'
import { ERRORS, ROUTES } from '@/config'
import { About } from '@/features/About'
import { Home } from '@/features/Home'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={ROUTES.HOME.path} />} />
      <Route path={ROUTES.HOME.path} element={<Home />} />
      <Route path={ROUTES.ABOUT.path} element={<About />} />
      <Route
        path={ROUTES.NOT_FOUND.path}
        element={<ErrorFallback error={new Error(ERRORS.NOT_FOUND_MESSAGE)} />}
      />
      <Route
        path={ROUTES.INTERNAL_SERVER.path}
        element={
          <ErrorFallback error={new Error(ERRORS.INTERNAL_SERVER_MESSAGE)} />
        }
      />
    </Routes>
  )
}
