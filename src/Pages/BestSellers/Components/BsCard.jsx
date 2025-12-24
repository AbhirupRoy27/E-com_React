import { useNavigate } from 'react-router-dom'
import { CircleArrowOutUpRight } from 'lucide-react'
import handleNavigateTo from '../../../Utils/navigate/navigateTo'
import { handleBuy } from '../../../Utils/BuyNow/handleClicks'
import { useBuy } from '../../../Contexts/BuyContext'

function BsCard({ books }) {
  const truncateText = (text, length = 55) => {
    if (!text) return ''
    return text.length > length ? text.substring(0, length) + '...' : text
  }

  const navigate = useNavigate()
  const { setItem } = useBuy()

  return (
    <div className="">
      <div>
        <img
          src={books.coverImage}
          alt="Loading"
          className="bg-white h-[30vh] sm:h-[25rem] w-full mb-1"
          onClick={() =>
            handleNavigateTo(navigate, `${books.title}?product-id=${books._id}`)
          }
        />
        <div className="py-5 flex flex-col gap-2 min-h-[156px]">
          <p
            className="min-h-[42px] text-[16px] tracking-[1px] sm:text-[14px] sm:tracking-0 xl:text-[16px] flex "
            onClick={() =>
              handleNavigateTo(
                navigate,
                `${books.title}?product-id=${books._id}`
              )
            }
          >
            {books.title}
          </p>
          <p
            className="min-h-[51px] py-1 text-sm sm:text-md lg:text-[15px] hover:underline"
            onClick={() =>
              handleNavigateTo(
                navigate,
                `${books.title}?product-id=${books._id}`
              )
            }
          >
            {truncateText(books.description)}
          </p>

          <div>
            <span className="text-md">
              Rs. <p className="text-xl inline">{books.price}</p>.00
            </span>
          </div>
        </div>
      </div>
      <div className="py-2 flex justify-center my-1">
        <button
          className="bg-white/20 py-2 sm:active:scale-102 w-[90%] rounded-lg border ease-in-out tracking-wider flex justify-center items-center gap-2"
          onClick={() => handleBuy(navigate, books, setItem)}
        >
          <b>Buy Now</b>
          <CircleArrowOutUpRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default BsCard
