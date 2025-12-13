import axios from 'axios'
import { useEffect, useState } from 'react'

function HomeProducts() {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  useEffect(() => {
    getData(setList)
  }, [])

  if (list[0] == 1)
    return (
      <div className="bg-gray-950 px-2 xl:px-30 py-4">
        <h1 className="uppercase bg-amber-50/ text-gray-50 text-center font-mono tracking-wider py-4 text-2xl">
          Trending
        </h1>

        <div className="flex overflow-scroll gap-3 no-scrollbar mt-2 shrink-0">
          {list.map((p) => (
            <div className="text-white" key={p}>
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
  console.log(list)
  return (
    <div className="bg-gray-950 px-2 xl:px-30 py-4">
      <h1 className="uppercase text-gray-50 text-center font-mono tracking-wider py-4 text-2xl">
        Trending
      </h1>
      <div className="flex overflow-scroll gap-3 no-scrollbar mt-2 shrink-0">
        {list.map((p) => (
          <div className="text-white" key={p._id}>
            <img
              src={p.coverImage}
              className="bg-white/10 min-w-[250px] h-[300px] border-0 cursor-pointer shrink-0 active:scale-97 transition-all duration-300"
              alt="product name"
            />
            <div className="p-1">
              <span
                className={`text-sm  ${
                  p.stock <= 10 ? 'text-red-700' : 'text-gray-500/10'
                } min-h-[16px]`}
              >
                {p.stock <= 10 ? 'Only Few Left' : `${'Best Price'}`}
              </span>
              <h3 className="mt-2 capitalize hover:underline underline-offset-2 mb-2 cursor-pointer line-clamp-2">
                {p.title}
              </h3>
              <p className="text-[12px] text-gray-400 capitalize mb-2 line-clamp-3">
                {p.description}
              </p>
              <button className="text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2 hover:bg-amber-50/10 uppercase text-sm tracking-wide cursor-pointer active:scale-97 active:bg-amber-50/25 transition-all duration-300">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeProducts

const getData = async (setList) => {
  try {
    const res = await axios.get(
      'https://apiproducts-service-nu.vercel.app/api/products/all-product?page=1&limit=10'
      // 'http://localhost:4000/api/products/all-product?page=1&limit=10'
    )

    if (res.status == 200) {
      return setList(res.data.response)
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log('Server error:', error.response.status, error.response.data)
      } else if (error.request) {
        console.log('No response received:', error.request)
      } else {
        console.log('Axios config error:', error.message)
      }
    } else {
      console.log('Unknown error:', error)
    }
  }
}
