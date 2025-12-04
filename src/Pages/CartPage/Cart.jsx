import { lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../Contexts/CartContext'
import CartCard from './ComponetntsCart/CartCard'
import EmptyCart from './ComponetntsCart/EmptyCart'

const BillCard = lazy(() => import('./ComponetntsCart/Bill/BillCard'))

function CartLayout({ cart, total }) {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center gap-2 items-center sm:items-start px-[1%] lg:px-[2%] 2xl:px-[12%] min-w-[100vw] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] overflow-hidden">
        <div className="flex flex-col gap-[0.6rem] mb-2 ">
          {cart.map((item) => (
            <div
              key={item.id || item._id}
              className="flex justify-center w-full"
            >
              <CartCard item={item} />
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <Suspense>
            <div className="flex justify-center w-full md:w-max rounded-md bg-gray-100 h-[100%] p-[1%] my-[2%] md:my-0">
              <BillCard total={total} />
            </div>
          </Suspense>
        )}
      </div>
    </>
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
