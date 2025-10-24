import React from 'react'
import { handleCheckout } from '../../Utils/BuyNow/handleSubmit'
import { useBuy } from '../../Contexts/BuyContext'

function OrderTotal({ navigate }) {
  const { isDisabled, setIsDisabled } = useBuy()
  return (
    <div className=" w-full bg-white px-3 sm:px-4 py-4 xl:min-w-[20%] min-h-[180px] max-h-[260px]">
      <div className="pb-4 border-b border-slate-300">
        <button
          className={`w-full rounded-full py-2 font-bold mb-1 ${
            isDisabled ? 'bg-yellow-300' : 'bg-yellow-300/70'
          } active:scale-101`}
          onClick={() => handleCheckout(navigate, setIsDisabled, isDisabled)}
        >
          Deliver to this Address
        </button>
        <span className="text-gray-500 text-sm text-base/2">
          By placing your order, you agree to NextGen's{' '}
          <strong className="text-blue-700 cursor-pointer">
            privacy notice
          </strong>{' '}
          and{' '}
          <strong className="text-blue-700 cursor-pointer">
            conditions of use
          </strong>
          .
        </span>
      </div>
      <div className="mt-2 px-1">
        <p className="flex justify-between">
          <span>Item Total:</span>
          <span>- -</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery:</span>
          <span>- -</span>
        </p>
        <p className="flex justify-between mt-2 text-xl font-semibold">
          <span>Order Total:</span>
          <span>- -</span>
        </p>
      </div>
    </div>
  )
}

export default OrderTotal
