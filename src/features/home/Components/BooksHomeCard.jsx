import { useNavigate } from 'react-router-dom'
import { useBestSellers } from '../Context/BooksContext'
import handleNavigateTo from '../utils/handleNavigateTo'
import { handleHomeBestSellerClick } from '../utils/handlebestSellers'

function BooksHomeCard() {
  const navigate = useNavigate()

  const { books } = useBestSellers()
  if (books.length <= 0) return <Loader />

  return (
    <div className="flex bg-gray-950 flex-col min-w-[354px] py-10">
      {/* <p className=" text-gray-50 font-mono uppercase tracking-widest py-4 text-center text-xl sm:text-2xl">
        Books you might like
      </p> */}

      <div className="flex gap-3 w-full overflow-scroll overflow-y-hidden no-scrollbar ease min-w-[250px] h-[320px] mb-2 ">
        {books.map((img, i) => (
          <img
            key={i}
            src={img.coverImage}
            alt="Book Home image"
            className="bg-white min-w-[250px] border-0 cursor-pointer shrink-0 active:scale-97 hover:scale-105 transition-all duration-300 h-full"
            onClick={() => handleHomeBestSellerClick(navigate, img)}
          />
        ))}
      </div>

      <p
        className="uppercase w-fit active:text-black mt-2 px-4 py-2 text-gray-50 cursor-pointer border border-amber-50/10 hover:bg-amber-50/10 transition-colors duration-300 "
        onClick={() => handleNavigateTo(navigate, '/best sellers')}
      >
        more best sellers
      </p>
    </div>
  )
}

const Loader = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-950 flex-col gap-2 w-full overflow-scroll no-scrollbar ease py-5">
      <div className="flex h-[300px] gap-2 animate-pulse space-x-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((l) => (
          <p
            className="flex justify-center items-center bg-white/5 min-w-[250px] text-gray-600/70 h-full "
            key={l}
          >
            Loading book
          </p>
        ))}
      </div>
      <p
        className="uppercase w-fit active:text-black mt-2 px-4 py-2 text-gray-50 cursor-pointer border border-amber-50/10 hover:bg-amber-50/10 transition-colors duration-300 "
        onClick={() => handleNavigateTo(navigate, '/best sellers')}
      >
        more best sellers
      </p>
    </div>
  )
}

export default BooksHomeCard
