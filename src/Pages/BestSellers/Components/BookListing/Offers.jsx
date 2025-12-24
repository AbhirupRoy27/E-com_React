import { TagIcon } from 'lucide-react'
import React from 'react'

function Offers() {
  return (
    <div className="py-5 ">
      <h3 className="py-3 text-xl ml-1 font-semibold">Available offers</h3>
      <ol className="flex flex-col gap-2 justify-start items-start">
        <li className="flex gap-2 items-center">
          <TagIcon size={20} color="green" fill="green" />
          5% off upto ₹1000 on HDFC credit card
        </li>
        <li className="flex gap-2 items-center">
          <TagIcon size={20} color="green" fill="green" />
          5% off upto ₹1000 on HDFC credit card
        </li>
        <li className="flex gap-2 items-center">
          <TagIcon size={20} color="green" fill="green" />
          5% off upto ₹1000 on HDFC credit card
        </li>
        <button className="my-3 font-semibold text-blue-600">+ See More</button>
      </ol>
    </div>
  )
}

export default Offers
