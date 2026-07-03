import { Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from 'react'
import PrivateLayout from '../../Layouts/PrivateLayout'
import PageNotFound from '../../shared/Error/PageNotFound'
import CheckOutLayout from '../../features/Payment/Layout/CheckOutLayout'

// import { useAuth } from '../Contexts/Auth/AuthContext'

const OrderComplete = lazy(() =>
  import('../../features/shop/Pages/Order-Complete/OrderComplete')
)

export default function PrivateRoutes() {
  // const { isAuthenticated } = useAuth()

  // if (!isAuthenticated) {
  // return <Navigate to="/login" replace />
  // }

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="buy-now" element={<CheckOutLayout />} />
        <Route path="order complete" element={<OrderComplete />} />
        {/* <Route path="/" element={<h1>Working</h1>} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
