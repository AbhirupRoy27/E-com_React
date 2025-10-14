import React, { useState } from 'react'
import { BrandDropList } from '../../Pages/Products/Products'

const price = [500, 1000, 1500, 5000, 10000]
const discount = [25, 50, 75, 80]
const Company = ['Puma', 'Addidas', 'Zudio', 'Nike', 'others']

function FilterBar() {
  const [devComplete, setDevComplete] = useState(false)
  return (
    <>
      {devComplete && (
        <p
          className="text-[13px] mb-3"
          onClick={() => setDevComplete(devComplete)}
        >
          / Close
        </p>
      )}
      <BrandDropList />
      {!devComplete ? (
        <p className="min-w-[150px] mt-10">Work in Progress</p>
      ) : (
        <div className=" ">
          <p className="p-[1%] text-3xl font-semibold border-b-[2px] min-w-[150px]">
            Filters
          </p>
          <div className="pl-[10%]">
            <p className="mt-[10px] mb-[5px] font-semibold">Price</p>
            {price.map((p, i) => (
              <div className="flex gap-[0.3rem]" key={i}>
                <input type="checkbox" />
                <p className="p-[1%]">{p}</p>
              </div>
            ))}
            <p className="mt-[10px] mb-[5px] font-semibold">Discount</p>
            {discount.map((p, i) => (
              <div className="flex gap-[0.3rem]" key={i}>
                <input type="checkbox" />
                <p className="p-[1%]">{p} %</p>
              </div>
            ))}
            <p className="mt-[10px] mb-[5px] font-semibold">Company</p>
            {Company.map((p, i) => (
              <div className="flex gap-[0.3rem]" key={i}>
                <input type="checkbox" />
                <p className="p-[1%]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default FilterBar
