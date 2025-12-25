import { Route, Routes } from 'react-router-dom'

import { lazy, Suspense } from 'react'

const PublicRoutes = lazy(() => import('./Routes/PublicRoutes'))
const PrivateRoutes = lazy(() => import('./Routes/PrivateRoutes'))
import Loading from '../shared/components/Loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/app/*" element={<PrivateRoutes />} />
      </Routes>
    </Suspense>
  )
}

export default App

{
  /* <Route path="/admin/*" element={<AdminRoutes />} /> */
}
