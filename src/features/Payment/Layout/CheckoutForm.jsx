import AddressCard from '../Components/FormCards/AddressCard'
import PaymentOtions from '../Components/PaymentOtions'

function CheckoutForm() {
  return (
    <div className="sm:w-2/3">
      <div className=" w-full xl:min-w-[70%] flex flex-col gap-6">
        <AddressCard />
        <PaymentOtions />
      </div>
    </div>
  )
}

export default CheckoutForm
