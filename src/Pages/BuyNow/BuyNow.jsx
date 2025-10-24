import React from 'react'
import PaymentOtions from '../../Components/BuyNow/PaymentOtions'
import OrderTotal from '../../Components/BuyNow/OrderTotal'
import { useNavigate } from 'react-router-dom'

function BuyNow() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col min-w-[344px]">
      <div className="min-h-[8vh] bg-gray-900 flex justify-between items-center px-2 sm:px-6">
        <p className="text-4xl text-gray-300 font-semibold text-shadow-lg text-shadow-white/30 tracking-wide font-mono">
          NG
        </p>
        <p className="text-3xl lg:text-4xl text-white tracking-widest">
          Checkout
        </p>
        <img
          src="#"
          alt="Cart"
          className="w-[53px] h-[53px] bg-slate-100 rounded-full px-1 py-4"
        />
      </div>
      <div className="w-full min-h-[92vh] flex flex-col-reverse xl:flex-row justify-end xl:justify-start gap-6 bg-slate-100 px-[2%] sm:px-[4%] py-[1%]">
        <div className=" w-full xl:min-w-[70%] flex flex-col gap-6">
          <div className="bg-white py-4 px-6 min-h-[150px]">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-xl">Delivering to Address</strong>
              <p className="text-blue-500 hover:text-black text-sm cursor-pointer">
                Change
              </p>
            </div>
            <p className="text-gray-500">Address Line</p>
          </div>
          <PaymentOtions />
        </div>

        <OrderTotal navigate={navigate} />
      </div>
    </div>
  )
}

export default BuyNow
