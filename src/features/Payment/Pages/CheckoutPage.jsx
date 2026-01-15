import OrderTotal from '../Components/OrderTotal'
import PaymentOtions from '../Components/PaymentOtions'

function CheckoutPage() {
  return (
    <div>
      <div className="flex flex-col min-w-[100vw] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        <div className="w-full min-h-[92vh] flex flex-col-reverse xl:flex-row justify-end xl:justify-start gap-6 bg-slate-100 px-[2%] sm:px-[4%] py-[1%]">
          <div className=" w-full xl:min-w-[70%] flex flex-col gap-6">
            <div className="bg-white py-4 px-6 min-h-[150px]">
              <div className="flex justify-between items-center mb-2">
                <strong className="text-xl">Delivering to Address</strong>
                <p className="text-blue-500 hover:text-black text-sm cursor-pointer">
                  Change
                </p>
              </div>
              <p className="text-gray-500">Address Line</p>
            </div>
            <PaymentOtions />
          </div>

          <OrderTotal />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
