function TopDealsText() {
  return (
    <div className="w-hull flex flex-col w-full xl:flex-row p-2">
      <div className="min-w-3/4 min-h-max text-3xl sm:text-5xl lg:text-7xl font-bold">
        <p className="">DEALS ON HIGH-QUALITY</p>
        <p>MATERIALS AND </p>
        <p>CUTTING-EDGE DESIGN</p>
      </div>
      <div className="min-w-1/4 flex flex-col justify-end p-2">
        <div
          className="flex flex-col items-end justify-end xl:justify-start xl:h-max text-end 
        font-semibold text-sm md:text-lg tracking-wider "
        >
          <p>WE'RE MORE THAN</p>
          <p>JUST A STORE, WE'RE A</p>
          <p>TEAM WORKING TOGETHER</p>
          <p>TO BRING THE BEST OF QUALITY.</p>
        </div>
        <div className="flex justify-end text-end text-4xl gap-1">
          <p>↖</p>
          <p>↘</p>
        </div>
      </div>
    </div>
  )
}

export default TopDealsText
