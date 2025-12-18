import { useNavigate } from 'react-router-dom'

function Orders() {
  // setOrders('Make Your First Order with NextGen')
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex justify-center items-center flex-col min-w-screen">
      <img
        src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1766037817/delivery-order_hnrum6.png"
        alt="order"
      />
      <p className="text-4xl pb-1 font-bold tracking-wider">
        Make Your First Order with NextGen
      </p>
      <button
        className="mt-4 py-2 px-5 hover:bg-gray-700/60 bg-gray-700 rounded font-bold tracking-wider transition-all duration-300 "
        onClick={() => navigate('/login')}
      >
        Login / Signup
      </button>
    </div>
  )
}

export default Orders
