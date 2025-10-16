import React from 'react'

function BsCard({ books }) {
  return (
    <div className="bg-slate-50 w-[49%] sm:w-[33%] md:w-[24%] xl:w-[19%] mt-2 p-1">
      <p className="h-15 mb-2 sm:text-lg md:text-xl tracking-[1px] flex items-end">
        {books.title}
      </p>
      <img
        src={books.coverImage}
        alt="Loading"
        className="bg-white h-[25rem] w-full"
      />
      <p>Book Rating</p>
      <p className="h-max md:h-18 py-1 text-sm sm:text-md">
        {books.description}
      </p>
      <span>
        by
        <p className="inline text-sky-600 hover:text-black text-sm ml-1">
          {books.author}
        </p>
      </span>
      <div>
        <span className="text-md">
          Rs. <p className="text-xl inline">{books.price}</p>.00
        </span>
      </div>
      <div className="py-2">
        <button className="bg-white/20 py-1 hover:scale-101 w-[99%] rounded-full border border-yellow-400 hover:bg-yellow-400 ease-in-out tracking-[1px]">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default BsCard
