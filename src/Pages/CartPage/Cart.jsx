import { useCart } from '../../Contexts/CartContext'
import CartCard from './ComponetntsCart/CartCard'
import './styles.css'

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
      <div className="cart-container">
        <CartLayout />
        {cart.map((item) => (
          <div key={item.id} className="card-holder">
            <CartCard item={item} />
          </div>
        ))}
      </div>
      <div className="subtotal">
        <h2>The Cart Total is: {total} /-</h2>
        <button>CheckOut</button>
      </div>
    </>
  )
}

export default Cart
