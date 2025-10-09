import SearchIcon from './Icons/Search/SearchIcon'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { useCart } from '../../Contexts/CartContext'

export default function SearchBar() {
  const navigate = useNavigate()
  // const { cart } = useCart()
  return (
    <>
      <div className="flex p-2 md:justify-between justify-around items-center bg-[#0f1111]">
        <div
          className="hidden lg:flex active:scale-102 active:opacity-75 font-bold text-[#fff] text-md lg:text-xl cursor-pointer"
          onClick={() => navigate('/')}
        >
          ManGrove
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
            <img className="max-h-[30px]" src="cart.svg" />
            <p className="hidden md:flex ">Cart</p>
          </div>
          <div
            className="flex text-white items-center md:gap-2 cursor-pointer md:mr-5 active:opacity-75"
            onClick={() => navigate('/login')}
          >
            <img className="max-h-[30px]" src="account.svg" />
            <p className="hidden md:flex">Account</p>
          </div>
        </div>
      </div>
    </>
  )
}

function Bar({ navigate }) {
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
          className="bg-blue-50 p-2 w-full rounded-tl-sm rounded-bl-sm"
        />
      </div>
      <div
        className="w-[15%] md:w-[10%] flex items-center justify-center search-button bg-[#febd68] min-w-[20px] rounded-tr-sm rounded-br-sm cursor-pointer"
        onClick={handleSearch}
      >
        <SearchIcon />
      </div>
    </div>
  )
}
