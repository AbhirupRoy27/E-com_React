const size = ['S', 'M', 'L', 'XL', '2XL']

function SizeChart() {
  return (
    <div className="flex gap-2 ">
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
  )
}

export default SizeChart
