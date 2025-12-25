import { Routes, Route, Outlet } from 'react-router-dom'
import { lazy } from 'react'
import PublicLayout from '../Layouts/PublicLayout'

const Login = lazy(() => import('../Pages/Account/Login/Login'))
const Signup = lazy(() => import('../Pages/Account/Signup/Signup'))
const Home = lazy(() => import('../Pages/Home/Home'))
const NotFound = lazy(() => import('../Pages/NotFound/NotFound'))
const Cart = lazy(() => import('../Pages/CartPage/Cart'))
const TopDeals = lazy(() => import('../Pages/TopDeals/TopDeals'))
const Products = lazy(() => import('../Pages/Products/Products'))
const ProductDetailPage = lazy(() =>
  import('../Pages/ProductDetails/ProductDetailPage')
)
const BestSellers = lazy(() => import('../Pages/Public/BestSeller/BestSellers'))
const FandQ = lazy(() => import('../Pages/F&Q/FandQ'))
const Orders = lazy(() => import('../Pages/Orders/Orders'))
const FeedBack = lazy(() => import('../Pages/Feedback/Feedback'))
const GiftCards = lazy(() => import('../Pages/GiftCards/GiftCards'))

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
        <Route path="*" element={<NotFound />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="FeedBack" element={<FeedBack />} />
        <Route path="Gift Cards" element={<GiftCards />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}
