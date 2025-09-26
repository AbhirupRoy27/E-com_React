import React from 'react'

function DealCard({ deals }) {
  // console.log(deals)
  return (
    <div className="mb-4">
      <div className="bg-white min-w-[250px] min-h-[250px] ">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906325/ChatGPT_Image_Sep_26_2025_10_34_49_PM_aweoma.png"
          alt="Loading..."
        />
      </div>
      <div className="bg-gray-300 min-w-[100px] min-h-[100px] p-2">
        <div className="flex gap-2 text-xl sm:text-sm  items-center justify-between">
          <p className="text-md sm:text-lg">{deals.name}</p>
          <p className="font-bold text-[22px] sm:text-xl">{deals.price}</p>
        </div>
        <p className="font-semibold bg-red-700 p-1 text-white max-w-[31%] mt-2">
          {deals.discount}% off
        </p>
      </div>
    </div>
  )
}

export default DealCard
