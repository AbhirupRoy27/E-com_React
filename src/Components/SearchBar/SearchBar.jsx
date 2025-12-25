import { useNavigate } from 'react-router-dom'
import Bar from './Components/Search/Bar'
import { handleDropDown } from './Utils/handleClicks'
import { useAuth } from '../../features/auth/context/AuthContext'
import { useState } from 'react'
import { BookHeart, CircleUser, ShoppingCart } from 'lucide-react'

export default function SearchBar() {
  const navigate = useNavigate()
  const { isLogin, setIsLogout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex p-2 md:justify-between justify-around items-center bg-[#0f1111] min-w-[354px] ]">
        <div
          className="hidden lg:flex active:scale-102 active:opacity-75 font-bold text-[#fff] text-md lg:text-xl cursor-pointer"
          onClick={() => navigate('/')}
        >
          NextGen
        </div>
        <div
          className="hidden xl:flex text-white cursor-pointer text-lg gap-2 items-center"
          onClick={() => navigate('/WishList')}
        >
          <BookHeart />
          Wishlist
        </div>
        <Bar navigate={navigate} />
        <div className="flex p-1 gap-2 md:gap-6">
          <div
            className="flex text-white items-center md:gap-2 cursor-pointer active:opacity-75"
            onClick={() => navigate('/Cart')}
          >
            <ShoppingCart size={30} />
            <p className="hidden md:flex ">Cart</p>
          </div>
          <div
            className={`relative flex text-white items-center md:gap-2 cursor-pointer md:mr-5 group z-50`}
          >
            <button onClick={() => setOpen(!open)}>
              <CircleUser size={30} />
            </button>
            <p className="hidden md:flex" onClick={() => setOpen(!open)}>
              Account
            </p>
            <div
              className={`${
                open && window.innerWidth <= 1280 ? 'block ' : 'hidden'
              } group-hover:block text-black
              absolute top-full right-0 bg-white rounded min-w-[200px] shadow-lg z-0`}
            >
              <p className="py-2 bg-slate-700 pl-2 rounded-t text-white">
                Account Name
              </p>
              <ol>
                {['Orders', 'WishList', 'Setting', ''].map((item, i) => (
                  <li
                    key={i}
                    className="py-2 text-slate-700 hover:bg-gray-100 pl-2 cursor-pointer hover:font-semibold active:scale-101"
                    onClick={() => {
                      if (isLogin) {
                        return handleDropDown(
                          navigate,
                          (item = 'Logout'),
                          setIsLogout,
                          setOpen
                        )
                      }
                      if (item === '') {
                        return handleDropDown(
                          navigate,
                          (item = 'Login'),
                          setIsLogout,
                          setOpen
                        )
                      }
                      handleDropDown(navigate, item, setIsLogout, setOpen)
                    }}
                  >
                    {item === '' ? <>{isLogin ? 'Logout' : 'Login'}</> : item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
