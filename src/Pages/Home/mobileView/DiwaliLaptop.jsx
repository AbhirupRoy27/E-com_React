import React from 'react'

function DiwaliLaptop({ navigate }) {
  return (
    <div className="flex px-[2%] sm:px-[4%] py-2 gap-2 flex-col md:flex-row md:max-h-[240px] min-w-[344px] sm:mt-2">
      <div className="lg:w-[60%] xl:w-[40%] flex flex-col justify-around">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760706928/Screenshot_2025-10-17_at_6.43.40_PM_lvemvk.png"
          alt="Deal"
          className="w-full h-[45%]"
        />
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760709620/Diwali01_rcpf2s.png"
          alt="Deal"
          className="hidden md:block w-full h-[45%] "
        />
      </div>
      <div className="flex lg:w-[40%] xl:w-[60%] gap-2">
        <div className="w-full xl:w-[60%] h-full ">
          <img
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761346054/Screenshot_2025-10-25_at_4.15.29_AM_dglhgh.png"
            alt="Deal"
            className="w-full h-full object-full rounded-xl"
            onClick={() => navigate('/Products')}
          />
        </div>
        <div className="hidden xl:flex xl:w-[40%] bg-gray-100  rounded-4xl p-[1%] justify-between shadow-lg shadow-black/20">
          <div className="w-full rounded-3xl bg-gray-200 shadow-lg shadow-black/20">
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761345963/Screenshot_2025-10-25_at_4.15.43_AM_rw9t1s.png"
              alt="loading.."
              className="object-cover w-full h-full rounded-3xl shadow-lg shadow-black/20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiwaliLaptop
