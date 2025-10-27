import React from 'react'

function MobileButtons({
  cart,
  handleAddToCart,
  handleGoToCart,
  navigate,
  filterItem,
  setCart,
  setTotal,
  total,
}) {
  return (
    <div className="flex gap-2 w-full p-2 h-[6%] sm:hidden bottom-0">
      {cart && cart.includes(filterItem[0], 0) ? (
        <button
          onClick={() => handleGoToCart(navigate)}
          className="border border-gray-400  py-2 px-1 rounded w-[49%] active:bg-gray-400"
        >
          Go to cart
        </button>
      ) : (
        <button
          onClick={() =>
            handleAddToCart(filterItem[0], cart, setCart, setTotal, total)
          }
          className="border border-yellow-400 py-2 px-1 rounded w-[49%]"
        >
          Add to cart
        </button>
      )}
      <button className="bg-yellow-400 py-2 px-1 rounded w-[49%]">
        Buy Now
      </button>
    </div>
  )
}

export default MobileButtons
