import TopDeals from './TopDeals'

function TopDeal() {
  return (
    <>
      <div className="sm:px-[3%] min-w-[430px] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760939268/Screenshot_2025-10-20_at_11.15.20_AM_oyn8f0.png"
          className="mb-2"
        />
      </div>
      <div className="">
        <DeskTop />
      </div>
      <TopDeals />
    </>
  )
}

const DeskTop = () => {
  const top = [
    {
      id: 1,
      name: 'Mobile',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760936971/mobile_ecsr14.png',
    },
    {
      id: 2,
      name: 'Cloths',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760936971/fashon_fs4w0n.png',
    },
    {
      id: 3,
      name: 'Electronics',
      url: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760937376/Web-21_1_2_1_pi3iod.png',
    },
  ]
  return (
    <div className="hidden sm:flex w-full h-full overflow-scroll no-scrollbar">
      {top.map((item) => (
        <div
          className="px-[1%] py-2 w-[99%] sm:min-w-[400px] hover:scale-101"
          key={item.id}
        >
          <div
            className={`opacity:90 sm:opacity-75 hover:opacity-100 bg-cover bg-center h-[250px] object-conatin rounded-md flex justify-center items-center hover:border`}
            style={{ backgroundImage: `url(${item.url})` }}
          >
            <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-5xl font-bold">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopDeal
