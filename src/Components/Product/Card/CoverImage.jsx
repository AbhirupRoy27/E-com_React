import { useNavigate } from 'react-router-dom'
import handleGoToItemPage from '../utils/handleGoToItemPage'
import { Heart } from 'lucide-react'
import { useState } from 'react'

function CoverImage({ product }) {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <div className="relative w-full h-70 rounded-tr-md rounded-tl-md overflow-hidden">
        <img
          src={product.coverImage}
          alt="cover"
          className="absolute inset-0 w-full h-full object-fill object-top"
          onClick={() => handleGoToItemPage(product, navigate)}
        />

        <button
          className="absolute top-3 right-3 bg-white/70 px-2 py-2 rounded-full text-sm hover:bg-white/80 transition active:scale-105"
          onClick={() => setIsClicked(!isClicked)}
        >
          <Heart
            color={`${isClicked ? 'red' : 'black'}`}
            fill={`${isClicked ? 'red' : 'rgba(255, 255, 255, 0.5)'}`}
          />
        </button>
      </div>
    </div>
  )
}

export default CoverImage
