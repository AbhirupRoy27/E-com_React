import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTrending } from '../Context/TrendingProducts'

function HomeProducts() {
  const { list } = useTrending()
  const navigate = useNavigate()

  if (list[0] == 1)
    return (
      <div className="bg-gray-950 py-4">
        <div className="flex overflow-scroll gap-3 no-scrollbar mt-2 shrink-0">
          {list.map((p) => (
            <div className="text-white animate-pulse space-x-4" key={p}>
              <div className="bg-white/5 min-w-[250px] h-[300px] border-0 cursor-not-allowed shrink-0 active:scale-97 transition-all duration-300" />
              <div className="mt-2 p-1">
                <span></span>
                <h3 className="text-gray-400 capitalize underline-offset-2 mb-2 line-clamp-2">
                  {`Loading...`}
                </h3>
                <p className="text-[12px] text-white/15 capitalize mb-2 line-clamp-3">
                  {`Loading...`}
                </p>
                <button className="text-white/15 text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2  uppercase text-sm tracking-wide cursor-not-allowed active:scale-97 active:bg-amber-50/25 transition-all duration-300">
                  Loading
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  // console.log(list)
  return (
    <div className="bg-gray-950 py-4">
      <div className="flex overflow-scroll gap-3 no-scrollbar mt-2 shrink-0">
        {list.map((p) => (
          <div className="text-white" key={p._id}>
            <img
              src={p.coverImage}
              className="bg-white/10 min-w-[250px] h-[300px] border-0 cursor-pointer shrink-0 active:scale-97 transition-all duration-300"
              alt="product name"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
                navigate(`/product/${p.title}?product-id=${p._id}`)
              }}
            />
            <div className="p-1">
              <span
                className={`text-sm  ${
                  p.stock <= 10 ? 'text-red-700' : 'text-gray-500/10'
                } min-h-[16px]`}
              >
                {p.stock <= 10 ? 'Only Few Left' : `${'Best Price'}`}
              </span>
              <h3
                className="mt-2 capitalize hover:underline underline-offset-2 mb-2 cursor-pointer line-clamp-2"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                  navigate(`/product/${p.title}?product-id=${p._id}`)
                }}
              >
                {p.title}
              </h3>
              <p className="text-[12px] text-gray-400 capitalize mb-2 line-clamp-3">
                {p.description}
              </p>
              <button
                className="text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2 
              hover:bg-amber-50/10 uppercase text-sm tracking-wide cursor-pointer active:scale-97 
              active:bg-amber-50/25 transition-all duration-300"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                  navigate(`/product/${p.title}?product-id=${p._id}`)
                }}
              >
                View Product
              </button>
            </div>
          </div>
        ))}
        <div
          className="bg-white/10 border-0 cursor-pointer shrink-0 flex justify-center flex-col rounded-tr-2xl rounded-br-2xl px-4"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
            navigate('/products')
          }}
        >
          <div className="flex justify-center">
            <ChevronRight size={80} />
          </div>
          <b className="text-2xl">See More</b>
        </div>
      </div>
    </div>
  )
}

export default HomeProducts
