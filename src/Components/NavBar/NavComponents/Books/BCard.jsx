import React, { useState } from 'react'

function BCard({ books }) {
  const [isDesc, setIsDesc] = useState(false)

  return (
    <>
      <div className="flex flex-col w-[49%] sm:w-[19%] bg-gray-100 p-2 h-max gap-[0.4rem] rounded">
        {isDesc ? (
          <div className="min-h-[493.9px] sm:min-h-[493.9px] bg-gray-200 p-3 rounded-md">
            <p className="text-[14px] sm:tracking-[1px]">{books.description}</p>
            <p
              onClick={() => setIsDesc(!isDesc)}
              className="mt-[1rem] font-[600] text-red-900 tracking-[1px] ml-2 text-xl"
            >
              Close
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-sm sm:text-xl mt-[2px] font-semibold h-[56px] tracking-[1px]">
              {books.title}
            </h2>
            <div className="w-full h-[220px] sm:h-[380px] bg-orange-100 rounded-md">
              <img
                src={books.website}
                alt={books.title}
                className="w-full h-full rounded-md"
              />
            </div>

            <h3 className="font-semibold  min-h-[72px] sm:min-h-[48px] tracking-[1px]">
              {books.author}
            </h3>
            <p
              className="font-[500] tracking-[1px]"
              onClick={() => setIsDesc(!isDesc)}
            >
              Read Discription...
            </p>

            <div className="flex gap-[0.4rem] items-center">
              <p className="text-xl font-semibold">{books.pages}</p>
              <p>Total Pages</p>
            </div>
            <button
              className="bg-yellow-300 p-3 mt-[6px] rounded-md font-semibold tracking-[1px] "
              disabled
            >
              Read now
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default BCard
