import { useParams } from 'react-router-dom'
import Products from '../../../Db/Products.json'
import {
  handleAddToCart,
  handleGoToCart,
} from '../../../Components/ProductCard/utils/handleClicks'
import { useCart } from '../../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import BackButton from '../Components/ProductItem/BackButton'
import SizeChart from '../Components/ProductItem/SizeChart'
import ProductImages from '../Components/ProductItem/ProductImages'

function Item() {
  const { id } = useParams()
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()

  const filterItem = Products.filter((i) => i._id === Number(id))

  const discount = filterItem[0].discount.split('%')

  return (
    <div className="w-screen bg-gray-950 text-white overflow-hidden min-w-[354px] px-2 sm:px-6 lg:px-15 xl:px-30 sm:min-h-[80vh]">
      <BackButton />
      <div className="flex flex-col lg:flex-row gap-2">
        <ProductImages />
        <div className="flex flex-col gap-2 lg:p-4">
          <div>
            <h3 className="text-2xl tracking-wider font-mono mt-2">
              <b>{filterItem[0].name}</b>
            </h3>
            <p className="sm:text-xl inline-block text-white/70">
              {filterItem[0].Model}
              {filterItem[0].Model}
              {filterItem[0].Model}
            </p>
          </div>

          <p className="text-sm sm:text-md font-semibold text-white bg-red-800 p-1 w-max text-center">
            {Number(discount[0]) > 79 ? 'All time Low' : 'Best Sale Price'}
          </p>
          <div className="flex gap-2 items-center w-[100%]">
            <p className=" text-xl sm:text-2xl text-red-800">
              -{filterItem[0].discount}
            </p>
            <p className="text-xl sm:text-2xl font-semibold ">
              Rs. <b>{filterItem[0].price}</b>
            </p>
            <p className="text-md">
              M.R.P.{' '}
              <span className="line-through">
                {filterItem[0]['original-price']}
              </span>
            </p>
          </div>
          <SizeChart />
          <div className="flex gap-2 p-2 mt-10">
            {cart && cart.includes(filterItem[0], 0) ? (
              <button
                onClick={() => handleGoToCart(navigate)}
                className="border border-gray-400 active:bg-gray-200 py-2 px-1 rounded w-[49%]"
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
                className="border border-gray-400 active:bg-gray-200 py-2 px-1 rounded w-[49%]"
              >
                Add to cart
              </button>
            )}
            <button className="bg-yellow-400 py-2 px-1 rounded w-[49%]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
