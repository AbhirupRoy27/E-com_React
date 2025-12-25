import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import PrivateLayout from '../../Layouts/PrivateLayout'
import NotFound from '../../Pages/NotFound/NotFound'

// import { useAuth } from '../Contexts/Auth/AuthContext'

const BuyNow = lazy(() => import('../../Pages/BuyNow/BuyNow'))
const OrderComplete = lazy(() =>
  import('../../Pages/OrderComplete/OrderComplete')
)

export default function PrivateRoutes() {
  // const { isAuthenticated } = useAuth()

  // if (!isAuthenticated) {
  // return <Navigate to="/login" replace />
  // }

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="buy-now" element={<BuyNow />} />
        <Route path="order complete" element={<OrderComplete />} />
        {/* <Route path="/" element={<h1>Working</h1>} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
