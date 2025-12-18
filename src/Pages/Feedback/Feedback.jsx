import { useState } from 'react'
import LeftCompo from '../../Components/Feedback/LeftCompo'
import RightCompo from '../../Components/Feedback/RightCompo'

function Feedback() {
  const [isActive, setIsActive] = useState(true)
  return (
    <>
      <div className="h-[50px] bg-gray-400 flex min-w-screen text-white font-bold">
        <button
          className={`w-[50%] flex justify-center items-center ${
            isActive && 'border-b-4 font-semibold bg-gray-500 border-white'
          }`}
          onClick={() => setIsActive(true)}
        >
          Submit Feedback
        </button>
        <button
          className={`w-[50%] flex justify-center items-center ${
            !isActive && 'border-b-4 font-semibold bg-gray-500 border-white'
          }`}
          onClick={() => setIsActive(false)}
        >
          Other's Feedback
        </button>
      </div>
      <div className="flex flex-col xl:flex-row min-w-screen">
        {isActive ? <LeftCompo /> : <RightCompo />}
      </div>
    </>
  )
}

export default Feedback
