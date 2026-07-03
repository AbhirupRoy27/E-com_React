import { Plus, X } from 'lucide-react'
import { useState } from 'react'

function PaymentCard() {
  const [isCardOpen, setIsCardOpen] = useState(true)
  return (
    <div className="min-w-full sm:min-w-[400px] p-3 shadow-lg shadow-white/10 rounded-xl border-t-4 bg-gray-700">
      <div className="flex justify-between text-xl items-center border-b border-white/30">
        <span className="block text-2xl font-extralight p-2 ">
          Payment Details
        </span>
        {isCardOpen ? (
          <button
            className="text-3xl mr-3"
            onClick={() => setIsCardOpen(false)}
          >
            <X />
          </button>
        ) : (
          <button className="text-3xl mr-3" onClick={() => setIsCardOpen(true)}>
            <Plus />
          </button>
        )}
      </div>

      {isCardOpen && (
        <>
          <div className="w-full my-3 flex flex-col px-2 gap-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>--</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>--</span>
            </div>
            <div className="flex justify-between">
              <span>Payment:</span>
              <span>--</span>
            </div>
          </div>
          <hr color="white" className="h-[0.2px]" />
          <div className="p-2 text-xl font-semibold flex justify-between items-center">
            <span>Total:</span>
            <span className="text-2xl">--</span>
          </div>
        </>
      )}
    </div>
  )
}

export default PaymentCard
