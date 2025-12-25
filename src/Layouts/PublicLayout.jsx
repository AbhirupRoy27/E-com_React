import { Outlet } from 'react-router-dom'
import SearchBarV2 from './Components/SearchBarV2'

import Logout from '../features/auth/Components/modals/LogoutModel'
import NavBar from '../Layouts/Components/NavBar'
import SideBar from './Components/SideBar'
import Footer from '../Layouts/Components/Footer'
import { useAuth } from '../features/auth/context/AuthContext'

const PublicLayout = () => {
  const { isLogout } = useAuth()
  return (
    <div className="min-w-[354px]">
      <SearchBarV2 />
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
