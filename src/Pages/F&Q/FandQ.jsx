import React from 'react'
import Logout from '../Account/Logout/Logout'

function FandQ() {
  return (
    <>
      <Logout />
      <div className="relative flex text-white items-center md:gap-2 cursor-pointer md:mr-5 active:opacity-75 group">
        {/* Account button */}
        <div className="flex items-center gap-2">
          <img
            className="max-h-[30px]"
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760806250/account_c9nkzm.svg"
            alt="Account"
          />
          <p className="hidden md:flex">Account</p>
        </div>

        {/* Dropdown menu */}
        <div className="absolute hidden group-hover:block top-full right-0 bg-white rounded min-w-[200px] shadow-lg z-10">
          <p className="py-2 bg-slate-700 text-white pl-2 rounded-t">
            Account Details
          </p>
          <ol>
            {[1, 2, 3, 4].map((item, i) => (
              <li
                key={i}
                className="py-2 text-slate-700 pl-2 hover:bg-gray-100"
              >
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default FandQ
