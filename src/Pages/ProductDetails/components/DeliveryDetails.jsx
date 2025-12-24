import { HandCoinsIcon, RotateCcw, ShieldCheck } from 'lucide-react'
import React from 'react'
import { BsCashCoin } from 'react-icons/bs'

function DeliveryDetails() {
  const Currentdate = new Date()

  let DeliveryBy = {
    Date: Currentdate.getDate(),
    Month: Currentdate.getMonth(),
  }

  const FormatDeliveryDate = () => {
    if (DeliveryBy.Date + 7 > 30) {
      DeliveryBy.Date = DeliveryBy.Date + 7 - 30
      DeliveryBy.Month = DeliveryBy.Month + 1
      return
    }
    DeliveryBy.Date = DeliveryBy.Date + 7
  }
  FormatDeliveryDate()

  return (
    <div className="my-3">
      <p>
        <b className="text-xl">Free Delivery </b>
        By, {DeliveryBy.Date}
        {DeliveryBy.Date > 3
          ? 'th '
          : DeliveryBy.Date > 2
          ? 'rd '
          : DeliveryBy.Date > 1
          ? 'nd '
          : 'st '}
        {DeliveryBy.Month === 0
          ? 'Jan'
          : DeliveryBy.Month === 1
          ? 'Feb'
          : DeliveryBy.Month === 2
          ? 'Mar'
          : DeliveryBy.Month === 3
          ? 'Apr'
          : DeliveryBy.Month === 4
          ? 'May'
          : DeliveryBy.Month === 5
          ? 'Jun'
          : DeliveryBy.Month === 6
          ? 'Jul'
          : DeliveryBy.Month === 7
          ? 'Aug'
          : DeliveryBy.Month === 8
          ? 'Sept'
          : DeliveryBy.Month === 9
          ? 'Oct'
          : DeliveryBy.Month === 10
          ? 'Nov'
          : DeliveryBy.Month === 11
          ? 'Dec'
          : 'Jan'}
      </p>
      <h2 className="py-3 text-xl font-semibold">Delivery Details</h2>
      <div className="sm:px-3 flex justify-between w-full  overflow-auto no-scrollbar gap-2">
        <div className="sm:min-w-[70px] max-w-[100px] min-h-[70px] flex flex-col items-center justify-center py-3 shrink-0 gap-2">
          <RotateCcw size={30} />
          <h4 className="text-center font-extralight sm:font-light">
            10 days return
          </h4>
        </div>

        <div className="sm:min-w-[70px] max-w-[100px] min-h-[70px] flex flex-col items-center justify-center py-3 shrink-0 gap-2">
          <ShieldCheck size={30} />
          <h4 className="text-center font-extralight sm:font-light">
            NextGen Assured
          </h4>
        </div>
        <div className="sm:min-w-[70px] max-w-[100px] min-h-[70px] flex flex-col items-center justify-center py-3 shrink-0 gap-2">
          <HandCoinsIcon size={30} />
          <h4 className="text-center font-extralight sm:font-light">
            Easy Payments
          </h4>
        </div>
        <div className="sm:min-w-[70px] max-w-[100px] min-h-[70px] flex flex-col items-center justify-center py-3 shrink-0 gap-2">
          <BsCashCoin size={30} />
          <h4 className="text-center font-extralight sm:font-light">
            COD Available
          </h4>
        </div>
      </div>
    </div>
  )
}

export default DeliveryDetails
