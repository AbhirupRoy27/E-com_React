import { useNavigate } from 'react-router-dom'
import { useBestSellers } from '../../../Contexts/BooksContext'
import { handleCardClick } from '../../../Utils/Home/Mobile/handlebestSellers'
import handleNavigateTo from '../../../Utils/navigate/navigateTo'

function BooksHomeCard() {
  const navigate = useNavigate()

  const { books } = useBestSellers()
  if (books.length <= 0) return

  return (
    <div className="flex bg-gray-950 flex-col min-w-[354px] px-2 xl:px-30 pt-10 pb-5">
      <p className=" text-gray-50 font-mono uppercase tracking-widest py-4 text-center text-xl sm:text-2xl">
        Books you might like
      </p>

      <div className="flex gap-2 w-full overflow-scroll no-scrollbar ease h-[300px] mb-2 ">
        {books.map((img, i) => (
          <img
            key={i}
            src={img.coverImage}
            alt="Book Home image"
            className="bg-white h-full"
            onClick={() => handleCardClick(navigate, img)}
          />
        ))}
      </div>

      <p
        className="w-fit active:text-black mt-2 px-4 py-2 text-gray-50 cursor-pointer border border-amber-50/10 hover:bg-amber-50/10 transition-colors duration-300 "
        onClick={() => handleNavigateTo(navigate, '/best sellers')}
      >
        Looking for best sellers
      </p>
    </div>
  )
}

const Loader = () => {
  return (
    <div className="flex gap-2 w-full overflow-scroll no-scrollbar ease h-[300px] mb-2">
      {[1, 2].map((l, i) => (
        <p
          key={i}
          className="flex justify-center items-center bg-white/80 text-gray-800/70 min-w-[49%] h-full "
        >
          Loading image {l}...
        </p>
      ))}
    </div>
  )
}

export default BooksHomeCard
