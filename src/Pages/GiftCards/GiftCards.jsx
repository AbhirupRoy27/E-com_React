import FilterItem from '../BestSellers/Components/FilterItem'
import FourBox from './Componets/FourBox'
import Logo from './Componets/Logo'

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
          <div className="flex flex-col overflow-hidden">
            <Logo />
            <BigCard />
          </div>
        </div>
      </div>
    </>
  )
}

const BigCard = () => {
  return (
    <div className="flex-1 max-h-max p-1 sm:p-2 flex justify-center flex-wrap sm:flex-nowrap mt-4 gap-[1%] sm:gap-[0.5%] overflow-scroll no-scrollbar">
      {[1, 2, 3, 4].map((p, i) => (
        <div
          key={i}
          className="bg-gray-100 flex flex-col border text-sm font-semibold mb-2 rounded-3xl max-w-[49%] min-h-[100px] max-h-[120px] sm:min-h-[15vh] sm:max-h-[25vh]"
        >
          <FourBox text={p} />
        </div>
      ))}
    </div>
  )
}

export default GiftCards
