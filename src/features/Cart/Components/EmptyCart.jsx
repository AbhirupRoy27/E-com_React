import { useNavigate } from 'react-router-dom'

export default function EmptyCart() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center min-h-[85vh] w-full">
      <img
        src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1766043602/shopping_zzfc1r.png"
        alt="Your cart is currently empty"
        className="rounded-full bg-white/10 p-10 min-h-[40vh]"
        loading="lazy"
        draggable="false"
      />
      <div className="flex flex-col gap-4 items-center sm:items-start">
        <h1 className="text-center sm:text-left text-4xl font-semibold tracking-wide">
          Your Cart is Empty
        </h1>
        <p className="text-gray-500 text-center sm:text-left text-sm">
          Looks like you haven't added anything yet.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-950 hover:bg-blue-900 active:scale-95 text-white rounded-md text-lg px-6 py-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  )
}