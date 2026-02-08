import { useNavigate } from 'react-router-dom'
import TopHighlights from '../../../shared/components/TopHighlights'

function Orders() {
  // setOrders('Make Your First Order with NextGen')
  const navigate = useNavigate()
  return (
    <div>
      <div className="min-h-screen sm:min-h-[90vh] flex justify-center items-center flex-col">
        <img
          src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1766037817/delivery-order_hnrum6.png"
          alt="order"
          className="min-h-[40vh] sm:min-h-[50vh] min-w-[350px]"
        />
        <p className="text-2xl text-center sm:text-4xl pb-1 font-bold tracking-wider">
          Make Your First Order with NextGen
        </p>
        <button
          className="mt-4 py-2 px-5 hover:bg-gray-700/60 bg-gray-700 rounded font-bold tracking-wider transition-all duration-300 "
          onClick={() => navigate('/auth/login')}
        >
          Login / Signup
        </button>
      </div>
      <TopHighlights />
    </div>
  )
}

export default Orders
