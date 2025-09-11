import './Search.css'
import SearchIcon from './Icons/Search/SearchIcon'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../../Contexts/CartContext'

export default function SearchBar() {
  const navigate = useNavigate()
  const { cart } = useCart()
  return (
    <div className="search-container">
      <div className="logo" onClick={() => navigate('/')}>
        Products.co
      </div>
      <div className="location">
        <p>Location</p>
      </div>
      <Bar navigate={navigate} />
      <div className="cart" onClick={() => navigate('Cart')}>
        <p>{cart.length}</p>
        <img src="cart.svg" />
      </div>
      <div className="account">Account</div>
    </div>
  )
}

function Bar({ navigate }) {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = () => {
    searchInput ? navigate('/Products') : alert('What to Search ?')
    setSearchInput('')
  }

  return (
    <div className="bar">
      <div className="search-options"></div>
      <div className="text-black text-sm font-semibold search-input">
        <input
          placeholder="Search Product.co"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div
        className="flex items-center justify-center search-button"
        onClick={handleSearch}
      >
        <SearchIcon style={{ fontSize: '30px', color: 'black' }} />
      </div>
    </div>
  )
}
