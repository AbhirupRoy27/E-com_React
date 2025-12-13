import { useSearchParams } from 'react-router-dom'
import { useBestSellers } from '../../../Contexts/BooksContext'
import ProductTotalCard from '../Components/ProductTotalCard'

function BestSellerItem() {
  const { books } = useBestSellers()
  const [searchParams] = useSearchParams()
  const _id = searchParams.get('book-id')

  const Currentdate = new Date()
  let DeliveryBy = {
    Date: Currentdate.getDate(),
    Month: Currentdate.getMonth(),
  }

  const FormatDeliveryDate = () => {
    if (DeliveryBy.Date + 7 > 30) {
      DeliveryBy.Date = DeliveryBy.Date + 7 - 30
    }
    DeliveryBy.Date = DeliveryBy.Date + 7
  }
  FormatDeliveryDate()

  const book = books.filter((p) => p._id === _id)

  return (
    <>
      {book.length > 0 && (
        <div className="bg-gray-950 text-white min-w-[354px] min-h-[85vh] px-[2%] sm:px-[3%] pt-[4%] flex gap-2 flex-col sm:flex-row justify-center overflow-scroll lg:overflow-hidden ">
          <img
            src={book[0].coverImage}
            alt="Product Image"
            className="min-w-full sm:min-w-[280px] lg:min-w-[20vw] max-w-[20vw] min-h-[50vh] max-h-[55vh]"
          />
          <div className="flex flex-col lg:flex-row">
            <div className="px-2 py-1 w-full min-w-[300px] xl:min-w-[650px] sm:mr-2">
              <div className="border-b border-gray-400">
                <p className="text-2xl font-serif font-normal">
                  {book[0].title}
                </p>
                <p className="text-sm mb-2">
                  by,{' '}
                  <i className="font-semibold text-blue-800">
                    {book[0].author}
                  </i>{' '}
                  (Author)
                </p>
              </div>

              <div className="border-b border-gray-400 py-2">
                <div className="border border-gray-500 rounded px-2 py-1">
                  <p className="text-red-800 font-bold py-2">Save Extra 5%</p>
                  <div className="py-2 border-t border-gray-400">
                    <ol>
                      <li>7 Days Replacement</li>
                      <li>Cash on Delivery</li>
                      <li>Free Delivery</li>
                    </ol>
                  </div>
                </div>
              </div>

              <p className="border-b border-gray-400 pt-2 pb-4">
                <strong>A fun {book[0].category} book, </strong>
                {book[0].description}
              </p>
              <div className="border-b border-gray-400 py-2 flex flex-col gap-1">
                <span>
                  <strong>Pages: </strong> {book[0].pages || 'Not Mentioned'}{' '}
                </span>
                <span>
                  <strong>Category: </strong>
                  {book[0].category}
                </span>
              </div>
            </div>
            <ProductTotalCard DeliveryBy={DeliveryBy} book={book} />
          </div>
        </div>
      )}
    </>
  )
}

export default BestSellerItem
