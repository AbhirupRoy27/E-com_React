import React, { useState, useEffect, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBestSellers } from '../../../Contexts/BooksContext'
import {
  handlebestSellers,
  handleCardClick,
} from '../../../Utils/Home/Mobile/handlebestSellers'

function BooksHomeCard() {
  const navigate = useNavigate()

  const { books } = useBestSellers()
  const [images, setImages] = useState([])

  useEffect(() => {
    if (books && books.length > 0) {
      setImages(books)
    }
  }, [books])

  return (
    <div className="flex sm:hidden bg-slate-200 mx-1 mb-2 flex-col p-2 min-w-[576px]">
      <p className="py-1 text-xl text-gray-800 font-semibold tracking-widest">
        Books you might like
      </p>
      {images.length <= 0 ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap py-2">
          <div className="flex gap-2 w-full overflow-scroll no-scrollbar ease h-[300px] mb-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.coverImage}
                alt="Book Home image"
                className="bg-white min-w-[49%] max-w-[49%] sm:max-w-[30%] h-full"
                onClick={() => handleCardClick(navigate, img)}
              />
            ))}
          </div>
        </div>
      )}
      <p
        className="text-black/80 active:text-black px-2 mb-2 underline"
        onClick={() => handlebestSellers(navigate)}
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
