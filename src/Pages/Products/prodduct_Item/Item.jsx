import { useParams } from 'react-router-dom'
import Products from '../../../Db/Products.json'
import { useCart } from '../../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'

import handleGoToCart from '../../../Components/Product/utils/handleGoToCart'
import handleAddToCart from '../../../Components/Product/utils/handleAddToCart'
import BackButton from './Components/BackButton'
import ProductImages from './Components/ProductImages'
import ProductDetails from './Components/ProductDetails'
import SizeChart from './Components/SizeChart'
import ProductDescription from './Components/ProductDescription'
import ProductReview from './Components/ProductReview'

function Item() {
  const { id } = useParams()
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()

  const filterItem = Products.filter((i) => i._id === Number(id))

  return (
    <div className="w-screen text-white overflow-hidden min-w-[354px] px-2 sm:px-6 lg:px-15 xl:px-30 min-h-[80vh] h-max">
      <BackButton />
      <div className="flex flex-col lg:flex-row gap-2">
        <ProductImages />
        <div className="flex flex-col justify-between gap-2 lg:p-4 w-full">
          <ProductDetails />
          <div className="py-10">
            <SizeChart product={filterItem[0]} />
            <div className="flex gap-2 p-2 mt-4 font-semibold">
              {cart && cart.includes(filterItem[0], 0) ? (
                <button
                  onClick={() => handleGoToCart(navigate)}
                  className="border border-gray-400 active:bg-gray-200 py-2 px-1 rounded w-[49%] cursor-pointer"
                >
                  Go to cart
                </button>
              ) : (
                <button
                  onClick={() =>
                    handleAddToCart(
                      filterItem[0],
                      cart,
                      setCart,
                      setTotal,
                      total,
                      navigate
                    )
                  }
                  className="border border-gray-400 active:bg-gray-200 hover:bg-gray-100/10 py-2 px-1 rounded w-[49%] cursor-pointer"
                >
                  Add to cart
                </button>
              )}
              <button className="bg-yellow-400 py-2 px-1 rounded w-[49%] text-black cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductDescription product={filterItem[0]} />
      <ProductReview />
    </div>
  )
}

export default Item
