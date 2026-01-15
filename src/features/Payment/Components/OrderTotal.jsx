import { handleCheckout } from '../../../Utils/BuyNow/handleSubmit'
import { useBuy } from '../Context/BuyContext'
import { useNavigate } from 'react-router-dom'

function OrderTotal() {
  const navigate = useNavigate()
  const { isDisabled, setIsDisabled, item } = useBuy()

  // Calculate totals
  const itemTotal = item.reduce((sum, product) => {
    return sum + (product.price || 0)
  }, 0)
  const deliveryCharge = item.length > 0 ? 40 : 0
  const orderTotal = itemTotal + deliveryCharge

  // Format currency
  const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString('en-IN')}.00`
  }

  return (
    <div className="w-full sm:w-[450px] bg-white text-black px-3 sm:px-4 py-4 min-h-[180px] max-h-[260px]">
      <div className="pb-4 border-b border-slate-300">
        <button
          className={`w-full rounded-full py-2 font-bold mb-1 ${
            isDisabled ? 'bg-yellow-300' : 'bg-yellow-300/70 cursor-not-allowed'
          } active:scale-101`}
          onClick={() => handleCheckout(navigate, setIsDisabled, isDisabled)}
          disabled={!isDisabled}
        >
          Place your order
        </button>
        <span className="text-gray-500 text-sm">
          By placing your order, you agree to NextGen's{' '}
          <strong className="text-blue-700 cursor-pointer">
            privacy notice
          </strong>{' '}
          and{' '}
          <strong className="text-blue-700 cursor-pointer">
            conditions of use
          </strong>
          .
        </span>
      </div>
      <div className="mt-2 px-1">
        <p className="flex justify-between">
          <span>Item Total:</span>
          <span>{item.length > 0 ? formatCurrency(itemTotal) : '- -'}</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery:</span>
          <span>
            {item.length > 0 ? formatCurrency(deliveryCharge) : '- -'}
          </span>
        </p>
        <p className="flex justify-between mt-2 text-xl font-semibold">
          <span>Order Total:</span>
          <span>{item.length > 0 ? formatCurrency(orderTotal) : '- -'}</span>
        </p>
      </div>
    </div>
  )
}

export default OrderTotal
