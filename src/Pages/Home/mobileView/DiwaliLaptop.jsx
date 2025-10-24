import React from 'react'

function DiwaliLaptop({ navigate }) {
  return (
    <div className="flex px-[2%] sm:px-[4%] py-2 gap-2 flex-col md:flex-row md:max-h-[240px] min-w-[344px]">
      <div className="lg:w-[60%] xl:w-[40%] flex flex-col justify-around">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760706928/Screenshot_2025-10-17_at_6.43.40_PM_lvemvk.png"
          alt="Deal"
          className="w-full h-[45%]"
        />
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760709620/Diwali01_rcpf2s.png"
          alt="Deal"
          className="hidden md:block w-full h-[45%]"
        />
      </div>
      <div className="flex lg:w-[40%] xl:w-[60%] gap-2">
        <div className="w-full xl:w-[60%] h-full">
          <img
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760707777/Screenshot_2025-10-17_at_6.56.37_PM_lheter.png"
            alt="Deal"
            className="w-full h-full object-full "
            onClick={() => navigate('/Products')}
          />
        </div>
        <div className="hidden xl:flex xl:w-[40%] bg-gray-100 lg:my-2 rounded-4xl p-[2%] justify-between">
          {[1, 2].map((p, i) => (
            <div className="w-[48%] rounded-3xl bg-gray-200" key={i}>
              <p>something</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiwaliLaptop
