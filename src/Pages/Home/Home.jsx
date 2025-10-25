import { useNavigate } from 'react-router-dom'
import BooksHomeCard from './mobileView/BooksHomeCard'
import DiwaliLaptop from './mobileView/DiwaliLaptop'
import MobileCards from './mobileView/MobileCards'
import { useState } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      color: 'bg-yellow-200',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760707777/Screenshot_2025-10-17_at_6.56.37_PM_lheter.png',
    },
    {
      color: 'bg-red-200',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760782015/Screenshot_2025-10-18_at_3.35.26_PM_sxvkva.png',
    },
    {
      color: 'bg-green-200',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760429549/Screenshot_2025-10-14_at_1.41.48_PM_gtjs83.png',
    },
    {
      color: 'bg-blue-200',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760711226/DiwaliBanner_fn5acq.png',
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) nextSlide()
    if (touchStart - touchEnd < -75) prevSlide()
  }

  return (
    <>
      <div className="overflow-hidden w-full min-w-[344px]">
        <div
          className="flex transition-transform duration-500 mt-2 sm:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-[25vh] sm:h-[40vh] w-full flex-shrink-0 rounded-xl ${slide.color}`}
            >
              <img
                src={slide.url}
                alt="loading.."
                className="object-full w-full h-full rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-3 w-full justify-center my-2 items-center sm:hidden">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`bg-black rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? 'w-3 h-3' : 'w-2 h-2 opacity-70'
              }`}
            ></span>
          ))}
        </div>
        <div className="hidden sm:flex w-full h-[25vh]">
          <img
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760782015/Screenshot_2025-10-18_at_3.35.26_PM_sxvkva.png"
            className="w-full object-full shadow-lg shadow-black/20"
          />
        </div>
      </div>
      <MobileCards /> {/* For Mobile */}
      <>
        <DiwaliLaptop navigate={navigate} />
        <BooksHomeCard />
      </>
    </>
  )
}
