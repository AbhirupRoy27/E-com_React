import { useState } from 'react'

function PaymentOtions() {
  const [isOpen, setIsOpen] = useState(false)
  const [checkoutDetails, setCheckoutDetails] = useState({
    address: '',
    paymentMode: '',
  })

  return (
    <div className="bg-white p-4 sm:px-6 min-h-[150px]">
      <div className="flex justify-between items-center mb-1">
        <strong className="text-xl text-blue-950">Payment method</strong>
        <p
          className="text-blue-500 hover:text-black text-sm active:scale-103 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          // onClick={() => handlePayment(isOpen, setIsOpen, setIsDisabled)}
        >
          {isOpen ? 'Done' : 'Change'}
        </p>
      </div>
      <p className="text-gray-500 mb-2">Select Method</p>

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
              <span className="text-[13px] text-green-800">NG Pay Later</span>
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
    </div>
  )
}

export default PaymentOtions
