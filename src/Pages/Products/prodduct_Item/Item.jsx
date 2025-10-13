import { useParams } from 'react-router-dom'
import Products from '../../../Db/Products.json'
import {
  handleAddToCart,
  handleGoToCart,
} from '../../../Components/ProductCard/utils/handleClicks'
import { useCart } from '../../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const size = ['S', 'M', 'L', 'XL', '2XL']

function Item() {
  const { id } = useParams()
  const { cart, setCart, total, setTotal } = useCart()

  const navigate = useNavigate()

  const filterItem = Products.filter((i) => i.id === Number(id))

  const [img, setImg] = useState(filterItem[0].imageurl)

  return (
    <div className="w-[100%] bg-blue-50 h-max overflow-hidden">
      {/* <p className="h-[106px]">Products Page</p> */}
      <div className="flex flex-col sm:flex-row w-[100%] h-[100vh] sm:h-[900px] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:[9%] 2xl:px-[11%]">
        <div className="sm:w-[47.5%] md:w-[37.5%] xl:w-[27.5%] h-[55%] sm:p-2 sm:pt-10 ">
          <img
            src={img}
            alt="Loading...."
            className="w-[100%] h-full sm:h-[100%] bg-white sm:rounded-md"
          />
        </div>
        <div className="hidden sm:flex flex-col gap-2 mt-10">
          <img
            src={filterItem[0].imageurl}
            alt="Loading...."
            className="w-[100%] h-[100px] bg-white sm:rounded-md"
            onClick={() => setImg(`${filterItem[0].imageurl}`)}
          />
          <img
            src={filterItem[0].sideUrl1}
            alt="Loading...."
            className="w-[100%] h-[100px] bg-white sm:rounded-md"
            onClick={() => setImg(`${filterItem[0].sideUrl1}`)}
          />
          <img
            src={filterItem[0].sideUrl2}
            alt="Loading...."
            className="w-[100%] h-[100px] bg-white sm:rounded-md"
            onClick={() => setImg(`${filterItem[0].sideUrl2}`)}
          />
        </div>
        <div className="sm:w-[47.5%] md:w-[57.5%] xl:w-[67.5%] h-[25%] sm:h-[90%] p-[3%] flex flex-col gap-2">
          <p className="text-xl sm:text-2xl">{filterItem[0].name}</p>
          <p className="sm:text-xl">{filterItem[0].Model}</p>
          <p className="text-sm sm:text-md font-semibold text-red-800">
            !! Only Few Left
          </p>
          <div className="flex gap-2 items-center w-[100%]">
            <p className="text-xl sm:text-2xl font-semibold ">
              Rs. <b>{filterItem[0].Cost}</b>.00
            </p>
            <p className=" text-sm sm:text-lg font-semibold text-green-800">
              {filterItem[0].discount}
            </p>
            <p className="text-md sm:text-lg line-through">
              {filterItem[0]['original-price']}.00
            </p>
          </div>
          <div className="flex gap-2 p-2 min-h-[50px]">
            {size.length &&
              size.map((p, i) => (
                <p
                  className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
                  tabIndex="0"
                  key={i}
                >
                  {p}
                </p>
              ))}
          </div>
          <div className="hidden sm:flex gap-2 p-2 h-[8%] mt-10">
            {cart && cart.includes(filterItem[0], 0) ? (
              <button
                onClick={() => handleGoToCart(navigate)}
                className="border border-yellow-400 py-2 px-1 rounded w-[49%]"
              >
                Go to cart
              </button>
            ) : (
              <button
                onClick={() =>
                  handleAddToCart(filterItem[0], cart, setCart, setTotal, total)
                }
                className="border border-yellow-400 py-2 px-1 rounded w-[49%]"
              >
                Add to cart
              </button>
            )}
            <button className="bg-yellow-400 py-2 px-1 rounded w-[49%]">
              Buy Now
            </button>
          </div>
        </div>
        <div className="bg-white flex gap-2 w-full p-2 h-[8%] sm:hidden fixed bottom-0">
          {cart && cart.includes(filterItem[0], 0) ? (
            <button
              onClick={() => handleGoToCart(navigate)}
              className="border border-yellow-400 py-2 px-1 rounded w-[49%] active:bg-yellow-400"
            >
              Go to cart
            </button>
          ) : (
            <button
              onClick={() =>
                handleAddToCart(filterItem[0], cart, setCart, setTotal, total)
              }
              className="border border-yellow-400 py-2 px-1 rounded w-[49%]"
            >
              Add to cart
            </button>
          )}
          <button className="bg-yellow-400 py-2 px-1 rounded w-[49%]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
