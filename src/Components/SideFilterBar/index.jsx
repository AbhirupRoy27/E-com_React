import React from 'react'

const price = [500, 1000, 1500, 5000, 10000]
const discount = [25, 50, 75, 80]
const Company = ['Puma', 'Addidas', 'Zudio', 'Nike', 'others']

function FilterBar() {
  return (
    <>
      <div className=" ">
        <p className="p-[1%] text-3xl font-semibold border-b-[2px] min-w-[150px]">
          Filters
        </p>
        <div className="pl-[10%]">
          <p className="mt-[10px] mb-[5px] font-semibold">Price</p>
          {price.map((p) => (
            <div className="flex gap-[0.3rem]">
              <input type="checkbox" />
              <p className="p-[1%]">{p}</p>
            </div>
          ))}
          <p className="mt-[10px] mb-[5px] font-semibold">Discount</p>
          {discount.map((p) => (
            <div className="flex gap-[0.3rem]">
              <input type="checkbox" />
              <p className="p-[1%]">{p} %</p>
            </div>
          ))}
          <p className="mt-[10px] mb-[5px] font-semibold">Company</p>
          {Company.map((p) => (
            <div className="flex gap-[0.3rem]">
              <input type="checkbox" />
              <p className="p-[1%]">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default FilterBar
