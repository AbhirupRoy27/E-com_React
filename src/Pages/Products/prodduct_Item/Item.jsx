import { useParams } from 'react-router-dom'
import Products from '../../../Db/Products.json'
import { useCart } from '../../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import BackButton from '../Components/ProductItem/BackButton'
import SizeChart from '../Components/ProductItem/SizeChart'
import ProductImages from '../Components/ProductItem/ProductImages'
import ProductDetails from '../Components/ProductItem/ProductDetails'
import handleGoToCart from '../../../Components/Product/utils/handleGoToCart'
import handleAddToCart from '../../../Components/Product/utils/handleAddToCart'

function Item() {
  const { id } = useParams()
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()

  const filterItem = Products.filter((i) => i._id === Number(id))

  return (
    <div className="w-screen bg-gray-950 text-white overflow-hidden min-w-[354px] px-2 sm:px-6 lg:px-15 xl:px-30 min-h-[80vh]">
      <BackButton />
      <div className="flex flex-col lg:flex-row gap-2">
        <ProductImages />
        <div className="flex flex-col justify-between gap-2 lg:p-4">
          <ProductDetails />
          <div className="py-10">
            <SizeChart />
            <div className="flex gap-2 p-2 mt-4">
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
    </div>
  )
}

export default Item
