import { lazy, Suspense } from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartCard from './ComponetntsCart/CartCard'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const BillCard = lazy(() => import('./ComponetntsCart/Bill/BillCard'))

function CartLayout() {
  return (
    <>
      <h1 className="text-center tracking-wide text-2xl font-semibold custom-cart-heading">
        Cart Items
      </h1>
    </>
  )
}

function Cart() {
  const { cart, total } = useCart()
  const navigate = useNavigate()

  return (
    <>
      {cart.length > 0 ? (
        <CartLayout />
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl font-semibold tracking-wide custom-cart-heading">
            Cart is Empty....
          </h1>
          <button
            onClick={() => navigate('/Products')}
            className="bg-blue-950 text-white rounded-md custom-button"
          >
            Continue Shopping
          </button>
        </div>
      )}
      <div className="cart-container">
        <div className="cart-left">
          {cart.map((item) => (
            <div key={item.id} className="card-holder">
              <CartCard item={item} />
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <Suspense>
            <div className="cart-right">
              <BillCard />
            </div>
          </Suspense>
        )}
      </div>
      {cart.length > 0 && (
        <div className="subtotal">
          <h2>
            The Cart Total ({cart.length} {cart.length > 1 ? 'items' : 'item'}):{' '}
            ₹{total}.00
          </h2>
          <button>CheckOut</button>
        </div>
      )}
    </>
  )
}

export default Cart
