import FilterItem from '../BestSellers/Components/FilterItem'
import Logo from './Componets/Logo'
import BigCard from './Componets/FourBox'

function GiftCards() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center max-h-[15vh] md:max-h-[20vh] overflow-hidden">
          <img
            src="https://m.media-amazon.com/images/G/31/NAB/PC-Header_1500x300_Jup25_end20.jpg"
            className="min-w-[70vw] max-w-[90vw] max-h-[20vh] object-center object-contain "
          />
        </div>
        <div className="flex max-w-[100vw]">
          <div className="hidden min-w-[15%] h-[70vh] lg:flex flex-col px-2 py-3 items-center border-r-2 border-gray-300 mr-3">
            {['Category', 'Price'].map((c, i) => (
              <div className="w-[97%] mb-3" key={i}>
                <FilterItem filter={c} />
              </div>
            ))}
          </div>
          <div className="flex flex-col overflow-hidden w-full">
            <Logo />
            <BigCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default GiftCards
