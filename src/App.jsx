import './App.css'
import { useAuth } from './Contexts/ContextProvider'
import NavBar from './Components/NavBar/NavBar'
import { Outlet, Route, Routes } from 'react-router-dom'
import Sell from './Components/NavBar/NavComponents/Sell/Sell'
import Home from './Pages/Home/Home'
import SideBar from './Components/Sidebar/SideBar'
import Books from './Components/NavBar/NavComponents/Books/Books'
import NotFound from './Components/NotFound/NotFound'
import SearchBar from './Components/SearchBar/SearchBar'
import Card from './Components/ProductCard/Card'
import { SelectContextProvider } from './Contexts/SelectContext'

const Layout = () => {
  const { num } = useAuth()
  return (
    <>
      <SearchBar />
      <NavBar />
      {num && <SideBar />}
      <Outlet />
    </>
  )
}

function App() {
  return (
    <SelectContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="sell" element={<Sell />} />
          <Route path="books" element={<Books />} />

          <Route path="products" element={<Card />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SelectContextProvider>
  )
}

export default App
