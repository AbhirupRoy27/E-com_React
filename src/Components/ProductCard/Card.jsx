import { useCart } from '../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../../Contexts/ProductContext'
import {
  handleAddToCart,
  handleGoToCart,
  handleItemPage,
} from './utils/handleClicks'

const carticon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="28"
    fill="currentColor"
  >
    <path
      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
           0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
           14l.84-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 
           0 0019 3H6.21l-.94-2H1v2h2l3.6 
           7.59-1.35 2.44C4.52 14.37 5.48 
           16 7 16h12v-2H7.42c-.14 0-.25-.11-.26-.24z"
    />
  </svg>
)

const wishlist = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
           4.5 2.09C13.09 3.81 14.76 3 16.5 
           3 19.58 3 22 5.42 22 8.5c0 
           3.78-3.4 6.86-8.65 11.54l-1.25 
           1.31z"
    />
  </svg>
)

function Card() {
  const { cart, setCart, total, setTotal } = useCart()
  const { filteredProducts } = useProducts()
  const navigate = useNavigate()

  return filteredProducts?.length > 0 ? (
    <>
      {filteredProducts.map((p) => (
        <div
          key={p.id}
          className="bg-slate-100 2xl:w-[19.5%] xl:w-[24%] md:w-[32%] p-2 sm:p-2 w-[48.5%] h-max rounded-md"
        >
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
            className="min-h-[96px]"
            onClick={() => handleItemPage(p, navigate)}
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="pb-1 text-gray-600 text-sm sm:text-md">
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
            className="flex gap-2 mb-2"
            onClick={() => navigate(`/product-item/${p.id}`)}
          >
            <h2 className="w-max inline text-sm">
              Rs. <b className="text-lg lg:text-2xl">{p.Cost}</b>.00
            </h2>
            <div className="flex gap-2 items-end">
              <p className="text-red-600 text-lg lg:text-2xl font-light">
                -{p.discount}
              </p>
              <p className="text-gray-700 line-through text-md">
                {p['original-price']}/-
              </p>
            </div>
          </div>
          <div className="text-xl flex flex-col gap-[0.4rem] ">
            {cart.includes(p, 0) ? (
              <button
                onClick={() => handleGoToCart(navigate)}
                className="w-full flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-yellow-400"
              >
                Go to Cart {carticon}
              </button>
            ) : (
              <button
                onClick={() =>
                  handleAddToCart(p, cart, setCart, setTotal, total, navigate)
                }
                className="w-full flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-yellow-400"
              >
                Add to Cart {carticon}
              </button>
            )}

            <button className="w-full flex gap-[1rem] py-[8px] items-center justify-center border-0 font-semibold rounded-md bg-amber-600">
              Wishlist Item {wishlist}
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
