import { ChevronRight, Heart } from 'lucide-react'
import { useState } from 'react'

function GiftCardsPage() {
  const [openSection, setOpenSection] = useState('')

  const sectionHandler = (value) => {
    if (value == 'Design' && openSection == 'Design') return setOpenSection('')
    if (value == 'common-Cards' && openSection == 'common-Cards')
      return setOpenSection('')
    setOpenSection(value)
  }
  return (
    <>
      <div className="min-w-[354px] min-h-screen  pt-5 px-3">
        <h2 className="text-5xl font-extralight tracking-wider">
          NextGen GiftCard' s
        </h2>
        <section id="Design">
          <h2
            className="text-xl flex justify-between items-center font-extralight tracking-wider mt-10 bg-amber-50/10 py-3 px-3 sm:px-5"
            onClick={() => sectionHandler('Design')}
          >
            Choose Your GiftCard Design.
            <ChevronRight />
          </h2>
          <div
            className={`${
              openSection == 'Design' ? 'grid' : 'hidden'
            } grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                className="min-w-[300px] h-fit border border-amber-50/20 rounded-3xl p-3"
                key={item}
              >
                <div className=" rounded-2xl overflow-hidden">
                  <img
                    src="https://m.media-amazon.com/images/I/51h9EHccKrL._AC_UL640_QL65_.jpg"
                    alt={`gift card ${item}`}
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pt-4">
                  <button>
                    <Heart color="pink" />
                  </button>
                  <button className="flex gap-1">
                    Select
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="common-Cards">
          <h2
            className="text-xl flex justify-between items-center  font-extralight tracking-wider mt-3 bg-amber-50/10 py-3 px-3 sm:px-5"
            onClick={() => sectionHandler('common-Cards')}
          >
            Popular GiftCards
            <ChevronRight />
          </h2>
          <div
            className={`${
              openSection == 'common-Cards' ? 'grid' : 'hidden'
            } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4`}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div
                className="min-w-[300px] h-fit border border-amber-50/20 rounded-3xl p-3"
                key={item}
              >
                <div className=" rounded-2xl overflow-hidden">
                  <img
                    src="https://m.media-amazon.com/images/I/51h9EHccKrL._AC_UL640_QL65_.jpg"
                    alt={`gift card ${item}`}
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between px-2 pt-4">
                  <button>
                    <Heart color="pink" />
                  </button>
                  <button className="flex gap-1">
                    Select
                    <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default GiftCardsPage
