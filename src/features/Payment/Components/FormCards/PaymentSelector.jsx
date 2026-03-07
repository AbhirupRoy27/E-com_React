import { useState } from 'react'
import { useBuy } from '../../Context/BuyContext'

function PaymentSelector() {
  const [checkoutDetails, setCheckoutDetails] = useState({
    address: '',
    paymentMode: '',
  })

  const { setIsDisabled } = useBuy()

  return (
    <div className="text-black pt-3">
      <form
        className="border border-black/30 p-4 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(checkoutDetails)
          if (checkoutDetails.paymentMode.length > 0) return setIsDisabled(true)
        }}
      >
        <div className="flex gap-3 items-center border-b border-black/30 py-3">
          <label>Pay With UPI</label>
          <input
            type="radio"
            value={checkoutDetails.paymentMode}
            name="paymentMode"
            onChange={() =>
              setCheckoutDetails((prev) => ({
                ...prev,
                paymentMode: 'UPI',
              }))
            }
          />
        </div>
        <div className="flex gap-3 items-center border-b border-black/30 py-3">
          <label>Pay With Credit/Debit Card</label>
          <input
            type="radio"
            value={checkoutDetails.paymentMode}
            name="paymentMode"
            onChange={() =>
              setCheckoutDetails((prev) => ({
                ...prev,
                paymentMode: 'Credit',
              }))
            }
          />
        </div>
        <div className="flex gap-3 items-center border-b border-black/30 py-3">
          <label className="flex items-center gap-1">
            Pay With
            <span className="text-[13px] text-green-800 font-bold tracking-wide">
              NG Pay Later
            </span>
          </label>
          <input
            type="radio"
            value={checkoutDetails.paymentMode}
            name="paymentMode"
            onChange={() =>
              setCheckoutDetails((prev) => ({
                ...prev,
                paymentMode: 'Pay Later',
              }))
            }
          />
        </div>
        <div className="flex gap-2">
          <button
            className={`${checkoutDetails.paymentMode.length < 1 ? 'bg-amber-300/60' : 'bg-amber-300'} py-2 px-5 rounded-full mt-3 font-semibold tracking-wider"
          type="submit`}
            disabled={checkoutDetails.paymentMode.length < 1}
          >
            Continue
          </button>
          <button
            type="reset"
            className={`bg-gray-700 text-white py-2 px-5 rounded-full mt-3 font-semibold tracking-wider"
          type="submit`}
            onClick={() =>
              setCheckoutDetails((prev) => ({ ...prev, paymentMode: '' }))
            }
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentSelector
