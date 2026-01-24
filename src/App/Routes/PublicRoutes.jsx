import { Routes, Route, Outlet } from 'react-router-dom'
import { lazy } from 'react'
import PublicLayout from '../../Layouts/PublicLayout'
import PageNotFound from '../../shared/Error/PageNotFound'
import QuickLayout from '../../features/shop/Pages/Quick/Layouts/QuickLayout'

const WishlistPage = lazy(
  () => import('../../features/wishlist/Pages/WishlistPage'),
)
const ResetPass = lazy(() => import('../../features/auth/Pages/ResetPass'))
const LoginForm = lazy(() => import('../../features/auth/Components/LoginForm'))
const RegisterForm = lazy(
  () => import('../../features/auth/Components/RegisterForm'),
)
const AuthLayout = lazy(() => import('../../features/auth/Pages/AuthPage'))
const FandQ = lazy(() => import('../../Pages/Public/FandQ/FandQ'))
const BestSellers = lazy(
  () => import('../../features/shop/Pages/Books/Pages/BestSellersListing'),
)
const GiftCardsPage = lazy(
  () => import('../../features/shop/Pages/GiftCrds/GiftCardsV2'),
)
const ProductGrid = lazy(
  () => import('../../features/shop/Pages/Product/ProductGrid'),
)
const ProductDetailPage = lazy(
  () => import('../../features/shop/Pages/Product/ProductDetails'),
)
const Home = lazy(() => import('../../features/home/pages/Home'))

const TopDealsLayout = lazy(
  () => import('../../features/shop/Pages/TopDeals/Layout/TopDealsLayout'),
)

const Cart = lazy(() => import('../../features/Cart/pages/CartLayout'))
const Orders = lazy(() => import('../../features/dashboard/Pages/Orders'))
const FeedBack = lazy(
  () => import('../../features/dashboard/Pages/Feedback/Feedback'),
)

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="Gift Cards" element={<GiftCardsPage />} />
        <Route path="best sellers" element={<BestSellers />} />
        <Route path="products" element={<ProductGrid />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="best sellers/:title" element={<ProductDetailPage />} />
        <Route path="quick" element={<QuickLayout />} />
        <Route path="top deals" element={<TopDealsLayout />} />
        <Route path="F&Q" element={<FandQ />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="FeedBack" element={<FeedBack />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<RegisterForm />} />
        <Route path="reset-pass" element={<ResetPass />} />
      </Route>
    </Routes>
  )
}
