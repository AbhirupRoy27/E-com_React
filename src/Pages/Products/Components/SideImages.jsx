import React from 'react'

function SideImages({ filterItem, setImg }) {
  return (
    <div className="w-full sm:w-[8%] h-[15%] sm:h-[7%] flex sm:flex-col items-center gap-2 mt-2  p-2 sm:p-0">
      <img
        src={filterItem[0].imageurl}
        alt="Loading...."
        className="w-full h-full bg-white sm:rounded-md object-contain text-[10px] hover:border"
        onClick={() => setImg(`${filterItem[0].imageurl}`)}
      />
      {filterItem[0].sideUrl.map((p) => (
        <img
          key={p.id}
          src={p.sideUrl1}
          alt="Loading...."
          className="w-full h-full bg-white sm:rounded-md object-contain text-[10px] hover:border"
          onClick={() => setImg(`${p.sideUrl1}`)}
        />
      ))}
    </div>
  )
}

export default SideImages
