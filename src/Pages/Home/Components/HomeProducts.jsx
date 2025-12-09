import axios from 'axios'
import { useEffect, useState } from 'react'

function HomeProducts() {
  const [list, setList] = useState([])
  useEffect(() => {
    getData(setList)
  }, [])

  if (list.length < 1) return

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
              className="bg-white/10 min-w-[250px] h-[300px] border-0 cursor-pointer shrink-0"
              alt="product name"
            />
            <div className="mt-2 p-1">
              <span></span>
              <h3 className="capitalize hover:underline underline-offset-2 mb-2 cursor-pointer line-clamp-2">
                {p.title}
              </h3>
              <p className="text-[12px] text-gray-400 capitalize mb-2 line-clamp-3">
                {p.description}
              </p>
              <button className="text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2 hover:bg-amber-50/10 uppercase text-sm tracking-wide cursor-pointer">
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
      'http://localhost:4000/api/products/all-product?page=1&limit=10'
    )
    if (res.statusText) {
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
