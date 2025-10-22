import { useNavigate } from 'react-router-dom'
import Bar from './Components/Search/Bar'
import { handleDropDown } from './Utils/handleClicks'
import { useAuth } from '../../Contexts/Auth/AuthContext'

// import { useCart } from '../../Contexts/CartContext'

export default function SearchBar() {
  const navigate = useNavigate()
  const { setIsLogout } = useAuth()

  // const { cart } = useCart()
  return (
    <>
      <div className="flex p-2 md:justify-between justify-around items-center bg-[#0f1111] min-w-[344px]">
        <div
          className="hidden lg:flex active:scale-102 active:opacity-75 font-bold text-[#fff] text-md lg:text-xl cursor-pointer"
          onClick={() => navigate('/')}
        >
          NextGen
        </div>
        <div className="hidden xl:flex text-white cursor-pointer text-xl">
          Location
        </div>
        <Bar navigate={navigate} />
        <div className="flex p-1 gap-2 md:gap-6">
          <div
            className="flex text-white items-center md:gap-2 cursor-pointer active:opacity-75"
            onClick={() => navigate('Cart')}
          >
            <img
              className="max-h-[30px]"
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760806250/cart_enj1xf.svg"
            />
            <p className="hidden md:flex ">Cart</p>
          </div>
          <div
            className={`relative flex text-white items-center md:gap-2 cursor-pointer md:mr-5 group`}
          >
            <img
              className="max-h-[30px]"
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760806250/account_c9nkzm.svg"
              alt="Account"
            />
            <p className="hidden md:flex">Account</p>
            <div
              className="hidden group-hover:block bg-gray-100 text-black
              absolute top-full right-0 bg-white rounded min-w-[200px] shadow-lg"
            >
              <p className="py-2 bg-slate-700 pl-2 rounded-t text-white">
                Account Name
              </p>
              <ol>
                {['Orders', 'WishList', 'Setting', 'Logout'].map((item, i) => (
                  <li
                    key={i}
                    className="py-2 text-slate-700 hover:bg-gray-100 pl-2 cursor-pointer hover:font-semibold active:scale-101"
                    onClick={() => handleDropDown(navigate, item, setIsLogout)}
                  >
                    {item}
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
