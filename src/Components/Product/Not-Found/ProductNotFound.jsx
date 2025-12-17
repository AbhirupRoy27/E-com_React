function ProductNotFound() {
  return (
    <div className="flex flex-col gap-3 w-screen h-[80vh] justify-center items-center text-2xl">
      <img
        src="https://res.cloudinary.com/dfuhnqbap/image/upload/v1765612425/box_kynrxh.png"
        alt="No Product"
      />
      <b className="text-4xl text-gray-600">Sorry! No Such Product</b>
    </div>
  )
}

export default ProductNotFound
