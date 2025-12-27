import React from 'react'

function WishlistPage() {
  return (
    <div className="h-screen min-w-[354px] sm:mt-5 ">
      <h1 className="capitalize text-4xl pb-3 tracking-wider font-light text-nowrap">
        My Wishlist
      </h1>
      <section>
        <div className="flex gap-2 ">
          {['', 'Product Name', 2, 3].map((item) => (
            <h3 key={item} className={`${item == '' && 'min-w-[100px]'}`}>
              {item}
            </h3>
          ))}
        </div>
      </section>
    </div>
  )
}

export default WishlistPage
