function BillCard({ total }) {
  return (
    <div className="bill-card ">
      <p className="border-b-[2px] p-[2%] text-2xl font-semibold tracking-wide">
        Order Details
      </p>

      <div className="flex justify-between p-[3%]">
        <p>Cart Total: </p>
        <p>Rs. {total}.00</p>
      </div>

      <div className="flex justify-between p-[3%]">
        <p>Delivery Charge: </p>
        <p>Rs. 40.00</p>
      </div>

      <div className="flex justify-between border-t-[2px] p-[2%] text-2xl font-semibold tracking-wide">
        <p>Total :</p>
        <p>Rs. {total + 40}.00</p>
      </div>

      <div className="flex justify-end  mt-[7%]">
        <button className="bg-yellow-400 p-[2%] font-medium tracking-wide rounded-lg">
          CheckOut
        </button>
      </div>
    </div>
  )
}

export default BillCard
