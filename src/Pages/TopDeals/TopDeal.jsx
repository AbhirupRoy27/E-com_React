import TopDeals from '../Home/Components/TopDeals'

function TopDeal() {
  return (
    <>
      <div>
        <p className="text-3xl text-center pt-4 font-extrabold mb-5">
          Top Deals
        </p>
        <div className="w-full h-full flex gap-[2%] sm:gap-[1%] flex-col sm:flex-row">
          <div className="p-[1%] w-[99%] sm:w-[33%] hover:scale-101">
            <div className="bg-[url('/mobile.png')] opacity:90 sm:opacity-75 hover:opacity-100 bg-cover bg-center h-[250px] rounded-md flex justify-center items-center">
              <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-5xl font-bold">
                Mobile
              </p>
            </div>
          </div>
          <div className="p-[1%] w-[99%] sm:w-[33%] hover:scale-101 ">
            <div className="bg-[url('/fashon.png')] opacity:90 sm:opacity-75 hover:opacity-100 bg-cover bg-center h-[250px] rounded-md flex justify-center items-center hover:border">
              <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-5xl font-bold">
                Cloths
              </p>
            </div>
          </div>
          <div className="p-[1%] w-[99%] sm:w-[33%] hover:scale-101">
            <div className="bg-[url('https://dtimes.ng/wp-content/uploads/2025/01/Web-21.png')] opacity:90 sm:opacity-75 hover:opacity-100 bg-cover bg-center h-[250px] rounded-md flex justify-center items-center">
              <p className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent text-5xl font-bold">
                Electronics
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex gap-2 "></div>
      </div>
      <TopDeals />
    </>
  )
}

export default TopDeal
