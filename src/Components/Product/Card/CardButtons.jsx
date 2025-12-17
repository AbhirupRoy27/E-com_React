import { useNavigate } from 'react-router-dom'
import handleGoToCart from '../utils/handleGoToCart'
import handleAddToCart from '../utils/handleAddToCart'
import { useCart } from '../../../Contexts/CartContext'
import { Heart, ShoppingCart } from 'lucide-react'

function CardButtons({ product }) {
  const { cart, setCart, total, setTotal } = useCart()

  const navigate = useNavigate()
  return (
    <div className="text-xl flex flex-col gap-[0.4rem] ">
      {cart.includes(product, 0) ? (
        <button
          onClick={() => handleGoToCart(navigate)}
          className="w-full text-sm flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-yellow-400"
        >
          Go to Cart <ShoppingCart />
        </button>
      ) : (
        <button
          onClick={() =>
            handleAddToCart(product, cart, setCart, setTotal, total, navigate)
          }
          className="w-full text-sm flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-yellow-400"
        >
          Add to Cart <ShoppingCart />
        </button>
      )}

      <button className="w-full text-sm flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-amber-600">
        Wishlist Item <Heart />
      </button>
    </div>
  )
}

export default CardButtons
