import { useNavigate } from 'react-router-dom'
import handleNavigateTo from '../../Utils/navigate/navigateTo'
import BooksHomeCard from './mobileView/BooksHomeCard'
import MobileCards from './mobileView/MobileCards'
import { useState } from 'react'
import DesktopFlex from './Components/DesktopFlex'
import HomeProducts from './Components/HomeProducts'
import HeroBanner from './Components/HeroBanner'
import HeroNavigation from './Components/HeroNavigation'

export default function Home() {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = [
    {
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760707777/Screenshot_2025-10-17_at_6.56.37_PM_lheter.png',
      link: 'products',
    },
    {
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761346054/Screenshot_2025-10-25_at_4.15.29_AM_dglhgh.png',
      link: 'top deals',
    },
    {
      url: 'https://m.media-amazon.com/images/S/aplus-media/vc/9d4a5cc4-899e-4683-9960-91c5a6130368.__CR19,0,1213,375_PT0_SX970_V1___.jpg',
      link: 'best sellers',
    },
    {
      url: 'https://res.cloudinary.com/dfuhnqbap/image/upload/v1765263857/000000001_tn2s0h.png',
      link: 'gift cards',
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
    <div className="sm:bg-gray-950">
      <HeroNavigation />
      <div className="overflow-hidden w-full min-w-[354px] xl:px-30">
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
              className={`bg-black rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? 'w-3 h-3' : 'w-2 h-2 opacity-70'
              }`}
            ></span>
          ))}
        </div>
        <div className="hidden m-2 rounded-xl sm:flex flex-col h-[65vh] bg-white/10  bg-center bg-no-repeat bg-cover min-w-[750px] ">
          <HeroBanner />
        </div>
      </div>
      {/* <MobileCards /> For Mobile */}
      <HomeProducts />

      <BooksHomeCard />
      {window.innerWidth >= 450 && <DesktopFlex />}
    </div>
  )
}
