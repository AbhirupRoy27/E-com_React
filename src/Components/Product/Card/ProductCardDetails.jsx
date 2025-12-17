import { useNavigate } from 'react-router-dom'
import handleGoToItemPage from '../utils/handleGoToItemPage'

function ProductCardDetails({ product }) {
  const navigate = useNavigate()
  return (
    <div className="p-1 sm:p-2 bg-white rounded-bl-md rounded-br-md">
      <div className="text-black flex items-center">
        <h2 className="text-sm lg:text-xl font-semibold line-clamp-2">
          {product.description}
        </h2>
      </div>

      <div className="text-[12px]">
        {product.stock < 10 ? (
          <p className="bg-red-900 text-white font-semibold py-1 px-3 w-max rounded my-2">
            !! only few remaining
          </p>
        ) : (
          <p className="bg-yellow-300 text-black font-semibold py-1 px-3 w-max rounded my-2">
            Best Seller
          </p>
        )}
      </div>

      <div onClick={() => handleGoToItemPage(product, navigate)}>
        <p className="pb-3 text-gray-600 text-sm sm:text-md line-clamp-2 min-h-[44px]">
          {/* {product.description.substring(0, 45)} */}
          {product.description}
          <b
            role="button"
            onClick={() => handleGoToItemPage(product, navigate)}
            className="text-black"
          >
            ...more
          </b>
        </p>
      </div>

      <div
        className="mt-3 flex gap-2 items-center"
        onClick={() => navigate(`/product-item/${product._id}`)}
      >
        <p className="text-red-600 text-lg lg:text-xl font-light">
          -{product.discount}
        </p>

        <div className="flex gap-2 items-center">
          <h2 className="w-max text-sm text-gray-950">
            ₹<b className="text-lg lg:text-2xl ">{product.price}</b>
          </h2>
          <p className="text-gray-600 line-through text-[12px] mt-1">
            ₹{product.originalPrice}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCardDetails
