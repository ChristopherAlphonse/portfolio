import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage, PageNotFound, ProjectDetails } from './page/index'
import React, { Suspense } from 'react'

import { AnimatePresence } from 'framer-motion'
import { Resume } from './assets/index'

const App = () => {
  return (
    <AnimatePresence initial={true} mode="wait">
      <div className="overflow-hidden">
        <BrowserRouter>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path="/v1/" element={<HomePage />} />
              <Route path="/" element={<Navigate to="/v1/" />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/src/assets/PDF/Chris_Alphonse.pdf"
                element={<Resume />}
              />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </AnimatePresence>
  )
}

export default App
