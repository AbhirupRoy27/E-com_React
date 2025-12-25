import { Outlet, useNavigate } from 'react-router-dom'

function AuthLayout() {
  const navigate = useNavigate()
  return (
    <div className=" min-w-[354px] h-screen bg-gray-900 px-2 sm:px-6 md:px-10 xl:px-30 pt-5 overflow-hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-widest text-gray-50/80">
          NextGen
        </h1>
        <div className="flex gap-2">
          <button
            className="py-3 px-5 border"
            onClick={() => navigate('login')}
          >
            Login
          </button>
          <button
            className="py-3 px-5 bg-gray-100 text-gray-950"
            onClick={() => navigate('signup')}
          >
            Signup
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
