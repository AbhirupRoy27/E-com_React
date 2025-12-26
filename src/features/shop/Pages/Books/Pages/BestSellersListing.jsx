import BestSellerCard from '../Components/BestSellerCard'
import NoBooks from '../Components/NoBooks'
import Page from '../../../../../shared/components/PageNavigation'
import { useBestSellers } from '../../../../home/Context/BooksContext'
import BestSellerSkelition from './BestSellerSkelition'

function BestSellers() {
  const { loading, books } = useBestSellers()

  return (
    <>
      <div className="flex w-full">
        <div className="w-full">
          {loading ? (
            <BestSellerSkelition />
          ) : (
            <div className="w-full min-w-[354px] min-h-max  py-5">
              {books.length > 0 ? (
                <>
                  <h1 className="ml-3 capitalize text-4xl pb-5 tracking-wider font-light">
                    Best sellers
                  </h1>
                  <div className="sm:px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
                    {books.map((p) => (
                      <BestSellerCard key={p._id} books={p} />
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

      <Page />
    </>
  )
}

export default BestSellers
