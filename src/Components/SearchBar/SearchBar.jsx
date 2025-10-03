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
          <div className="flex text-white items-center md:gap-2 cursor-pointer active:opacity-75">
            <img className="max-h-[30px]" src="cart.svg" />
            <p className="hidden md:flex ">Cart</p>
          </div>
          <div className="flex text-white items-center md:gap-2 cursor-pointer md:mr-5 active:opacity-75">
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

function SearchBar2({ cart, navigate }) {
  return (
    <div className="w-full flex items-center justify-between sm:justify-around text-xl gap-3 max-h-[2%] bg-[#0f1111] cursor-pointer p-2">
      <div
        className="hidden md:flex active:scale-102 active:opacity-75 font-bold text-[#fff]"
        onClick={() => navigate('/')}
      >
        ManGrove.co
      </div>
      <div className="hidden md:flex">
        <p className="text-[#fff]">Location</p>
      </div>
      <Bar navigate={navigate} />
      <div className="flex w-[70%] justify-around items-center">
        <div
          className="flex justify-center mt-1 cursor-pointer"
          onClick={() => navigate('Cart')}
        >
          <p className="relative top-[-12px] left-[35px] font-extrabold text-[#fff]">
            {cart.length}
          </p>
          <img className="max-h-[30px]" src="cart.svg" />
        </div>
        <div className="hidden lg:flex text-[#fff]">
          <img className="max-h-[30px] mr-2" src="account.svg" />
          Account
        </div>
        <div className="lg:hidden">
          <img className="max-h-[30px]" src="account.svg" />
        </div>
      </div>
    </div>
  )
}
