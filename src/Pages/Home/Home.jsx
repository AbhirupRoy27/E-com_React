import TopDeals from './Components/TopDeals'
import icons from '../../Db/icons.json'

const MobileCards = () => {
  return (
    <div className="p-[1%] flex gap-2 overflow-x-auto no-scrollbar overflow-y-hidden sm:hidden ">
      <div className=" flex justify-around p-[2%] bg-gradient-to-br from-gray-400 to-slate-100 rounded-md card-tems min-w-[250px] min-h-fit shadow-md shadow-black/20 ">
        <div className="flex flex-col justify-center items-center gap-[0.3rem] min-w-[100px] text-center">
          <img
            alt="Flights"
            src={icons[3].link}
            className="bg-white border rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[18px] mb-[10px] font-semibold whitespace-nowrap">
            Flights
          </p>
          <img
            alt="Movie"
            src={icons[2].link}
            className="bg-yellow-400 rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[18px] mb-[10px] font-semibold whitespace-nowrap">
            Movie
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-[100px] text-center">
          <img
            alt="Sacn any QR"
            src={icons[1].link}
            className="bg-yellow-400 rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[16px] mb-[10px] font-semibold whitespace-nowrap">
            Sacn any QR
          </p>
          <img
            alt="a-pay"
            src={icons[0].link}
            className="bg-white rounded-full w-[50px] h-[50px] p-1 shadow-md shadow-black/40 "
          />
          <p className="text-[18px] mb-[10px] font-semibold whitespace-nowrap">
            Recharge
          </p>
        </div>
      </div>
      <div className="min-w-[230px] min-h-fit bg-orange-100 p-[2%] font-semibold rounded-md">
        <h2 className="text-left text-lg mb-[3px]">Keep Shopping for Audio</h2>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg"
          className="w-full h-[86%] rounded-md"
        />
      </div>
      <div className="min-w-[230px] min-h-fit bg-orange-100 p-[2%] font-semibold rounded-md">
        <h2 className="text-left text-lg mb-[3px]">Keep Shopping for Audio</h2>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg"
          className="w-full h-[86%] rounded-md"
        />
      </div>
    </div>
  )
}

const VideoCard = () => {
  return (
    <div className="bg-gradient-to-tr from-red-300 to-red-900 min-h-[30%] mt-2 flex justify-center items-center p-2 sm:hidden ">
      <p className="text-3xl bg-gradient-to-tr from-zinc-900 to-stone-900 bg-clip-text text-transparent font-bold shadow-md shadow-black/20 p-2">
        Video Comes Here!
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className="object-fill sm:h-[30vh] sm:overflow-hidden">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN/Prime/GIF/1/Jupiter25_H1_Prime_PC_2x_1._CB801695360_.jpg" />
      </div>
      <MobileCards /> {/* For Mobile */}
      <VideoCard /> {/* For Mobile */}
      <div className="sm:pl-[4%] sm:pr-[4%] mt-3 mb-3">
        <TopDeals />
      </div>
    </>
  )
}
