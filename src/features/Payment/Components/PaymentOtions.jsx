import { useState } from 'react'
import PaymentSelector from './FormCards/PaymentSelector'

function PaymentOtions() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white p-4 sm:px-6 min-h-[150px]">
      <div className="flex justify-between items-center mb-1">
        <strong className="text-xl text-blue-950">Payment method</strong>
        <p
          className="text-blue-500 hover:text-black text-sm active:scale-103 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Done' : 'Change'}
        </p>
      </div>
      <p className="text-gray-500 mb-2">Select Method</p>

      {isOpen && <PaymentSelector />}
    </div>
  )
}

export default PaymentOtions
