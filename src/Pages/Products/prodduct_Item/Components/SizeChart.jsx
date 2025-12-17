function SizeChart({ product }) {
  const size = product.size
  return (
    <div className="flex gap-2 flex-col">
      <p className="text-lg">Select Size</p>
      <div className="flex gap-2">
        {size.length &&
          size.map((p, i) => (
            <p
              className="min-w-[50px] px-3 py-1 rounded active:shadow-md shadow-white/30 border border-white/20 focus:border-white/80 text-center text-xl"
              tabIndex="0"
              key={i}
            >
              {p}
            </p>
          ))}
      </div>
    </div>
  )
}

export default SizeChart
