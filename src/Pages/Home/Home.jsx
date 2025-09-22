import RecomentationCard from './Cards/RecomentationCard'
import TopDeals from './Components/TopDeals'

const RCards = () => {
  return (
    <div className="hidden sm:flex gap-[1rem] flex-wrap 2xl:justify-center">
      <RecomentationCard text={'View your browsing history'} />
      <RecomentationCard text={'See more'} />
      <RecomentationCard text={'Explore All'} />
      <RecomentationCard text={'Keep Shopping'} />
    </div>
  )
}

const MobileCards = () => {
  return (
    <div className="p-[1%] flex gap-[0.5rem] overflow-x-auto no-scrollbar overflow-y-hidden sm:hidden">
      <div className=" flex justify-around p-[2%] bg-gray-200 rounded-md card-tems min-w-[250px] min-h-fit">
        <div className="flex flex-col justify-center items-center gap-[0.3rem] min-w-[100px] text-center">
          <img
            alt="a-pay"
            className="bg-black rounded-full w-[50px] h-[50px]"
          />
          <p className="text-[18px] mb-[20px] font-semibold whitespace-nowrap">
            A-pay
          </p>
          <img
            alt="a-pay"
            className="bg-yellow-400 rounded-full w-[50px] h-[50px]"
          />
          <p className="text-[18px] mb-[20px] font-semibold whitespace-nowrap">
            Send Money
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[0.5rem] w-[100px] text-center">
          <img
            alt="a-pay"
            className="bg-yellow-400 rounded-full w-[50px] h-[50px]"
          />
          <p className="text-[18px] mb-[20px] font-semibold whitespace-nowrap">
            Sacn any QR
          </p>
          <img
            alt="a-pay"
            className="bg-yellow-400 rounded-full w-[50px] h-[50px]"
          />
          <p className="text-[18px] mb-[20px] font-semibold whitespace-nowrap">
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
    <div className="bg-blue-50 min-h-[30%] mt-[1%] flex justify-start items-start p-[2%] sm:hidden ">
      <p className="text-2xl">Video Comes Here!</p>
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
      <div className="sm:pl-[4%] sm:pr-[4%] mt-3">
        <RCards />
        <TopDeals />
      </div>
    </>
  )
}
