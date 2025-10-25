import { useState } from 'react'
import LeftCompo from './Componets/LeftCompo'
import RightCompo from './Componets/RightCompo'

function Feedback() {
  const [isActive, setIsActive] = useState(true)
  return (
    <>
      <div className="h-[50px] bg-gray-400 flex min-w-[576px] sm:min-w-[1100px]">
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
      <div className="flex flex-col xl:flex-row min-w-[576px] sm:min-w-[1100px]">
        {isActive ? <LeftCompo /> : <RightCompo />}
      </div>
    </>
  )
}

export default Feedback
