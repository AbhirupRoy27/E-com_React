import cat from '../mock/category.json'

function ScrollBar() {
  return (
    <div className="flex gap-4 overflow-scroll no-scrollbar py-4 px-2 bg-amber-50/10 mt-10">
      {cat.map((c) => (
        <div key={c.id} className="flex flex-col items-center gap-2 ">
          <img
            alt={c.category}
            src={c.coverimg}
            className="min-w-[100px] min-h-[100px] bg-amber-50 rounded-full object-cover overflow-hidden hover:scale-105 transition-all duration-200"
            width={100}
          />
          <span className="text-sm text-center font-mono tracking-wider">
            {c.category}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ScrollBar
