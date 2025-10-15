import React from 'react'
// import { useNavigate } from 'react-router-dom'

function NoBooks() {
  // const nav = useNavigate()
  return (
    <div className="flex justify-center items-center  min-h-[75vh] tracking-[2px] flex-col gap-2">
      <p className="sm:text-2xl">More Books Comming Soon...</p>
      <span className="text-md hover:underline">Explore Current Books</span>
    </div>
  )
}

export default NoBooks
