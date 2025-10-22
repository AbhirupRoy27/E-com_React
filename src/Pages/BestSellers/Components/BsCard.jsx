import { useNavigate } from 'react-router-dom'
import handleItem from '../../../Utils/BestSellers/handleItem'

function BsCard({ books }) {
  const truncateText = (text, length = 55) => {
    if (!text) return ''
    return text.length > length ? text.substring(0, length) + '...' : text
  }

  const navigate = useNavigate()

  return (
    <div className="bg-slate-50 w-[50%] sm:w-[33%] xl:w-[24%] 2xl:w-[20%] mt-2 p-1">
      <img
        src={books.coverImage}
        alt="Loading"
        className="bg-white h-[20rem] sm:h-[30rem] w-full mb-1"
        onClick={() => handleItem(navigate, books)}
      />
      <p
        className="h-14 text-[16px] tracking-[1px] sm:text-[14px] sm:tracking-0 xl:text-[16px] flex "
        onClick={() => handleItem(navigate, books)}
      >
        {books.title}
      </p>
      <p
        className="min-h-[51px] py-1 text-sm sm:text-md lg:text-[15px] hover:underline"
        onClick={() => handleItem(navigate, books)}
      >
        {truncateText(books.description)}
      </p>
      <span>
        by
        <p className="inline h-max text-sky-600 hover:text-black text-[14px] ml-1">
          {books.author}
        </p>
      </span>
      <div>
        <span className="text-md">
          Rs. <p className="text-xl inline">{books.price}</p>.00
        </span>
      </div>
      <div className="py-2">
        <button
          className="bg-white/20 py-1 active:bg-yellow-400 sm:active:bg-yellow-500 sm:active:scale-102 hover:bg-yellow-400 w-[99%] rounded-full border border-yellow-400 hover:bg-yellow-400 ease-in-out tracking-[1px]"
          onClick={() => prompt('hello')}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default BsCard
