import { Outlet } from 'react-router-dom'
import AuthTopBar from '../Components/AuthTopBar'

function AuthLayout() {
  return (
    <div className=" min-w-[354px] h-screen bg-gray-900 px-2 sm:px-6 md:px-10 xl:px-30 pt-5 overflow-hidden">
      <AuthTopBar />
      <Outlet />
    </div>
  )
}

export default AuthLayout
