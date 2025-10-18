import React from 'react'

const FourBox = ({ text }) => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760790678/Pl_ST_1_hpbwjq.jpg"
        alt="Loading.."
        className="w-full sm:w-85 min-h-20 max-h-80 rounded-tl-2xl rounded-tr-2xl object-contain"
      />
      <p className="w-full min-h-8 bg-yellow-400 rounded-bl-3xl rounded-br-3xl py-2 px-1 text-center">
        Card {text}
      </p>
    </>
  )
}

export default FourBox
