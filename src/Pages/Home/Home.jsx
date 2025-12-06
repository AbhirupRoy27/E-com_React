import { useNavigate } from 'react-router-dom'
import handleNavigateTo from '../../Utils/navigate/navigateTo'
import BooksHomeCard from './mobileView/BooksHomeCard'
import MobileCards from './mobileView/MobileCards'
import { useState } from 'react'
import DesktopFlex from './Components/DesktopFlex'
import HomeProducts from './Components/HomeProducts'

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
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760429549/Screenshot_2025-10-14_at_1.41.48_PM_gtjs83.png',
      link: 'best sellers',
    },
    {
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760711226/DiwaliBanner_fn5acq.png',
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
    <div className="bg-gray-950">
      <div className="overflow-hidden w-full min-w-[354px] xl:px-30 bg-gray-950">
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
        <div className="hidden m-2 rounded-xl sm:flex flex-col h-[65vh] bg-[url(https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761401435/Gemini_Generated_Image_g6eun0g6eun0g6eu_lff80c.png)] bg-center bg-no-repeat bg-cover min-w-[750px] ">
          <div className="flex flex-row-reverse justify-between items-end h-full">
            <div className="p-6 pb-20 text-end m-2">
              <p className="text-4xl sm:text-5xl font-bold tracking-wide text-yellow-100 text-shadow-xl mb-2">
                Explore the best products
              </p>
              <p className="text-xl tracking-wide text-gray-300 text-shadow-lg text-shadow-xl mb-2">
                Explore the best Price on the best products, Explore the best
                Price on the best products Explore the best Price on the best
                products Explore the best Price on the best products
              </p>
              <button
                className="bg-white py-3 px-4 rounded-full"
                onClick={() => handleNavigateTo(navigate, '/products')}
              >
                Shop Now →
              </button>
            </div>
            <div className="bg-white/30 w-[200px] h-[200px] m-10 flex justify-center items-center rounded-xl">
              <div className="bg-black/50 w-[196px] h-[196px] rounded-xl backdrop-blur-sm ">
                <div className="text-sm text-yellow-100 p-2 flex flex-col justify-between h-full ">
                  <div className="flex flex-col gap-1">
                    <p>Best Price,</p>
                    <p>Best Quality,</p>
                    <p>Best Experience,</p>
                  </div>
                  <div className="text-6xl text-yellow-100 p-2 italic">96%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileCards /> {/* For Mobile */}
      <HomeProducts />
      <DesktopFlex />
      <BooksHomeCard />
    </div>
  )
}
