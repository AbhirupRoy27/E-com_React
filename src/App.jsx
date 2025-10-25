import NavBar from './Components/NavBar/NavBar'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import SearchBar from './Components/SearchBar/SearchBar'
import { lazy, Suspense } from 'react'
import TopDeal from './Pages/TopDeals/TopDeal'
import Item from './Pages/Products/prodduct_Item/Item'
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

const Home = lazy(() => import('./Pages/Home/Home'))
const SideBar = lazy(() => import('./Components/Sidebar/SideBar'))
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))
const Card = lazy(() => import('./Components/ProductCard/Card'))
const Cart = lazy(() => import('./Pages/CartPage/Cart'))
const Products = lazy(() => import('./Pages/Products/Products'))
const BestSellersItem = lazy(() =>
  import('./Pages/BestSellers/Pages/BestSellerItem')
)
const BuyNow = lazy(() => import('./Pages/BuyNow/BuyNow'))

const Layout = () => {
  const { isLogout, setIsLogout } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <div className="">
        <SearchBar />

        <NavBar />
        <SideBar />

        <div className="min-h-[83vh] min-w-[100vw]">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
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
        path="buy now"
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
        <Route path="top deals" element={<TopDeal />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Card />} />
        </Route>
        <Route path="best sellers" element={<BestSellers />} />
        <Route
          path="best sellers/:title"
          element={
            <Suspense fallback={<Loading />}>
              <BestSellersItem />
            </Suspense>
          }
        />
        <Route
          path="FeedBack"
          element={
            <Suspense fallback={<Loading />}>
              <Feedback />
            </Suspense>
          }
        />
        <Route path="Gift Cards" element={<GiftCards />} />
        <Route path="product-item/:id" element={<Item />} />
        <Route path="order complete" element={<OrderComplete />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
