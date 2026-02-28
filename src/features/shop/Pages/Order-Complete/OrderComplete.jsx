import { useEffect, useState } from 'react'
import CountDownMessage from './Components/CountDownMessage'
import DeliveryCard from './Components/DeliveryCard'
import PaymentCard from './Components/PaymentCard'

function OrderComplete() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const animationTimer = setTimeout(() => setAnimate(true), 50)
    return () => {
      clearTimeout(animationTimer)
    }
  }, [])

  return (
    <div className="min-w-full sm:min-w-[354px] h-screen">
      <div className="bg-green-900 min-h-[25vh] flex justify-center items-center ">
        <div
          className={`relative transition-all duration-800 ease-in-out w-[100px] h-[100px] bg-white rounded-full p-1 overflow-hidden ${
            animate
              ? 'translate-y-0 opacity-100 scale-120'
              : 'translate-y-15 opacity-50 scale-50'
          }`}
        >
          <img src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761370065/complete-svgrepo-com_us6ibr.svg" />
        </div>
      </div>
      <CountDownMessage />

      <div className="my-4">
        <h2 className="text-center py-2 sm:py-3 text-3xl sm:text-5xl tracking-wider">
          Order Complete!
        </h2>
        <h5 className="text-center pt-1 pb-5 tracking-wider">
          Order Id: 13414XXXX
        </h5>
      </div>
      <div className="flex gap-4 justify-center flex-col sm:flex-row mt-4 px-2 sm:px-5 ">
        {/* Delivery details card */}
        <DeliveryCard />

        {/* Payment Datails card */}
        <PaymentCard />
      </div>
    </div>
  )
}

export default OrderComplete
