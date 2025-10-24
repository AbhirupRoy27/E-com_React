import { useState } from 'react'

function PaymentOtions() {
  const [isOpen, setIsOpen] = useState(false)
  const [PaymentMethod, setPaymentMethod] = useState('')
  return (
    <div className="bg-white py-4 px-6  min-h-[150px]">
      <div className="flex justify-between items-center mb-1">
        <strong className="text-xl">Payment method</strong>
        <p
          className="text-blue-500 hover:text-black text-sm active:scale-103"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Done' : 'Change'}
        </p>
      </div>
      <p className="text-gray-500 mb-2">
        {PaymentMethod ? PaymentMethod : 'Select Method'}
      </p>
      <PaymentOtionsItems isOpen={isOpen} setPaymentMethod={setPaymentMethod} />
    </div>
  )
}

const PaymentOtionsItems = ({ isOpen, setPaymentMethod }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`${
        isOpen ? 'flex' : 'hidden'
      } transition-all duration-300 ease-in-out border border-gray-400 rounded p-4 px-6 text-xl flex-col gap-4`}
    >
      <div>
        <p className="font-semibold pb-3 border-b border-gray-400">UPI</p>
        <div className="flex gap-2 items-center mt-2">
          <input
            id="UPI"
            type="radio"
            className=""
            value="Pay With UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label for="UPI" className="text-sm text-gray-500">
            Available Credit: ₹30,000
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
            type="radio"
            className=""
            value="Buy now, Pay later"
          />
          <label for="CREDIT & DEBIT CARDS" className="text-sm text-gray-500">
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
            type="radio"
            className=""
            value="Buy now, Pay later"
          />
          <label for="Buy now, Pay later" className="text-sm text-gray-500">
            Available Credit: ₹30,000
          </label>
        </div>
      </div>
      <button
        className="bg-yellow-300 py-2 px-1 rounded-full w-[200px] text-lg mt-2"
        type="submit"
      >
        Pay with this methors
      </button>
    </form>
  )
}

export default PaymentOtions
