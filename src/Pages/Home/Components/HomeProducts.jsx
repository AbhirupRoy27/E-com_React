function HomeProducts() {
  return (
    <div className="bg-gray-950 px-2 xl:px-30 py-4">
      <h1 className="uppercase text-gray-50 text-center font-mono tracking-wider py-4 text-2xl">
        Trending
      </h1>
      <div className="flex overflow-scroll gap-2 no-scrollbar mt-2 shrink-0">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p) => (
          <div className="text-white" key={p}>
            <img
              src="#"
              className="bg-white/10 min-w-[250px] h-[300px] border-0 cursor-pointer shrink-0"
              alt="product name"
            />
            <div className="mt-2 p-1">
              <span></span>
              <h3 className="capitalize hover:underline underline-offset-2 mb-2">
                product name
              </h3>
              <p className="text-[12px] text-gray-400 capitalize mb-2">
                Product DescriptionProduct DescriptionProduct DescriptionProduct
                DescriptionProduct Description
              </p>
              <button className="text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2 hover:bg-amber-50/10 uppercase text-sm tracking-wide cursor-pointer">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeProducts
