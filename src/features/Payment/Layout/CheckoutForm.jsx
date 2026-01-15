import PaymentOtions from '../Components/PaymentOtions'

function CheckoutForm() {
  return (
    <div className="sm:w-2/3">
      <div className=" w-full xl:min-w-[70%] flex flex-col gap-6">
        <div className="bg-white py-4 px-6 min-h-[150px]">
          <div className="flex justify-between items-center mb-2">
            <b className="text-xl">Delivering to Address</b>
            <p className="text-blue-500 hover:text-black text-sm cursor-pointer">
              Change
            </p>
          </div>
          <p className="text-gray-500">Address Line</p>
        </div>
        <PaymentOtions />
      </div>
    </div>
  )
}

export default CheckoutForm
