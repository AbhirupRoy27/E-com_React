import { useNavigate } from 'react-router-dom'
import handleNavigateTo from '../utils/handleNavigateTo'

function DesktopFlex() {
  const navigate = useNavigate()

  return (
    <>
      <div className="w-full min-w-[354px] flex flex-col sm:flex-row gap-2 justify-center py-2  text-black">
        <div className="sm:w-[50%] flex flex-col gap-2">
          <div className="h-[50%] min-h-[200px] sm:min-h-[400px] bg-[url(https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761405210/04_yfcybw.png)] bg-cover bg-center bg-no-repeat rounded-lg">
            <div className="w-full flex justify-end">
              <div className="flex flex-col items-end p-2 sm:p-6 w-[350px]">
                <p className="text-2xl sm:text-3xl font-bold tracking-wide text-shadow-xl text-lime-100 bg-black/40 rounded-lg text-end mb-3 p-2">
                  Explore the best Selling Books of all times
                </p>
                <button
                  className="w-max bg-yellow-300 py-3 px-4 rounded-full hover:bg-yellow-300/90 cursor-pointer"
                  onClick={() => handleNavigateTo(navigate, '/best sellers')}
                >
                  Get Now →
                </button>
              </div>
            </div>
          </div>
          <div className="h-[50%] flex gap-2">
            <div className="bg-[url(https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761405740/04_apc7ck.png)] min-h-[250px] bg-cover bg-center bg-no-repeat rounded-lg w-[50%]"></div>
            <div className="bg-[url(https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761406072/09_vltcsb.png)] min-h-[250px] bg-cover bg-center bg-no-repeat rounded-lg w-[50%]">
              <div className="min-h-full flex items-end">
                <div className="bg-white/50 rounded-lg m-2 flex flex-col justify-end items-end p-2">
                  <p className="text-2xl sm:text-3xl font-bold tracking-wide text-blue-950 text-shadow-xl text-end mb-2 ">
                    Explore the best Clothing brands
                  </p>
                  <button
                    className="w-max bg-yellow-300 py-3 px-4 rounded-full hover:bg-yellow-300/90 cursor-pointer"
                    onClick={() => handleNavigateTo(navigate, '/products')}
                  >
                    Shop Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] min-h-[400px] sm:min-h-[800px] bg-[url(https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761404917/03_mgtujd.png)] bg-cover bg-center bg-no-repeat rounded-lg">
          <div className="min-h-[50%] flex items-center">
            <div className="flex flex-col w-[380px] gap-4 m-0 sm:m-4 sm:mb-8 p-4 rounded-xl">
              <p className="text-4xl sm:text-5xl font-bold tracking-wide text-gray-900 text-shadow-xl bg-white/40 rounded-lg p-2">
                Explore the best Price on the best products
              </p>
              <button
                className="w-max bg-yellow-300 py-3 px-4 rounded-full hover:bg-yellow-300/90 cursor-pointer"
                onClick={() => handleNavigateTo(navigate, '/products')}
              >
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopFlex
