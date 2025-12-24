import Logo from './Componets/Logo'
import BigCard from './Componets/FourBox'

function GiftCards() {
  return (
    <div className="min-w-[354px] min-h-screen">
      <div className="flex justify-center items-center max-h-[15vh] md:max-h-[20vh] overflow-hidden">
        <img
          src="https://m.media-amazon.com/images/G/31/NAB/PC-Header_1500x300_Jup25_end20.jpg"
          className="min-w-[70vw] max-w-[90vw] max-h-[20vh] object-center object-contain "
        />
      </div>
      <div className="flex overflow-hidden">
        <div className="flex flex-col min-w-[350px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px] sm:w-full">
          <Logo />
          <BigCard />
        </div>
      </div>
    </div>
  )
}

export default GiftCards
