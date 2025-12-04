import { useNavigate } from 'react-router-dom'
import handleNavigateTo from '../../Utils/navigate/navigateTo'

function Desktop() {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-[50vh] xl:h-[60vh] overflow-hidden flex justify-center items-center bg-purple-950/90">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761566859/Gemini_Generated_Image_jp72rmjp72rmjp72_lmuajp.jpg"
          alt="banner top-deals"
          className="lg:px-[5%] xl:px-[10%] w-full h-full object-fill "
        />
      </div>
      <div className="min-w-[350px] bg-gray-300 overflow-hidden min-h-[83vh]">
        <div className="w-hull flex flex-col w-full xl:flex-row p-2">
          <div className="min-w-[75%] min-h-max text-3xl sm:text-5xl lg:text-7xl font-bold">
            <p className="">DEALS ON HIGH-QUALITY</p>
            <p>MATERIALS AND </p>
            <p>CUTTING-EDGE DESIGN</p>
          </div>
          <div className="min-w-[25%] flex flex-col justify-end p-2">
            <div className="flex flex-col items-end justify-end xl:justify-start xl:h-max text-end font-semibold text-base/4 text-[12px] md:text-base/5 md:text-md">
              <p>WE'RE MORE THAN</p>
              <p>JUST A STORE, WE'RE A</p>
              <p>TEAM WORKING TOGETHER</p>
              <p>TO BRING THE BEST OF QUALITY.</p>
            </div>
            <div className="flex justify-end text-end text-3xl">
              <p>↖</p>
              <p>↘</p>
            </div>
          </div>
        </div>
        <div className="min-h-max flex justify-center w-full my-4 sm:my-10 gap-[1%] p-1">
          <div className="w-full lg:w-[30%] max-h-[800px] rounded-full overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg shadow-black/30">
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761544722/004_hzcvkg.png"
              className=""
              onClick={() => handleNavigateTo(navigate, 'best sellers')}
            />
          </div>
          <div className="w-full lg:w-[30%] max-h-[800px] rounded-full overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg shadow-black/30">
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761543991/002_gden4z.png"
              className=""
              onClick={() => handleNavigateTo(navigate, 'best sellers')}
            />
          </div>
          <div className="w-full lg:w-[30%] max-h-[800px] rounded-full overflow-hidden hover:scale-101 transition-all duration-300 ease-in-out hover:shadow-lg shadow-black/30">
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761544432/003_wkevbr.png"
              className=""
              onClick={() => handleNavigateTo(navigate, 'products')}
            />
          </div>
        </div>
        <div className="p-2 px-4 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          <div className="sm:max-w-[58%]">
            <p className="text-lg sm:text-xl px-2 sm:px-6 font-semibold uppercase ">
              Good deals aren’t just about saving — they’re about that
              unstoppable feeling when you know you nailed it.
            </p>
          </div>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 active:scale-95 active:shadow-lg transform transition-all duration-300 ease-in-out w-full sm:w-[30%] py-3 rounded-full font-bold tracking-wide uppercase"
            onClick={() => handleNavigateTo(navigate, '/products')}
          >
            Shop Now ↗
          </button>
        </div>
      </div>
    </>
  )
}

export default Desktop
