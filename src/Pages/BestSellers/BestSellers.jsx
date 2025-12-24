import Page from '../../Components/PageNavigation/Page'
import { useBestSellers } from '../../Contexts/BooksContext'
import BsCard from './Components/BsCard'
import NoBooks from './Components/NoBooks'

function BestSellers() {
  const { loading, books, currentPage, setSearchParams } = useBestSellers()

  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          {loading ? (
            <p className="flex justify-center items-center text-2xl min-h-[85vh] tracking-[1px]">
              Loading....
            </p>
          ) : (
            <div className="w-full min-w-[354px] min-h-max px-1 sm:px-6 md:px-10 xl:px-30 py-5">
              {books.length > 0 ? (
                <>
                  <h1 className="ml-3 capitalize text-4xl pb-5 tracking-wider font-light">
                    Best sellers
                  </h1>
                  <div className="px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
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
