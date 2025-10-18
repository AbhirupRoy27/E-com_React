import NavBar from './Components/NavBar/NavBar'
import { Outlet, Route, Routes } from 'react-router-dom'
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

const Home = lazy(() => import('./Pages/Home/Home'))
const Sell = lazy(() => import('./Components/NavBar/NavComponents/Sell/Sell'))
const SideBar = lazy(() => import('./Components/Sidebar/SideBar'))
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))
const Card = lazy(() => import('./Components/ProductCard/Card'))
const Cart = lazy(() => import('./Pages/CartPage/Cart'))
const Products = lazy(() => import('./Pages/Products/Products'))

const Layout = () => {
  return (
    <>
      <div className="">
        <SearchBar />

        <NavBar />
        <SideBar />

        <div className="min-h-[83vh]">
          <Suspense fallback={<h2>Loading....</h2>}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
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
        <Route path="sell" element={<Products />}>
          <Route index element={<Card />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="top deals" element={<TopDeal />} />
        <Route path="orders" element={<Orders />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Card />} />
        </Route>
        <Route path="best sellers" element={<BestSellers />} />

        {/* Under Dev: */}
        {/*
        <Route
          path="FeedBack"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Feedback />
            </Suspense>
          }
        /> */}

        <Route path="Gift Cards" element={<GiftCards />} />
        <Route path="product-item/:id" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
