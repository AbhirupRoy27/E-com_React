import { Routes, Route, Outlet } from 'react-router-dom'
import { lazy } from 'react'
import PublicLayout from '../../Layouts/PublicLayout'
import DevLayout from '../../Layouts/DevLayout'

const LoginForm = lazy(() => import('../../features/auth/Components/LoginForm'))
const RegisterForm = lazy(() =>
  import('../../features/auth/Components/RegisterForm')
)
const AuthLayout = lazy(() => import('../../features/auth/Pages/AuthPage'))
const FandQ = lazy(() => import('../../Pages/Public/FandQ/FandQ'))
const BestSellers = lazy(() =>
  import('../../Pages/Public/BestSeller/BestSellers')
)
const GiftCardsPage = lazy(() =>
  import('../../Pages/Public/Gift-CardV2/GiftCardsV2')
)

//
//

const Home = lazy(() => import('../../Pages/Home/Home'))
const NotFound = lazy(() => import('../../Pages/NotFound/NotFound'))
const Cart = lazy(() => import('../../Pages/CartPage/Cart'))
const TopDeals = lazy(() => import('../../Pages/TopDeals/TopDeals'))
const Products = lazy(() => import('../../Pages/Products/Products'))
const ProductDetailPage = lazy(() =>
  import('../../Pages/ProductDetails/ProductDetailPage')
)

const Orders = lazy(() => import('../../Pages/Orders/Orders'))
const FeedBack = lazy(() => import('../../Pages/Feedback/Feedback'))

const HomeLayout = () => {}

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="top deals" element={<TopDeals />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="best sellers" element={<BestSellers />} />
        <Route path="best sellers/:title" element={<ProductDetailPage />} />
        <Route path="F&Q" element={<FandQ />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="FeedBack" element={<FeedBack />} />
        <Route path="Gift Cards" element={<GiftCardsPage />} />

        <Route path="*" element={<NotFound />} />
        <Route path="dev" element={<DevLayout />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<RegisterForm />} />
      </Route>
    </Routes>
  )
}
