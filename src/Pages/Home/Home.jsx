import BooksHomeCard from './mobileView/BooksHomeCard'
import DiwaliLaptop from './mobileView/DiwaliLaptop'
import MobileCards from './mobileView/MobileCards'

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
      <div className="h-[200px] sm:h-max sm:overflow-hidden">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760429549/Screenshot_2025-10-14_at_1.41.48_PM_gtjs83.png"
          className="hidden sm:block object-full h-full"
        />
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760711226/DiwaliBanner_fn5acq.png"
          className="sm:hidden object-full w-full h-full shadow-md shadow-black/10"
        />
      </div>
      <MobileCards /> {/* For Mobile */}
      {/* <VideoCard /> For Mobile */}
      <>
        <DiwaliLaptop />
        <BooksHomeCard />
      </>
    </>
  )
}
