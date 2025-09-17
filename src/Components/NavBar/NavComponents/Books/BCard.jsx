import React, { useState } from 'react'

function BCard({ books }) {
  const [isDesc, setIsDesc] = useState(true)

  // <div onClick={() => setIsDesc(!isDesc)}>
  //       {isDesc ? (

  //       ) : (
  //
  //       )}
  //     </div>
  // console.log(books)
  return (
    <>
      <div className="flex flex-col w-[49%] sm:w-[19%] bg-blue-50 p-2 h-max gap-[0.4rem]">
        {isDesc ? (
          <div className="min-h-[493.9px] sm:min-h-[493.9px]">
            <p className="mt-[10px]">{books.description}</p>
            <p
              onClick={() => setIsDesc(!isDesc)}
              className="mt-[1rem] font-[600] text-red-900"
            >
              Close
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-xl mt-[2px] font-semibold h-[56px]  ">
              {books.title}
            </h2>
            <div className="w-full min-h-[220px] sm:min-h-[250px] bg-orange-100 rounded-md">
              <img src="hbvjhv" alt={books.title} className="p-2 rounded-md" />
            </div>

            <h3 className="font-semibold min-h-[48px]">{books.author}</h3>
            <p className="font-[500]" onClick={() => setIsDesc(!isDesc)}>
              Read Discription...
            </p>

            <div className="flex gap-[0.4rem] items-center">
              <p className="text-xl font-semibold">{books.pages}</p>
              <p>Total Pages</p>
            </div>
            <button className="bg-pink-100 p-3 mt-[6px] rounded-md font-semibold">
              Read now
            </button>
          </>
        )}
      </div>
    </>
  )
}

export default BCard
