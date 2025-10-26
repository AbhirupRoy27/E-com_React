import TopDeals from './TopDeals'

function TopDeal() {
  return (
    <>
      <div className="sm:px-[3%] min-w-[100vw] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        <img
          src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760939268/Screenshot_2025-10-20_at_11.15.20_AM_oyn8f0.png"
          className="mb-2"
        />
      </div>
      <DeskTop />
      <TopDeals />
    </>
  )
}

const DeskTop = () => {
  const top = [
    {
      id: 1,
      name: 'Mobile',
      url: 'https://m.media-amazon.com/images/I/61IOa9IrlaL._SL1500_.jpg',
    },
    {
      id: 2,
      name: `Men's Fashon`,
      url: 'https://m.media-amazon.com/images/I/61Oqvx88hhL._SY879_.jpg',
    },
    {
      id: 3,
      name: 'Female Fashon',
      url: 'https://rukminim2.flixcart.com/image/300/300/xif0q/sari/k/i/b/free-2tone-1-0-lorofy-unstitched-original-imahcr8gfchgtvpv.jpeg?q=90',
    },
    {
      id: 4,
      name: `Kid's Fashon`,
      url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/p/p/z/12-18-months-pp-elpixie-fashion-original-imah9pde9w6ghjge.jpeg?q=70',
    },
    {
      id: 5,
      name: 'Electronics',
      url: 'https://rukminim1.flixcart.com/fk-p-flap/128/128/image/af646c36d74c4be9.png?q=100',
    },
  ]
  return (
    <div className="flex w-full h-full lg:justify-center overflow-scroll no-scrollbar p-2 sm:p-4 md:px-6 lg:px-10 gap-2 mb-2">
      {top.map((p, i) => (
        <div className="min-w-[150px] h-[180px] rounded-lg border" key={i}>
          <div
            className={`bg-[url(${p.url})] bg-contain bg-center bg-no-repeat h-[80%] rounded-tl-lg rounded-tr-lg`}
          ></div>
          <div className="bg-blue-300 h-[20%] rounded-bl-lg rounded-br-lg">
            <p className="text-center pt-1 tracking-wide font-semibold">
              {p.name}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="bg-[url(https://rukminim2.flixcart.com/image/300/300/xif0q/sari/k/i/b/free-2tone-1-0-lorofy-unstitched-original-imahcr8gfchgtvpv.jpeg?q=90)]"></div> */}
    </div>
  )
}

export default TopDeal
