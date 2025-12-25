import { Outlet } from 'react-router-dom'
import SearchBar from '../Components/SearchBar/SearchBar'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/Sidebar/SideBar'
import Footer from '../Components/Footer/Footer'
import { useAuth } from '../Contexts/Auth/AuthContext'
import Logout from '../Pages/Account/Logout/Logout'

const PublicLayout = () => {
  const { isLogout } = useAuth()
  return (
    <div className="min-w-[354px]">
      <SearchBar />
      <NavBar />
      <SideBar />
      <Outlet />
      <Footer />
      {isLogout && <Logout />}
    </div>
  )
}

export default PublicLayout
