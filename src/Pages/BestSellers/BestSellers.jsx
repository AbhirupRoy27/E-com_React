import BsCard from './Components/BsCard'
import NoBooks from './Components/NoBooks'
import Page from '../../Components/PageNavigation/Page'
import FilterItem from './Components/FilterItem'
import { useBestSellers } from '../../Contexts/BooksContext'

function BestSellers() {
  const { loading, books, currentPage, setSearchParams } = useBestSellers()

  return (
    <>
      <div className="flex w-full">
        <div className="hidden min-w-[15%] min-h-full lg:flex flex-col px-2 py-3 items-center bg-slate-200 ">
          {['Category', 'Price'].map((c, i) => (
            <div className="w-full mb-3" key={i}>
              <FilterItem filter={c} />
            </div>
          ))}
        </div>
        <div className="w-full">
          {loading ? (
            <p className="flex justify-center items-center text-2xl min-h-[85vh] tracking-[1px]">
              Loading....
            </p>
          ) : (
            <div className="w-full min-w-[430px] sm:min-w-[1100px]min-h-max">
              {books.length > 0 ? (
                <>
                  <div className="flex justify-between sm:justify-start sm:p-0 px-0 md:px-10 lg-px-15 flex-wrap">
                    {books.map((p) => (
                      <BsCard key={p._id} books={p} />
                    ))}
                  </div>
                </>
              ) : (
                <NoBooks />
              )}
            </div>
          )}
        </div>
      </div>

      <Page setSearchParams={setSearchParams} onPage={currentPage} />
    </>
  )
}

export default BestSellers
