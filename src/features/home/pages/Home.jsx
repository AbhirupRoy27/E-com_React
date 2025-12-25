import { useState } from 'react'
import slides from '../mock/slides.json'
import HeroNavigation from '../Components/HeroNavigation'
import handleNavigateTo from '../utils/handleNavigateTo'
import { useNavigate } from 'react-router-dom'
import HomeProducts from '../Components/HomeProducts'
import BooksHomeCard from '../Components/BooksHomeCard'
import DesktopFlex from '../Components/DesktopFlex'

function Home() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

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
    <div className="sm:bg-gray-950">
      <HeroNavigation />
      <div className="overflow-hidden w-full min-w-[354px] ">
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
              className={`h-[25vh] sm:h-[40vh] w-full flex-shrink-0 rounded-xl p-1`}
              onClick={() => handleNavigateTo(navigate, `/${slide.link}`)}
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
              className={`bg-white rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? 'w-3 h-3' : 'w-2 h-2 opacity-70'
              }`}
            ></span>
          ))}
        </div>
      </div>
      <HomeProducts />

      <BooksHomeCard />
      {window.innerWidth >= 450 && <DesktopFlex />}
    </div>
  )
}

export default Home
