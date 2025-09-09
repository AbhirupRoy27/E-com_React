import Dropdown from './DropDown/Dropdown'
import './Search.css'
import SearchIcon from './Icons/Search/SearchIcon'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const navigate = useNavigate()
  return (
    <div className="search-container">
      <div className="logo" onClick={() => navigate('/')}>
        Products.co
      </div>
      <div className="location">Location</div>
      <div className="bar">
        <div className="search-options">
          <Dropdown />
        </div>
        <div className="search-input">
          <input placeholder="Search Product.co" />
        </div>
        <div className="search-button" onClick={() => navigate('/Products')}>
          <SearchIcon style={{ fontSize: '30px', color: 'black' }} />
        </div>
      </div>
      <div className="cart">
        <img src="cart.svg" />
      </div>
      <div className="account">Account</div>
    </div>
  )
}
