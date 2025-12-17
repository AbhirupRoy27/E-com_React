import handleNavigateTo from '../../../Utils/navigate/navigateTo'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../../Contexts/CartContext'
import handleAddToCart from '../../../Components/Product/utils/handleAddToCart'

function ProductTotalCard({ DeliveryBy, book }) {
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()
  const Discount = Math.ceil(Math.random() * 40)

  return (
    <div className="min-w-full lg:min-w-[284px] max-w-[20vw] sm:min-h-[50vh] max-h-[50vh] p-2 my-2 lg:mt-2 bg-gray-200 rounded text-gray-950">
      <div className="bg-slate-50 p-1 min-h-full  rounded">
        <div className="border-b border-gray-300 pt-2 pb-2 px-1 md:px-3">
          <span className="text-xl text-red-800">-{Discount}%</span>
          <span className="text-2xl">
            <span className="text-sm ml-1"> ₹</span>
            {book[0].price}
          </span>
          <p>
            M.R.P:
            <span className="ml-2 line-through text-gray-500 text-sm">
              ₹{Math.ceil(book[0].price + (book[0].price * Discount) / 100)}
            </span>
          </p>
        </div>
        <div className="pt-4 px-3">
          <p className="mb-1 text-xl">
            {book[0].stock < 5 ? (
              <b className="text-red-700">Only Few Left</b>
            ) : (
              <b className="text-green-700">In Stock</b>
            )}
          </p>
          <p>
            <strong>Free Delivery</strong> By, {DeliveryBy.Date}
            {DeliveryBy.Date > 3
              ? 'th '
              : DeliveryBy.Date > 2
              ? 'rd '
              : DeliveryBy.Date > 1
              ? 'nd '
              : 'st '}
            {DeliveryBy.Month === 0
              ? 'Jan'
              : DeliveryBy.Month === 1
              ? 'Feb'
              : DeliveryBy.Month === 2
              ? 'Mar'
              : DeliveryBy.Month === 3
              ? 'Apr'
              : DeliveryBy.Month === 4
              ? 'May'
              : DeliveryBy.Month === 5
              ? 'Jun'
              : DeliveryBy.Month === 6
              ? 'Jul'
              : DeliveryBy.Month === 7
              ? 'Aug'
              : DeliveryBy.Month === 8
              ? 'Sept'
              : DeliveryBy.Month === 9
              ? 'Oct'
              : DeliveryBy.Month === 10
              ? 'Nov'
              : 'Dec'}
          </p>
        </div>
        <div className="flex flex-col w-full mt-10 gap-2">
          {cart.includes(book[0], 0) ? (
            <button
              className="bg-yellow-400 active:bg-yellow-500 rounded-full py-1 font-semibold"
              onClick={() => handleNavigateTo(navigate, '/cart')}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="bg-yellow-400 active:bg-yellow-500 rounded-full py-1 font-semibold"
              onClick={() =>
                handleAddToCart(
                  book[0],
                  cart,
                  setCart,
                  setTotal,
                  total,
                  navigate
                )
              }
            >
              Add to Cart
            </button>
          )}

          <button
            className="bg-amber-500/90 active:bg-yellow-600 rounded-full py-1 font-semibold"
            onClick={() => handleNavigateTo(navigate, '/buy-now')}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTotalCard
