import React from 'react'

function BuyNow() {
  return (
    <div className="flex flex-col min-w-[344px]">
      <div className="min-h-[8vh] bg-gray-900"></div>
      <div className="w-full min-h-[92vh] flex flex-col-reverse xl:flex-row justify-end xl:justify-start gap-6 bg-slate-100 px-[5%] py-[1%]">
        <div className=" w-full xl:min-w-[70%] flex flex-col gap-6">
          <div className="bg-white py-4 px-6  min-h-[150px]">
            <strong className="text-xl">Payment method</strong>
          </div>
          <div className="bg-white py-4 px-6 min-h-[150px]">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-xl">Delivering to Address</strong>
              <p className="text-blue-400 hover:text-black">Change</p>
            </div>
            <div>
              <p className="text-gray-500">Address Line</p>
            </div>
          </div>
        </div>

        <div className=" w-full bg-white p-4 xl:min-w-[20%] min-h-[180px] max-h-[200px]">
          <div className="pb-6 border-b border-slate-300">
            <button className="bg-yellow-300 w-full rounded-full py-2 font-bold">
              Deliver to this Address
            </button>
          </div>
          <p>Order Total</p>
        </div>
      </div>
    </div>
  )
}

export default BuyNow
