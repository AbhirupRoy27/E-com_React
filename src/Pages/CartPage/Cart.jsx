import { lazy } from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartCard from './ComponetntsCart/CartCard'
import './styles.css'

const BillCard = lazy(() => import('./ComponetntsCart/Bill/BillCard'))

function CartLayout() {
  return (
    <>
      <h1 style={{ textAlign: 'center', padding: '10px', letterSpacing: 1 }}>
        Cart Items
      </h1>
    </>
  )
}

function Cart() {
  const { cart, total } = useCart()

  return (
    <>
      {cart.length > 0 ? (
        <CartLayout />
      ) : (
        <h1 style={{ textAlign: 'center', padding: '10px', letterSpacing: 1 }}>
          Cart is Empty..{' '}
        </h1>
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
          <div className="cart-right">
            <BillCard />
          </div>
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
