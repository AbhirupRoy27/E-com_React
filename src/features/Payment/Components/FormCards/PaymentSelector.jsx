import { useState } from 'react'

function PaymentSelector() {
  const [checkoutDetails, setCheckoutDetails] = useState({
    address: '',
    paymentMode: '',
  })

  return (
    <div className="text-black pt-3">
      <form
        className="border border-black/30 p-4 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault()
          console.log(checkoutDetails)
        }}
      >
        <div className="flex gap-3 items-center border-black/30 py-3">
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
        <div className="flex gap-3 items-center border-t border-black/30 py-3">
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
        <div className="flex gap-3 items-center border-t border-black/30 py-3">
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
        <button
          className="bg-amber-300 py-2 px-5 rounded-full mt-3 font-semibold tracking-wider"
          type="submit"
          disabled={checkoutDetails.paymentMode.length < 1}
        >
          Continue
        </button>
      </form>
    </div>
  )
}

export default PaymentSelector
