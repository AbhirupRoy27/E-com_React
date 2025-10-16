import { useParams } from 'react-router-dom'
import Products from '../../../Db/Products.json'
import {
  handleAddToCart,
  handleGoToCart,
} from '../../../Components/ProductCard/utils/handleClicks'
import { size } from '../../../Components/ProductCard/utils/size'
import { useCart } from '../../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SideImages from '../Components/SideImages'
import MobileButtons from '../Components/MobileButtons'

function Item() {
  const { id } = useParams()
  const { cart, setCart, total, setTotal } = useCart()

  const navigate = useNavigate()

  const filterItem = Products.filter((i) => i.id === Number(id))

  const [img, setImg] = useState(filterItem[0].imageurl)
  const discount = filterItem[0].discount.split('%')

  return (
    <div className="w-[100%] bg-blue-50 h-max overflow-hidden ">
      <p
        className="hidden sm:block sm:px-10 sm:pt-4 sm:pb-2 font-semibold"
        onClick={() => navigate('/Products')}
      >
        / Go Back
      </p>
      <div className="flex flex-col sm:flex-row w-[100%] h-[100vh] sm:h-[900px] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[9%] 2xl:px-[11%]">
        <div className=" md:w-[55%] lg:w-[45%] h-[55%] sm:p-2  ">
          <img
            src={img}
            alt="Loading...."
            className="w-[100%] h-full sm:h-[100%] bg-white sm:rounded-md"
          />
        </div>
        <SideImages filterItem={filterItem} setImg={setImg} />
        <div className="w-full h-[25%] sm:h-[90%] px-[1%] py-[0%] flex flex-col gap-2">
          <div className="">
            <p className="sm:text-xl inline-block">
              <b className="mr-1">{filterItem[0].name}</b>
              {filterItem[0].Model}
              {filterItem[0].Model}
              {filterItem[0].Model}
            </p>
          </div>

          <p className="text-sm sm:text-md font-semibold text-white bg-red-800 p-1 w-max text-center">
            {console.log()}
            {Number(discount[0]) > 79 ? 'All time Low' : 'Best Sale Price'}
          </p>
          <div className="flex gap-2 items-center w-[100%]">
            <p className=" text-xl sm:text-2xl text-red-800">
              -{filterItem[0].discount}
            </p>
            <p className="text-xl sm:text-2xl font-semibold ">
              Rs. <b>{filterItem[0].Cost}</b>.00
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
        <MobileButtons
          cart={cart}
          handleAddToCart={handleAddToCart}
          handleGoToCart={handleGoToCart}
          navigate={navigate}
          filterItem={filterItem}
          setCart={setCart}
          setTotal={setTotal}
          total={total}
        />
      </div>
    </div>
  )
}

export default Item
