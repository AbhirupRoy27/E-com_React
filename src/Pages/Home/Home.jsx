import { useNavigate } from 'react-router-dom'
import BooksHomeCard from './mobileView/BooksHomeCard'
import DiwaliLaptop from './mobileView/DiwaliLaptop'
import MobileCards from './mobileView/MobileCards'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-[200px] sm:h-max sm:overflow-hidden min-w-[344px]">
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
      <>
        <DiwaliLaptop navigate={navigate} />
        <BooksHomeCard />
      </>
    </>
  )
}
