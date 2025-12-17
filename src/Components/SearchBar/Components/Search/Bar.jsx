import { useState } from 'react'
import SearchIcon from './SearchIcon'

export default function Bar({ navigate }) {
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
        <SearchIcon color={'black'} />
      </div>
    </div>
  )
}
