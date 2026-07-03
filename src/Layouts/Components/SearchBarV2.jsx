import { BookHeart, CircleUser, Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import handleDropDown from '../utils/handleDropDown'

function SearchBarV2() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex p-2 md:justify-between justify-around items-center bg-[#0f1111] min-w-[354px] ">
      <div
        className="hidden lg:flex active:scale-102 active:opacity-75 font-bold text-[#fff] text-md lg:text-xl cursor-pointer"
        onClick={() => navigate('/')}
      >
        StarProMart
      </div>
      <div
        className="hidden xl:flex text-white cursor-pointer text-lg gap-2 items-center"
        onClick={() => navigate(`/Wishlist`)}
      >
        <BookHeart />
        Wishlist
      </div>
      <SearchBar />
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
                  onClick={(e) => handleDropDown(e, navigate, setOpen)}
                >
                  {item === '' ? <>{'Login'}</> : item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBarV2

export function SearchBar() {
  const navigate = useNavigate()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = () => {
    searchInput ? navigate('/Products') : alert('What to Search ?')
    setSearchInput('')
  }

  return (
    <div className="min-w-[80%] md:min-w-[60%] flex p-[0.2rem]">
      <div className="w-[85%] md:w-[90%] text-black text-sm font-semibold search-input">
        <input
          placeholder="Search for Product on ManGrove"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-blue-50 focus:bg-blue-100 p-2 w-full rounded-tl-sm rounded-bl-sm focus:outline-0"
        />
      </div>
      <div
        className="w-[15%] md:w-[10%] flex items-center justify-center search-button bg-[#febd68] min-w-[20px] rounded-tr-sm rounded-br-sm cursor-pointer"
        onClick={handleSearch}
      >
        <Search color="black" />
      </div>
    </div>
  )
}
