function ProductDescription({ product }) {
  return (
    <div className="pt-20 px-2 xl:px-30 pb-10">
      <h1 className="text-3xl sm:text-4xl border-b-2 border-white/10 pb-4 font-bold tracking-wider text-center">
        About The Product
      </h1>
      {product.coverimg[0] && (
        <section className="flex flex-col md:flex-row py-4 gap-3">
          <div className="w-full sm:w-max lg:p-10 overflow-hidden lg:min-w-[450px]">
            <img
              src={product.coverimg[0].link}
              alt="Product_Image"
              className="h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-light tracking-wider mt-3">
              <pre>| Product Description</pre>
            </h2>
            <div className="px-5 sm:pl-10 pt-3 sm:pt-6 text-gray-400">
              <p>{product.description}</p>
            </div>
          </div>
        </section>
      )}
      {product.coverimg[1] && (
        <section className="flex flex-col md:flex-row-reverse py-4 gap-3">
          <div className="w-full sm:w-max lg:p-10 overflow-hidden lg:min-w-[450px]">
            <img
              src={product.coverimg[1].link}
              alt="Product_Image"
              className="h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-light tracking-wider mt-3">
              <pre>| Best In Quality</pre>
            </h2>
            <div className="px-5 sm:pl-10 pt-3 sm:pt-6 text-gray-400">
              <p>{product.description}</p>
            </div>
          </div>
        </section>
      )}
      {product.coverimg[2] && (
        <section className="flex flex-col md:flex-row py-4 gap-3">
          <div className="w-full sm:w-max lg:p-10 overflow-hidden lg:min-w-[450px]">
            <img
              src={product.coverimg[2].link}
              alt="Product_Image"
              className="h-[500px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-light tracking-wider mt-3">
              <pre>| Product Description</pre>
            </h2>
            <div className="px-5 sm:pl-10 pt-3 sm:pt-6 text-gray-400">
              <p>{product.description}</p>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductDescription
