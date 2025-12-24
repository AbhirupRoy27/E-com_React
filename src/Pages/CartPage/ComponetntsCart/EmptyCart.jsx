import React from 'react'

function EmptyCart({ navigate }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center min-h-[85vh] min-w-screen w-full">
      <img
        src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1766043602/shopping_zzfc1r.png"
        alt="Empty Cart"
        className="rounded-full bg-white/10 p-10 min-h-[60vh]"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-4xl font-semibold tracking-wide">
          You're Cart is Empty....
        </h1>
        <button
          onClick={() => navigate('/Products')}
          className="bg-blue-950 text-white rounded-md text-lg px-6 py-2"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}

export default EmptyCart
