import React from 'react'

function DiwaliLaptop({ navigate }) {
  return (
    <div className="flex px-[1%] sm:px-[4%] py-2 gap-2 flex-col md:flex-row md:min-h-[250px] min-w-[344px] sm:min-w-[1100px] sm:mt-2">
      <div className="hidden lg:w-[60%] xl:w-[40%] sm:flex flex-col justify-around px-[1%]">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760706928/Screenshot_2025-10-17_at_6.43.40_PM_lvemvk.png"
          alt="Deal"
          className="w-full h-[45%] cursor-pointer hover:scale-103"
        />
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760709620/Diwali01_rcpf2s.png"
          alt="Deal"
          className="hidden md:block w-full h-[45%] cursor-pointer hover:scale-103"
        />
      </div>
      <div className="flex lg:w-[40%] xl:w-[60%] gap-4">
        <div className="w-full xl:w-[60%] h-full ">
          <div className="h-full p-2 bg-gray-100 rounded-2xl">
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761346054/Screenshot_2025-10-25_at_4.15.29_AM_dglhgh.png"
              alt="Deal"
              className="w-full h-full object-full rounded-2xl hover:scale-103 cursor-pointer"
              onClick={() => navigate('/Products')}
            />
          </div>
        </div>
        <div className="hidden xl:flex xl:w-[40%] bg-gray-100  rounded-4xl p-[1%] justify-between ">
          <div className="w-full rounded-3xl bg-gray-200">
            <img
              src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761345963/Screenshot_2025-10-25_at_4.15.43_AM_rw9t1s.png"
              alt="loading.."
              className="object-cover w-full h-full rounded-3xl hover:scale-103 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiwaliLaptop
