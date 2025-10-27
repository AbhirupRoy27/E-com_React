import { useState } from 'react'
import LeftCompo from '../../Components/Feedback/LeftCompo'
import RightCompo from '../../Components/Feedback/RightCompo'

function Feedback() {
  const [isActive, setIsActive] = useState(true)
  return (
    <>
      <div className="h-[50px] bg-gray-400 flex min-w-[350px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        <button
          className={`w-[50%] flex justify-center items-center ${
            isActive && 'border-b-4 font-semibold bg-gray-500'
          }`}
          onClick={() => setIsActive(true)}
        >
          Submit Feedback
        </button>
        <button
          className={`w-[50%] flex justify-center items-center ${
            !isActive && 'border-b-4 font-semibold bg-gray-500'
          }`}
          onClick={() => setIsActive(false)}
        >
          Other's Feedback
        </button>
      </div>
      <div className="flex flex-col xl:flex-row min-w-[350px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        {isActive ? <LeftCompo /> : <RightCompo />}
      </div>
    </>
  )
}

export default Feedback
