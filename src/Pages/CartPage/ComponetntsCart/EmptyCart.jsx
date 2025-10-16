import React from 'react'

function EmptyCart({ navigate }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-br from-slate-300 to-slate-50">
      <h1 className="text-center text-2xl font-semibold tracking-wide">
        Cart is Empty....
      </h1>
      <button
        onClick={() => navigate('/Products')}
        className="bg-blue-950 text-white rounded-md mt-[2%] p-[2%] text-md md:p-[1%]"
      >
        Continue Shopping
      </button>
    </div>
  )
}

export default EmptyCart
