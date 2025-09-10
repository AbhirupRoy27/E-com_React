import './App.css'
import { useSideBar } from './Contexts/SideBarContext'
import NavBar from './Components/NavBar/NavBar'
import { Outlet, Route, Routes } from 'react-router-dom'
import SearchBar from './Components/SearchBar/SearchBar'

import { lazy, Suspense } from 'react'

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
      <SearchBar />
      <NavBar />
      {sideBar && <SideBar />}
      <Suspense fallback={<h2>Loading....</h2>}>
        <Outlet />
      </Suspense>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="Home" element={<Home />} />

        <Route path="sell" element={<Sell />} />
        <Route path="books" element={<Books />} />
        <Route path="cart" element={<Cart />} />

        <Route path="products" element={<Products />}>
          <Route index element={<Card />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
