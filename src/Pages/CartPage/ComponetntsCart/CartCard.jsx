import { RemoveFromCart } from '../../../Db/utils/RemovefromCart'
import { useCart } from '../../../Contexts/CartContext'

function CartCard({ item }) {
  const { cart, setCart, total, setTotal } = useCart()

  return (
    <div className="flex flex-col bg-blue-50 px-1 py-3 sm:px-2 sm:py-4 gap-[0.5rem] w-full">
      <h2 className="item-heading text-xl tracking-wide font-semibold w-full">
        {item.name} {item.sex} {item.producttype}
      </h2>

      <div className="flex gap-2 flex-col sm:flex-row ">
        <div className="lg:w-[40%] h-55 sm:h-60 md:h-62 lg:h-74 overflow-hidden flex rounded">
          <img
            src={item.imageurl}
            alt="Example"
            className="w-full object-contain md:object-cover rounded"
          />
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <div className="pt-2">
            <p className="font-semibold inline mr-1">{item.name}</p>
            <p className="inline">{item.Model}</p>
          </div>
          <span className="py-[1%] ">
            <p className="font-semibold text-xl inline">₹ {item.Cost}</p>
            <p className="inline">.00</p>
          </span>
          <button
            onClick={() =>
              RemoveFromCart({
                id: item.id,
                cart: cart,
                setCart: setCart,
                total: total,
                setTotal: setTotal,
                cost: item.Cost,
              })
            }
            className="bg-transparent border border-rose-900 font-semibold rounded-full py-[2%]"
          >
            Remove from Cart
          </button>
          <button
            id="wish-button"
            className="bg-rose-900 border rounded-full py-[2%] font-semibold text-white"
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
