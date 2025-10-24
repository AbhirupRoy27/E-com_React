import { useNavigate } from 'react-router-dom'
import BooksHomeCard from './mobileView/BooksHomeCard'
import DiwaliLaptop from './mobileView/DiwaliLaptop'
import MobileCards from './mobileView/MobileCards'
import { useState } from 'react'

export default function Home() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    { color: 'bg-yellow-200' },
    { color: 'bg-red-200' },
    { color: 'bg-green-200' },
    { color: 'bg-blue-200' },
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
      <div className="sm:overflow-hidden min-w-[344px]">
        <div
          className="flex transition-transform duration-500 "
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
              className={`h-[200px] min-w-[397px] sm:min-w-[97vw] lg:min-w-[98vw] xl:min-w-[99vw] m-2 rounded-xl ${slide.color}`}
            ></div>
          ))}
        </div>
        {/* <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded"
        >
          ›
        </button> */}
        <div className="flex gap-3 w-full justify-center my-2 items-center">
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
      </div>
      <MobileCards /> {/* For Mobile */}
      <>
        <DiwaliLaptop navigate={navigate} />
        <BooksHomeCard />
      </>
    </>
  )
}
