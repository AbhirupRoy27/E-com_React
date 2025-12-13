import { useCart } from '../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../Contexts/ProductContext'
import {
  handleAddToCart,
  handleGoToCart,
  handleItemPage,
} from './utils/handleClicks'
import { Heart, ShoppingCart } from 'lucide-react'

function Card() {
  const { cart, setCart, total, setTotal } = useCart()
  const { filteredProducts } = useProducts()
  const navigate = useNavigate()

  return filteredProducts?.length > 0 ? (
    <>
      {filteredProducts.map((p) => (
        <div key={p._id} className="bg-slate-50/40 p-2 h-max rounded-md">
          <div className="text-black sm:pt-2 pb-2 min-h-[40px] flex items-center">
            <h2 className=" text-md lg:text-xl font-semibold ">
              {p.name} {p.sex} {p.producttype}
            </h2>
          </div>
          <div className="w-full h-[250px] sm:h-[220px] md:h-[300px]">
            <img
              src={p.imageurl}
              className="rounded-lg w-full h-full"
              onClick={() => handleItemPage(p, navigate)}
            />
          </div>
          <div className="text-red-900 min-h-[24px] text-sm ">
            {p.lessStock && <p>!! only few remaining</p>}
          </div>
          <div
            className="min-h-[8vh] "
            onClick={() => handleItemPage(p, navigate)}
          >
            <p className="pb-1 text-gray-600 text-sm sm:text-md min-h-[64px]">
              {p.Model.substring(0, 45)}
              <b
                role="button"
                onClick={() => handleItemPage(p, navigate)}
                className="text-black"
              >
                ...more
              </b>
            </p>
          </div>
          <div
            className="flex gap-1 mb-2 items-end mr-1 flex-wrap"
            onClick={() => navigate(`/product-item/${p._id}`)}
          >
            <div>
              <p className="text-red-600 text-lg lg:text-xl font-light">
                -{p.discount}
              </p>
            </div>

            <div className="flex gap-1 items-center">
              <h2 className="w-max text-sm">
                ₹<b className="text-lg lg:text-2xl">{p.price}</b>
              </h2>
              <p className="text-gray-600 line-through text-[12px] mt-1">
                ₹{p['original-price']}
              </p>
            </div>
          </div>
          <div className="text-xl flex flex-col gap-[0.4rem] ">
            {cart.includes(p, 0) ? (
              <button
                onClick={() => handleGoToCart(navigate)}
                className="w-full text-sm flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-yellow-400"
              >
                Go to Cart <ShoppingCart />
              </button>
            ) : (
              <button
                onClick={() =>
                  handleAddToCart(p, cart, setCart, setTotal, total, navigate)
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
        </div>
      ))}
    </>
  ) : (
    <h1 className="flex w-[100%] h-[80vh] justify-center items-center text-2xl">
      Sorry Can't Load
    </h1>
  )
}

export default Card
