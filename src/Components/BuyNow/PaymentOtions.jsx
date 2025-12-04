import { useState } from 'react'
import { handleSubmit } from '../../Utils/BuyNow/handleSubmit'
import { useBuy } from '../../Contexts/BuyContext'
import { handlePayment } from '../../Utils/BuyNow/handleClicks'

function PaymentOtions() {
  const [isOpen, setIsOpen] = useState(false)
  const [PaymentMethod, setPaymentMethod] = useState('')
  const { isDisabled, setIsDisabled } = useBuy()
  return (
    <div className="bg-white p-4 sm:px-6 min-h-[150px]">
      <div className="flex justify-between items-center mb-1">
        <strong className="text-xl">Payment method</strong>
        <p
          className="text-blue-500 hover:text-black text-sm active:scale-103 cursor-pointer"
          onClick={() => handlePayment(setIsOpen, setIsDisabled)}
        >
          {isOpen ? 'Done' : 'Change'}
        </p>
      </div>
      <p className="text-gray-500 mb-2">
        {PaymentMethod ? PaymentMethod : 'Select Method'}
      </p>
      <PaymentOtionsItems
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setPaymentMethod={setPaymentMethod}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
        PaymentMethod={PaymentMethod}
      />
    </div>
  )
}

const PaymentOtionsItems = ({
  isOpen,
  setIsOpen,
  setPaymentMethod,
  setIsDisabled,
  isDisabled,
  PaymentMethod,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!PaymentMethod) {
      alert('Please select a payment method.')
      return
    }
    handleSubmit(e, setIsDisabled, setIsOpen, isOpen)
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`${
        isOpen ? 'flex' : 'hidden'
      } transition-all duration-300 ease-in-out sm:border border-gray-400 rounded sm:p-2 sm:py-4 sm:px-6 text-xl flex-col gap-4`}
    >
      <div>
        <p className="font-semibold pb-3 border-b border-gray-400">UPI</p>
        <div className="flex gap-2 items-center mt-2">
          <input
            id="UPI"
            name="paymentMethod"
            type="radio"
            value="Pay With UPI"
            checked={PaymentMethod === 'Pay With UPI'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="UPI" className="text-sm text-gray-500">
            Pay with any UPI
          </label>
        </div>
      </div>
      <div>
        <p className="font-semibold pb-3 border-b border-gray-400">
          CREDIT & DEBIT CARDS
        </p>
        <div className="flex gap-2 items-center mt-2">
          <input
            id="CREDIT & DEBIT CARDS"
            name="paymentMethod"
            type="radio"
            value="Credit & Debit Cards"
            checked={PaymentMethod === 'Credit & Debit Cards'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label
            htmlFor="CREDIT & DEBIT CARDS"
            className="text-sm text-gray-500"
          >
            Available Credit: ₹30,000
          </label>
        </div>
      </div>

      <div>
        <p className="font-semibold pb-3 border-b border-gray-400">
          Buy now, Pay later
        </p>
        <div className="flex gap-2 items-center mt-2">
          <input
            id="Buy now, Pay later"
            name="paymentMethod"
            type="radio"
            value="Buy now, Pay later"
            checked={PaymentMethod === 'Buy now, Pay later'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="Buy now, Pay later" className="text-sm text-gray-500">
            Available Credit: ₹30,000
          </label>
        </div>
      </div>
      <button
        className={`bg-yellow-300 py-2 px-1 rounded-full w-[200px] text-lg mt-2 cursor-pointer ${
          isDisabled ? 'bg-yellow-300/70' : 'bg-yellow-300'
        } active:scale-101`}
        type="submit"
        disabled={isDisabled}
      >
        Pay with this method
      </button>
    </form>
  )
}

export default PaymentOtions
