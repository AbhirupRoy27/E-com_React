import BackButton from '../../Components/BackButton/BackButton'
import Buttons from './components/Buttons'
import DeliveryDetails from './components/DeliveryDetails'
import Offers from './components/Offers'
import ProductDetails from './components/ProductDetails'

function ProductListing({ item, book }) {
  let isBook = false
  if (!book) {
    isBook = true
  }

  const product = item || book
  const Discount = Math.ceil(Math.random() * 40)

  return (
    <>
      {!isBook ? (
        <BackButton label={'Best Sellers'} route={'/best sellers'} />
      ) : (
        <BackButton label={'Products'} route={'/Products'} />
      )}
      <div className="py-5 sm:px-4  flex flex-col md:flex-row sm:h-screen sm:overflow-y-scroll no-scrollbar">
        <div className="py-2 px-1 sm:px-10 md:w-1/2 flex items-center flex-col md:sticky top-0">
          <img
            src={product.coverImage}
            alt="Product"
            className=" object-center object-contain max-h-[600px]"
          />
          <Buttons book={product} />
        </div>
        <div className="px-6 sm:px-10 pt-10 bg-white/10 mx-2 rounded-tl-2xl rounded-tr-2xl sm:h-fit sm:rounded-2xl md:w-1/2 min-w-[322px]">
          <h3 className="font font-semibold text-2xl">{product.title}</h3>
          {/* <div className="flex justify-between items-center py-3">
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
          </div> */}

          {product.sideImages && (
            <div className="flex gap-1 py-5 ">
              {product.sideImages.map((item) => (
                <img
                  src={item.link}
                  alt="images"
                  width={60}
                  height={60}
                  className={`bg-gray-300 rounded w-[70px] h-[70px] object-contain ${
                    1 === item ? 'border-gray-200 border-b-3' : ''
                  }`}
                  key={item.id}
                />
              ))}
            </div>
          )}
          <DeliveryDetails />
          <Offers />
          <ProductDetails description={product.description} />
        </div>
      </div>
    </>
  )
}

export default ProductListing
