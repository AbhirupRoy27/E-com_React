import { useSearchParams } from 'react-router-dom'
import { useBestSellers } from '../../../Contexts/BooksContext'
import Buttons from '../Components/BookListing/Buttons'
import DeliveryDetails from '../Components/BookListing/DeliveryDetails'
import Offers from '../Components/BookListing/Offers'
import ProductDetails from '../Components/BookListing/ProductDetails'

function BookListing() {
  const { books } = useBestSellers()
  const [searchParams] = useSearchParams()
  const _id = searchParams.get('book-id')

  const book = books.filter((p) => p._id === _id)

  if (book.length < 1) {
    return (
      <div>
        <h1>No Such Book</h1>
      </div>
    )
  }

  const Discount = Math.ceil(Math.random() * 40)

  return (
    <div className="py-5 sm:px-4 bg-gray-900/40 flex flex-col md:flex-row sm:h-screen sm:overflow-y-scroll no-scrollbar">
      <div className="py-2 px-1 sm:px-10 md:w-1/2 flex items-center flex-col md:sticky top-0">
        <img
          src={book[0].coverImage}
          alt="Product"
          className=" object-center object-contain max-h-[600px]"
        />
        <Buttons book={book[0]} />
      </div>
      <div className="px-6 sm:px-10 pt-10 bg-white/10 mx-2 rounded-tl-2xl rounded-tr-2xl sm:h-fit sm:rounded-2xl md:w-1/2 min-w-[322px]">
        <h3 className="font font-semibold text-2xl">{book[0].title}</h3>
        <div className="flex justify-between items-center py-3">
          <div>
            <b className="text-[14px]">Written by, </b>
            <h4 className="text-sky-500 text-sm">{book[0].author}</h4>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-xl sm:text-2xl">₹ {book[0].price}</h4>
            <h6 className="line-through font-extralight text-sm sm:text-md text-white/50">
              ₹ {Math.ceil(book[0].price + (book[0].price * Discount) / 100)}
            </h6>
          </div>
        </div>

        {book[0].sideImages && (
          <div className="flex gap-1 py-5">
            {[1, 2, 3, 4].map((item) => (
              <img
                src={book[0].coverImage}
                alt="images"
                width={60}
                height={60}
                className={`bg-gray-300 rounded ${
                  1 === item ? 'border-gray-200 border-b-3' : ''
                }`}
                key={item}
              />
            ))}
          </div>
        )}
        <DeliveryDetails />
        <Offers />
        <ProductDetails description={book[0].description} />
      </div>
    </div>
  )
}

export default BookListing
