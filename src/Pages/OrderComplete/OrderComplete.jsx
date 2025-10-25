import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OrderComplete() {
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

  useEffect(() => {
    if (counter <= 0) {
      navigate('/')
    }
  }, [counter, navigate])

  return (
    <div className="min-w-[430px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] bg-slate-100 h-[100vh]">
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
      <div className="flex gap-4 justify-center flex-col sm:flex-row mt-4 px-2 sm:px-5">
        <div className="min-w-[70%] xl:min-w-[600px] min-h-[300px] p-2 shadow-lg shadow-black/10 rounded-xl border-t-4">
          Delivery details
        </div>
        <div className="min-w-[30%] xl:min-w-[600px] min-h-[300px] p-2 shadow-lg shadow-black/10 rounded-xl border-t-4">
          Paymet Details
        </div>
      </div>
    </div>
  )
}

export default OrderComplete
