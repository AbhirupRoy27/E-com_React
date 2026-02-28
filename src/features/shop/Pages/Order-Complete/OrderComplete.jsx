import { Plus, ShoppingBag, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OrderComplete() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [counter, setCounter] = useState(4)
  const navigate = useNavigate()

  useEffect(() => {
    const animationTimer = setTimeout(() => setAnimate(true), 50)
    const interval = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => {
      clearTimeout(animationTimer)
      clearInterval(interval)
    }
  }, [])

  // useEffect(() => {
  //   if (counter <= 0) {
  //     navigate('/')
  //   }
  // }, [counter, navigate])

  return (
    <div className="min-w-full sm:min-w-[354px] h-screen">
      <div className="bg-green-700 min-h-[25vh] flex justify-center items-center ">
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
      <div className="bg-gray-800 min-h-[45px] flex justify-center items-center">
        <p className="text-xl text-white tracking-widest">
          Going home in {counter} sec...
        </p>
      </div>

      {/* Delivery details card */}
      <div className="flex gap-4 justify-center flex-col sm:flex-row mt-4 px-2 sm:px-5">
        <div className="min-w-full sm:min-w-[400px] p-3 shadow-lg shadow-white/10 rounded-xl border-t-4 bg-gray-700">
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
            <div>{/* Add Expected date */}</div>
          </div>
        </div>

        {/* Payment Datails card */}
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
              <button
                className="text-3xl mr-3"
                onClick={() => setIsCardOpen(true)}
              >
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
      </div>
    </div>
  )
}

export default OrderComplete
