import React from 'react'
import handleNavigateTo from '../../../../../shared/utils/handleNavigateTo'
import { useNavigate } from 'react-router-dom'

function TopDealsImages() {
  const navigate = useNavigate()
  return (
    <div className="min-h-max flex justify-center w-full my-4 sm:my-10 gap-[1%] p-1">
      <div className="w-full lg:w-[30%] max-h-[800px] rounded-full overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg shadow-white/10">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761544722/004_hzcvkg.png"
          className=""
          onClick={() => handleNavigateTo(navigate, 'best sellers')}
        />
      </div>
      <div className="w-full lg:w-[30%] max-h-[800px] rounded-full overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg shadow-white/10">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761543991/002_gden4z.png"
          className=""
          onClick={() => handleNavigateTo(navigate, 'best sellers')}
        />
      </div>
      <div className="w-full lg:w-[30%] max-h-[800px] rounded-full overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg shadow-white/10">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761544432/003_wkevbr.png"
          className=""
          onClick={() => handleNavigateTo(navigate, 'products')}
        />
      </div>
    </div>
  )
}

export default TopDealsImages
