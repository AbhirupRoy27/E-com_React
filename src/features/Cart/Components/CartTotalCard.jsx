import { useNavigate } from 'react-router-dom'

function CartTotalCard({ total }) {
  const navigate = useNavigate()
  return (
    <div className="min-w-[310px]">
      <p className="border-b-[2px] py-[2%] text-2xl font-semibold tracking-wide">
        Order Details
      </p>

      <div className="flex justify-between py-[3%]">
        <p>Cart Total: </p>
        <p>Rs. {total}.00</p>
      </div>

      <div className="flex justify-between py-[3%]">
        <p>Delivery Charge: </p>
        <p>Rs. 40.00</p>
      </div>

      <div className="flex justify-between border-t-[2px] py-[2%] text-2xl font-semibold tracking-wide">
        <p>Total :</p>
        <p>Rs. {total + 40}.00</p>
      </div>

      <div className="flex justify-end  mt-[7%]">
        <button
          className="bg-yellow-400 p-[2%] font-medium tracking-wide rounded-lg"
          onClick={() => navigate('/app/buy-now')}
        >
          CheckOut
        </button>
      </div>
    </div>
  )
}

export default CartTotalCard
