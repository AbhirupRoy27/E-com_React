import { lazy, Suspense } from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartCard from './ComponetntsCart/CartCard'
// import './styles.css'
import { useNavigate } from 'react-router-dom'
import EmptyCart from './ComponetntsCart/EmptyCart'

const BillCard = lazy(() => import('./ComponetntsCart/Bill/BillCard'))

function CartLayout({ cart, total }) {
  return (
    <>
      <div className=" flex flex-col md:flex-row justify-center gap-2 items-center sm:items-start px-[1%] lg:px-[2%] 2xl:px-[12%] mt-4">
        <div className="flex flex-col gap-[0.6rem] mb-2">
          {cart.map((item) => (
            <div key={item.id || item._id} className="flex justify-center">
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
