import React from 'react'

function AddressCard() {
  return (
    <div className="bg-white py-4 px-6 min-h-[150px]">
      <div className="flex justify-between items-center mb-2">
        <b className="text-xl text-blue-950">Delivering to Address</b>
        <p className="text-blue-500 hover:text-black text-sm cursor-pointer">
          Change
        </p>
      </div>
      <p className="text-gray-500">Address Line</p>
    </div>
  )
}

export default AddressCard
