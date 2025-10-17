import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BooksHomeCard() {
  const navigate = useNavigate()
  const [images, setImages] = useState([])

  const handlebestSellers = () => {
    navigate('/best sellers')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchBestSellerImage = async () => {
      const res = await fetch(
        'https://abhi-ecomserver.vercel.app/api/covers/img?limit=4'
      )

      if (!res.ok) {
        return console.error('No Image')
      }

      const data = await res.json()
      setImages(data.Covers)
      return data
    }

    fetchBestSellerImage()
  }, [])

  return (
    <div className="flex sm:hidden bg-slate-200 mx-1 mb-2 flex-col p-2">
      <p className="py-1 text-xl text-gray-800 font-semibold tracking-widest">
        Book Home Card
      </p>
      {images.length <= 0 ? (
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
      ) : (
        <div className="flex flex-wrap py-2">
          <div className="flex gap-2 w-full overflow-scroll no-scrollbar ease h-[300px] mb-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Book Home image"
                className="bg-white min-w-[49%] max-w-[49%] sm:max-w-[30%] h-full "
              />
            ))}
          </div>
        </div>
      )}

      <p
        className="text-black/80 active:text-black px-2 mb-2 underline"
        onClick={() => handlebestSellers()}
      >
        Looking for best sellers
      </p>
    </div>
  )
}

export default BooksHomeCard
