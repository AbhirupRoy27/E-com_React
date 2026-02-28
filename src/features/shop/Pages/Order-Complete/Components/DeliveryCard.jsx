import { ShoppingBag } from 'lucide-react'

function DeliveryCard() {
  return (
    <>
      {/* Delivery details card */}
      <div className="min-w-full sm:min-w-[400px] p-3 shadow-lg shadow-white/10 rounded-xl border-t-4 bg-gray-700 sm:max-h-fit">
        <div className="flex justify-between text-xl items-center border-b border-white/30">
          <span className="block text-2xl font-extralight p-2 ">
            Delivery details
          </span>
          <button className="text-3xl mr-3">
            <ShoppingBag />
          </button>
        </div>

        <div className="w-full my-3 ">
          <div>{/* Add Address */}</div>
          <div className="text-gray-200 px-2">
            {/* Add Expected date */}
            Expected in 7 days
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryCard
