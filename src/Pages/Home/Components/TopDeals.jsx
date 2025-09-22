import React from 'react'
import DealCard from './DealCard'

const topDeals = [
  { id: 1, name: 'Addids Softmax', price: 220, discount: 20 },
  { id: 2, name: 'Nike Pro', price: 220, discount: 20 },
  { id: 3, name: 'Addids Softmax', price: 220, discount: 20 },
  { id: 4, name: 'Addids Softmax', price: 220, discount: 20 },
  { id: 5, name: 'Addids Softmax', price: 220, discount: 20 },
  { id: 6, name: 'Nike Pro', price: 220, discount: 20 },
  { id: 7, name: 'Addids Softmax', price: 220, discount: 20 },
  { id: 8, name: 'Addids Softmax', price: 220, discount: 20 },
]

function TopDeals() {
  return (
    <div className="bg-gray-100 p-3 sm:p-6">
      <p className="text-2xl font-semibold mb-4">Today's Top Deals</p>
      <div className="flex gap-[1rem] overflow-x-auto overflow-y-hidden no-scrollbar">
        {topDeals.map((deals) => (
          <DealCard deals={deals} key={deals.id} />
        ))}
      </div>
    </div>
  )
}

export default TopDeals
