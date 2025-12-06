import icons from '../../../Db/icons.json'

function MobileCards() {
  return (
    <div className="px-[2%] py-[3%] flex gap-2 overflow-x-auto no-scrollbar overflow-y-hidden sm:hidden min-w-[354px] bg-gray-950 ">
      <div className=" flex justify-around pt-[3%] px-[2%] bg-gradient-to-br from-gray-400 to-slate-100 rounded-md w-max min-h-fit border-b-2">
        <div className="flex flex-col justify-center items-center min-w-[110px] text-center">
          {icons[0].arr.map((p, i) => (
            <div
              key={i}
              className="w-full h-full flex flex-col justify-between items-center"
            >
              <img
                alt={p.alt}
                src={p.link}
                className="bg-white border rounded-full w-[60%] h-[60%] p-1 shadow-md shadow-black/40"
              />
              <p className="text-[18px] mb-2 whitespace-nowrap">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.3rem] min-w-[110px] text-center">
          {icons[1].arr.map((p, i) => (
            <div
              key={i}
              className="w-full h-full flex flex-col justify-between items-center"
            >
              <img
                alt={p.alt}
                src={p.link}
                className="bg-yellow-400 border rounded-full w-[60%] h-[60%] p-1 shadow-md shadow-black/40"
              />
              <p className="text-[18px] font-semibold mb-2 whitespace-nowrap">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Audio
        url="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg"
        text="Audio"
      />
      <Audio
        url="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758907941/Gemini_Generated_Image_zieoxbzieoxbzieo_hwsot5.png"
        text="Shoes"
      />
    </div>
  )
}

function Audio({ url, text }) {
  return (
    <div
      className={`min-w-[220px] min-h-full max-h-[230px] bg-white p-[2%] rounded-md`}
    >
      <div className="w-full h-max">
        <h2 className="text-left px-[1%] font-semibold text-md mb-2">
          Keep Shopping for {text}
        </h2>
      </div>
      <div className="h-[85%] overflow-hidden">
        <img
          src={url}
          className="w-full h-full bg-white rounded-md object-full"
        />
      </div>
    </div>
  )
}

export default MobileCards
