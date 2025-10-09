import { lazy, Suspense } from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartCard from './ComponetntsCart/CartCard'
// import './styles.css'
import { useNavigate } from 'react-router-dom'

const BillCard = lazy(() => import('./ComponetntsCart/Bill/BillCard'))

function CartLayout({ cart, total }) {
  return (
    <>
      <h1 className="text-center tracking-wide text-2xl font-semibold custom-cart-heading mt-[1%] ">
        Cart Items
      </h1>
      <div className=" flex flex-col justify-center gap-[2rem] p-[2%] sm:flex-row w-full min-h-[85vh]">
        <div className="flex flex-col gap-[1rem] sm:w-[100%]">
          {cart.map((item) => (
            <div key={item.id} className="w-full flex justify-center">
              <CartCard item={item} />
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <Suspense>
            <div className="flex justify-start rounded-md bg-gray-100 h-[100%] p-[1%]">
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
        <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-br from-slate-300 to-slate-50">
          <h1 className="text-center text-2xl font-semibold tracking-wide mt-[2%] sm: mt-[3%]">
            Cart is Empty....
          </h1>
          <button
            onClick={() => navigate('/Products')}
            className="bg-blue-950 text-white rounded-md mt-[2%] p-[2%] text-md md:p-[1%]"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </>
  )
}

export default Cart
