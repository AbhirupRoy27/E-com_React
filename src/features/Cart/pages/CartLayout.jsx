import { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'
import CartItemCard from '../Components/CartItemCard'
import EmptyCart from '../Components/EmptyCart'

const BillCard = lazy(() => import('../Components/CartTotalCard'))

function CartLayout({ cart, total }) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 sm:py-4 min-h-screen">
      <div className="flex flex-col gap-[0.6rem] mb-2 ">
        {cart.map((item) => (
          <div
            key={item.id || item._id}
            className="flex justify-center items-center w-full"
          >
            <CartItemCard item={item} />
          </div>
        ))}
      </div>

      <div className="">
        {cart.length > 0 && (
          <Suspense fallback={<BillCard total={0} />}>
            <div className="flex justify-center w-full md:w-max rounded-md bg-gray-800 text-white/80 h-fit px-4 py-2">
              <BillCard total={total} />
            </div>
          </Suspense>
        )}
      </div>
    </div>
  )
}

function Cart() {
  const { cart, total } = useCart()
  const navigate = useNavigate()

  return (
    <>
      {cart.length > 0 ? (
        <CartLayout cart={cart} total={total} />
      ) : (
        <EmptyCart navigate={navigate} />
      )}
    </>
  )
}

export default Cart
