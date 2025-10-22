import { useSearchParams } from 'react-router-dom'
import { useBestSellers } from '../../../Contexts/BooksContext'
import { useCart } from '../../../Contexts/CartContext'
import { handleAddToCart } from '../../../Components/ProductCard/utils/handleClicks'
import { useNavigate } from 'react-router-dom'

function BestSellerItem() {
  const { books } = useBestSellers()
  const [searchParams] = useSearchParams()
  const _id = searchParams.get('book-id')
  const Discount = Math.ceil(Math.random() * 40)
  const Currentdate = new Date()
  let DeliveryBy = {
    Date: Currentdate.getDate(),
    Month: Currentdate.getMonth(),
  }
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()

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
        <div className="bg-gray-100 min-w-[344px] min-h-[85vh] px-[2%] sm:px-[3%] pt-[4%] flex gap-2 flex-col sm:flex-row justify-center overflow-scroll lg:overflow-hidden ">
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
            <div className="min-w-full lg:min-w-[284px] max-w-[20vw] sm:min-h-[50vh] max-h-[50vh] p-2 my-2 lg:mt-2 bg-gray-200 rounded">
              <div className="bg-slate-50 p-1 min-h-full  rounded">
                <div className="border-b border-gray-300 pt-2 pb-2 px-1 md:px-3">
                  <span className="text-xl text-red-800">-{Discount}%</span>
                  <span className="text-2xl">
                    <span className="text-sm ml-1"> ₹</span>
                    {book[0].price}
                  </span>
                  <p>
                    M.R.P:
                    <span className="ml-2 line-through text-gray-500 text-sm">
                      ₹
                      {Math.ceil(
                        book[0].price + (book[0].price * Discount) / 100
                      )}
                    </span>
                  </p>
                </div>
                <div className="pt-4 px-3">
                  <p className="mb-1 text-xl">
                    {book[0].stock < 5 ? (
                      <b className="text-red-700">Only Few Left</b>
                    ) : (
                      <b className="text-green-700">In Stock</b>
                    )}
                  </p>
                  <p>
                    <strong>Free Delivery</strong> By, {DeliveryBy.Date}
                    {DeliveryBy.Date > 3
                      ? 'th '
                      : DeliveryBy.Date > 2
                      ? 'rd '
                      : DeliveryBy.Date > 1
                      ? 'nd '
                      : 'st '}
                    {DeliveryBy.Month === 0
                      ? 'Jan'
                      : DeliveryBy.Month === 1
                      ? 'Feb'
                      : DeliveryBy.Month === 2
                      ? 'Mar'
                      : DeliveryBy.Month === 3
                      ? 'Apr'
                      : DeliveryBy.Month === 4
                      ? 'May'
                      : DeliveryBy.Month === 5
                      ? 'Jun'
                      : DeliveryBy.Month === 6
                      ? 'Jul'
                      : DeliveryBy.Month === 7
                      ? 'Aug'
                      : DeliveryBy.Month === 8
                      ? 'Sept'
                      : DeliveryBy.Month === 9
                      ? 'Oct'
                      : DeliveryBy.Month === 10
                      ? 'Nov'
                      : 'Dec'}
                  </p>
                </div>
                <div className="flex flex-col w-full mt-10 gap-2">
                  {cart.includes(book[0], 0) ? (
                    <button
                      className="bg-yellow-400 active:bg-yellow-500 rounded-full py-1 font-semibold"
                      onClick={() => navigate('/cart')}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-400 active:bg-yellow-500 rounded-full py-1 font-semibold"
                      onClick={() =>
                        handleAddToCart(
                          book[0],
                          cart,
                          setCart,
                          setTotal,
                          total,
                          navigate
                        )
                      }
                    >
                      Add to Cart
                    </button>
                  )}

                  <button
                    className="bg-amber-500/90 active:bg-yellow-600 rounded-full py-1 font-semibold"
                    onClick={() => navigate('/buy now')}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BestSellerItem
