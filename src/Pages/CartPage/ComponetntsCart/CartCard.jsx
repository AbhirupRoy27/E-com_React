import { RemoveFromCart } from '../../../Db/utils/RemovefromCart'
import { useCart } from '../../../Contexts/CartContext'

function CartCard({ item }) {
  const { cart, setCart, total, setTotal } = useCart()

  return (
    <div className="flex flex-col bg-blue-50 p-2 sm:p-4 gap-[0.5rem] lg:min-w-[700px] ">
      <h2 className="item-heading text-xl tracking-wide font-semibold w-full">
        {item.name} {item.sex} {item.producttype}
      </h2>

      <div className="flex gap-[1rem] w-full flex-col lg:flex-row">
        {/* <div className="w-[50%] max-h-[350px] object-scale-down">
          <img src={item.imageurl} className="rounded-md  " />
        </div> */}
        <div class="lg:w-[40%] h-74 overflow-hidden flex justify-center rounded">
          <img
            src={item.imageurl}
            alt="Example"
            class="max-w-full max-h-full object-cover rounded"
          />
        </div>

        <div className="flex flex-col gap-[0.5rem]">
          <div className="">
            <p className="text-xl font-semibold">{item.name}</p>
            <p>{item.Model}</p>
          </div>
          <p className="p-[2%] font-semibold text-xl">₹ {item.Cost}.00 </p>
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
            className="bg-transparent border border-rose-900 font-semibold rounded-full p-[2%]"
          >
            Remove from Cart
          </button>
          <button
            id="wish-button"
            className="bg-rose-900 border rounded-full p-[2%] font-semibold text-white"
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartCard
