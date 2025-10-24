import icons from '../../../Db/icons.json'

function MobileCards() {
  return (
    <div className="px-[1%] py-[2%] flex gap-2 overflow-x-auto no-scrollbar overflow-y-hidden sm:hidden min-w-[344px]">
      <div className=" flex justify-around pt-[3%] px-[2%] bg-gradient-to-br from-gray-400 to-slate-100 rounded-md card-tems w-max min-h-fit shadow-md shadow-black/20 ">
        <div className="flex flex-col justify-center items-center gap-[0.3rem] min-w-[100px] text-center">
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
              <p className="text-[18px] font-semibold mb-2 whitespace-nowrap">
                {p.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.3rem] min-w-[100px] text-center">
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

          {/* <img
            alt="a-pay"
            src={icons[1].arr2[1].link}
            className="bg-white border rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[18px] mb-[10px] font-semibold whitespace-nowrap">
            Recharge
          </p> */}
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-[0.5rem] w-[100px] text-center">
          <img
            alt="Sacn any QR"
            src={icons[1].arr2[0].link}
            className="bg-yellow-400 rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[16px] mb-[10px] font-semibold whitespace-nowrap">
            Sacn any QR
          </p>
          <img
            alt="Movie"
            src={icons[0].arr1[1].link}
            className="bg-yellow-400 rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[18px] mb-[10px] font-semibold whitespace-nowrap">
            Movie
          </p>
        </div> */}
      </div>
      <Audio />
      <Audio />
    </div>
  )
}

function Audio() {
  return (
    <div className="w-max h-full min-h-fit bg-orange-100 px-[1%] py-[1%] font-semibold rounded-md">
      <div className="w-[230px] h-[20%]">
        <h2 className="text-left px-[1%] text-lg">Keep Shopping for Audio</h2>
      </div>
      <div className="h-[80%] p-[1%]">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg"
          className="w-full h-full rounded-md shadow-md"
        />
      </div>
    </div>
  )
}

export default MobileCards
