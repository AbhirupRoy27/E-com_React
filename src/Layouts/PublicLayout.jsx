import { Outlet } from 'react-router-dom'
import SearchBar from '../Components/SearchBar/SearchBar'
import NavBar from '../Components/NavBar/NavBar'
import SideBar from '../Components/Sidebar/SideBar'
import Footer from '../Components/Footer/Footer'
import { useAuth } from '../features/auth/context/AuthContext'
import Logout from '../features/auth/Components/modals/LogoutModel'

const PublicLayout = () => {
  const { isLogout } = useAuth()
  return (
    <div className="min-w-[354px]">
      <SearchBar />
      <NavBar />
      <SideBar />
      <div className=" p-2 sm:px-6 lg:px-10 xl:px-30 ">
        <Outlet />
      </div>
      <Footer />
      {isLogout && <Logout />}
    </div>
  )
}

export default PublicLayout
