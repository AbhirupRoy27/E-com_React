import React from 'react'
import { useCart } from '../../../../Contexts/CartContext'
import handleNavigateTo from '../../../../Utils/navigate/navigateTo'
import { useNavigate } from 'react-router-dom'
import handleAddToCart from '../../../../Components/Product/utils/handleAddToCart'

function Buttons({ book }) {
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()

  return (
    <div className="py-5 flex w-full gap-2 tracking-wider">
      {cart.includes(book, 0) ? (
        <button
          className="bg-white/10 hover:bg-white/20 transition text-white py-3 w-full border-b-2 border-gray-400 cursor-pointer"
          onClick={() => handleNavigateTo(navigate, '/cart')}
        >
          Go to Cart
        </button>
      ) : (
        <button
          className="bg-white/10 hover:bg-white/20 transition text-white py-3 w-full border-b-2 border-gray-400 cursor-pointer"
          onClick={() =>
            handleAddToCart(book, cart, setCart, setTotal, total, navigate)
          }
        >
          Add To Cart
        </button>
      )}

      <button
        className="hover:bg-white/10 transition border py-3 w-full cursor-pointer"
        onClick={() => handleNavigateTo(navigate, '/buy-now')}
      >
        Buy Now
      </button>
    </div>
  )
}

export default Buttons
