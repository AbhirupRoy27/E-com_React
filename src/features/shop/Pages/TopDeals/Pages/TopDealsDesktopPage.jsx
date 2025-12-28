import { useNavigate } from 'react-router-dom'
import handleNavigateTo from '../../../../../shared/utils/handleNavigateTo'
import HomeProducts from '../../../../home/Components/HomeProducts'
import TopDealsImages from '../Components/TopDealsImages'
import TopDealsText from '../Components/TopDealsText'

function TopDealsDesktopPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-950">
      <div className="h-[50vh] xl:h-[60vh] overflow-hidden flex justify-center items-center bg-purple-950/90">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761566859/Gemini_Generated_Image_jp72rmjp72rmjp72_lmuajp.jpg"
          alt="banner top-deals"
          className="lg:px-[5%] xl:px-[10%] w-full h-full object-fill "
        />
      </div>
      <div className="py-5 ">
        <h1 className="text-3xl font-extralight tracking-widest">Top Deals</h1>
        <HomeProducts />
      </div>
      <div className="min-w-[350px] overflow-hidden my-10">
        <TopDealsText />
        <TopDealsImages />
        <div className="p-2 px-4 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="sm:max-w-[58%]">
            <p className="text-lg sm:text-xl px-2 sm:px-6 font-semibold uppercase ">
              Good deals aren’t just about saving — they’re about that
              unstoppable feeling when you know you nailed it.
            </p>
          </div>
          <button
            className="border border-amber-50/20 hover:bg-amber-50/10 active:scale-95 active:shadow-lg transform transition-all duration-300 
            ease-in-out w-full sm:w-[30%] py-3 rounded-full font-bold tracking-wide uppercase text-white"
            onClick={() => handleNavigateTo(navigate, '/products')}
          >
            Shop Now ↗
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopDealsDesktopPage
