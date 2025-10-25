import { useNavigate } from 'react-router-dom'
import BooksHomeCard from './mobileView/BooksHomeCard'
import DiwaliLaptop from './mobileView/DiwaliLaptop'
import MobileCards from './mobileView/MobileCards'
import { useState } from 'react'
import DesktopFlex from './Components/DesktopFlex'

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
      <div className="overflow-hidden w-full min-w-[100vw] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
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
        <div className="hidden m-2 rounded-xl sm:flex flex-col h-[65vh] bg-[url(https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761401435/Gemini_Generated_Image_g6eun0g6eun0g6eu_lff80c.png)] bg-center bg-no-repeat bg-cover min-w-[750px] ">
          <div className="h-max w-full flex justify-between items-center">
            <h1 className="ml-4 lg:ml-8 text-yellow-100 text-shadow-lg text-3xl font-bold tracking-widest ">
              NextGen
            </h1>

            <ol
              className="flex lg:gap-4 items-center px-5 py-4 
              text-yellow-100 tracking-widest text-2xl text-shadow-lg lg:text-3xl font-semibold 
              rounded-md"
            >
              <li className="font-bold min-w-[120px] flex justify-center items-center hover:text-yellow-100/90 cursor-pointer">
                Quick
              </li>
              <li className="font-bold min-w-[120px] flex justify-center items-center hover:text-yellow-100/90 cursor-pointer">
                Shoes
              </li>
              <li className="font-bold min-w-[120px] flex justify-center items-center hover:text-yellow-100/90 cursor-pointer">
                Books
              </li>
              {/* <li className="font-bold min-w-[140px] flex justify-center items-center hover:text-yellow-100/90 cursor-pointer">
                Gift-Cards
              </li> */}
            </ol>
          </div>
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
                onClick={() => navigate('/Products')}
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
      <>{/* <DiwaliLaptop navigate={navigate} /> */}</>
      <DesktopFlex />
      <BooksHomeCard />
    </>
  )
}
