import handleNavigateTo from '../../../Utils/navigate/navigateTo'
import { useNavigate } from 'react-router-dom'

function HeroBanner() {
  const navigate = useNavigate()
  return (
    <div className="flex  justify-between items-end h-full">
      <div className="p-6 pb-20 m-2 ">
        <p className="text-4xl sm:text-5xl font-bold tracking-wide text-yellow-100 text-shadow-xl mb-2">
          Explore the best products
        </p>
        <p className="text-xl tracking-wide text-gray-300 text-shadow-lg text-shadow-xl mb-2">
          Explore the best Price on the best products, Explore the best Price on
          the best products Explore the best Price on the best products Explore
          the best Price on the best products
        </p>
        <button
          className="bg-white py-3 px-4 rounded-full text-black"
          onClick={() => handleNavigateTo(navigate, '/products')}
        >
          Shop Now →
        </button>
      </div>
      <div className="bg-white/30 w-[200px] h-[200px] m-10 flex justify-center items-center rounded-xl">
        <div className="bg-black/50 w-[196px] h-[196px] rounded-xl backdrop-blur-sm ">
          <div className="text-sm text-yellow-100 p-2 flex flex-col justify-between h-full ">
            <div className="flex flex-col gap-1">
              <p>Best Price,</p>
              <p>Best Quality,</p>
              <p>Best Experience,</p>
            </div>
            <div className="text-6xl text-yellow-100 p-2 italic">96%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
