import { useSideBar } from './Contexts/SideBarContext'
import NavBar from './Components/NavBar/NavBar'
import { Outlet, Route, Routes } from 'react-router-dom'
import SearchBar from './Components/SearchBar/SearchBar'
import { lazy, Suspense } from 'react'
import TopDeal from './Pages/TopDeals/TopDeal'
import Item from './Pages/Products/Item'
import Footer from './Components/Footer/Footer'
import Login from './Pages/Account/Login/Login'
import Signup from './Pages/Account/Signup/Signup'
import Index from './Components/ProtectedRoute/Index'

const Home = lazy(() => import('./Pages/Home/Home'))
const Sell = lazy(() => import('./Components/NavBar/NavComponents/Sell/Sell'))
const SideBar = lazy(() => import('./Components/Sidebar/SideBar'))
const Books = lazy(() =>
  import('./Components/NavBar/NavComponents/Books/Books')
)
const NotFound = lazy(() => import('./Pages/NotFound/NotFound'))
const Card = lazy(() => import('./Components/ProductCard/Card'))
const Cart = lazy(() => import('./Pages/CartPage/Cart'))
const Products = lazy(() => import('./Pages/Products/Products'))

const Layout = () => {
  const { sideBar } = useSideBar()
  return (
    <>
      <div className="">
        <SearchBar />
        <NavBar />
        {sideBar && <SideBar />}
        <div className="">
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
          <Index>
            <Layout />
          </Index>
        }
      >
        <Route index element={<Home />} />

        <Route path="Home" element={<Home />} />

        <Route path="sell" element={<Products />}>
          <Route index element={<Card />} />
        </Route>
        <Route path="books" element={<Books />} />
        <Route path="cart" element={<Cart />} />
        <Route path="top deals" element={<TopDeal />} />

        <Route path="products" element={<Products />}>
          <Route index element={<Card />} />
          <Route path="product-item/:id" element={<Item />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
