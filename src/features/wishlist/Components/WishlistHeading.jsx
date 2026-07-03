import React from 'react'

function WishlistHeading() {
  return (
    <div
      className="grid grid-cols-[80px_120px_300px_200px_160px_200px] 
    lg:grid-cols-[80px_160px_500px_250px_200px_250px] border-y-1 
    border-white/20 w-full text-center py-5 gap-3"
    >
      <button></button>
      <div></div>
      <h3>Product Details</h3>
      <h3>Unit Price</h3>
      <h3>Stock Status</h3>
      <h3>Actions</h3>
    </div>
  )
}

export default WishlistHeading
