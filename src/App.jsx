import NavBar from './Components/NavBar/NavBar'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import SearchBar from './Components/SearchBar/SearchBar'
import { lazy, Suspense } from 'react'
import TopDeals from './Pages/TopDeals/TopDeals'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Account/Login/Login'
import Signup from './Pages/Account/Signup/Signup'
import Index from './Components/ProtectedRoute/Index'
import BestSellers from './Pages/BestSellers/BestSellers'
import Orders from './Pages/Orders/Orders'
import Feedback from './Pages/Feedback/Feedback'
import GiftCards from './Pages/GiftCards/GiftCards'
import { useAuth } from './Contexts/Auth/AuthContext'
import Logout from './Pages/Account/Logout/Logout'
import Loading from './Components/Account/Loading'
import OrderComplete from './Pages/OrderComplete/OrderComplete'
import FandQ from './Pages/F&Q/FandQ'
import ProductDetailPage from './Pages/ProductDetails/ProductDetailPage'

const Home = lazy(() => import('./Pages/Home/Home'))
const SideBar = lazy(() => import('./Components/Sidebar/SideBar'))
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))
const Cart = lazy(() => import('./Pages/CartPage/Cart'))
const Products = lazy(() => import('./Pages/Products/Product-Listing/Products'))
const BuyNow = lazy(() => import('./Pages/BuyNow/BuyNow'))

const Layout = () => {
  const { isLogout, setIsLogout } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <SearchBar />

      <NavBar />
      <SideBar />

      <div className="min-w-[350px]">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      {isLogout && <Logout setIsLogout={setIsLogout} navigate={navigate} />}
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="buy-now"
        element={
          <Suspense fallback={<Loading />}>
            <BuyNow />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          // <Index>
          <Layout />
          // </Index>
        }
      >
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="top deals" element={<TopDeals />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />} />
        <Route path="best sellers" element={<BestSellers />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="best sellers/:title" element={<ProductDetailPage />} />
        <Route
          path="FeedBack"
          element={
            <Suspense fallback={<Loading />}>
              <Feedback />
            </Suspense>
          }
        />
        <Route path="Gift Cards" element={<GiftCards />} />
        <Route path="F&Q" element={<FandQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="order complete" element={<OrderComplete />} />
    </Routes>
  )
}

export default App
