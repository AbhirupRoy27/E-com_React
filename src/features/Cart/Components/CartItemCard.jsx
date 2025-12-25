import { RemoveFromCart } from '../../../Utils/Cart/RemovefromCart'
import { useCart } from '../Context/CartContext'

function CartItemCard({ item }) {
  const { cart, setCart, total, setTotal } = useCart()

  return (
    <div className="flex flex-col bg-gray-900 px-1 py-3 sm:px-2 sm:py-4 gap-[0.5rem] w-full rounded-md">
      <h2 className="item-heading text-xl tracking-wide font-semibold w-full">
        {item.brand} {item.sex} {item.category}
      </h2>

      <div className="flex gap-1 flex-col lg:flex-row px-2">
        <div className="min-w-max h-55 sm:h-60 md:h-62 lg:h-74 flex rounded justify-center">
          <img
            src={item.mainimg || item.coverImage}
            alt="Example"
            className="min-w-[180px] max-w-[180px] w-full object-cover bg-white/10 rounded"
          />
        </div>

        <div className="min-w-full sm:min-w-[414px] flex flex-col gap-[0.5rem] p-2">
          <div className="pt-2">
            <p className="font-semibold inline mr-1">
              {item.name || item.title}
            </p>
            <p className="inline">{item.Model || `by, ${item.author}`}</p>
          </div>
          <span className="py-[1%] ">
            <p className="font-semibold text-xl inline">
              ₹ {item.Cost || item.price}
            </p>
          </span>
          <button
            id="wish-button"
            className="bg-rose-900 border rounded-full py-[2%] font-semibold text-white"
          >
            Move to Wishlist
          </button>
          <button
            onClick={() =>
              RemoveFromCart({
                id: item.id || item._id,
                cart: cart,
                setCart: setCart,
                total: total,
                setTotal: setTotal,
                cost: item.price,
              })
            }
            className="bg-transparent border border-rose-900 font-semibold rounded-full py-[2%]"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
