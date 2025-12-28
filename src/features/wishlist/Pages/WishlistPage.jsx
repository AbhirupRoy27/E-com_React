import { X } from 'lucide-react'
import NoItemWishlist from '../Components/NoItemWishlist'
import { useWishlist } from '../Context/WishlistContext'
import WishlistHeading from '../Components/WishlistHeading'

function WishlistPage() {
  const { wishlistItems } = useWishlist()
  console.log(wishlistItems)
  return (
    <div className="h-[70vh] min-w-[354px] sm:mt-5 overflow-x-scroll">
      <h1 className="capitalize text-4xl pb-3 tracking-wider font-light text-nowrap">
        My Wishlist
      </h1>

      <section className="overflow-y-scroll no-scrollbar py-3 my-3">
        {wishlistItems.length < 1 ? (
          <NoItemWishlist />
        ) : (
          <div className="w-fit no-scrollbar">
            <WishlistHeading />
            {wishlistItems.map((item) => (
              <div
                className="grid grid-cols-[80px_120px_300px_200px_160px_200px] lg:grid-cols-[80px_160px_500px_250px_200px_250px] border-b-1 border-white/20 text-center py-5 gap-3 no-scrollbar"
                key={item}
              >
                <button>
                  <X />
                </button>
                <div className="flex justify-center items-center w-full h-[160px] overflow-hidden">
                  <img src={item.coverImage} />
                </div>

                <h3 className="flex justify-center items-center w-full">
                  {item.description}
                </h3>
                <h3 className="flex justify-center gap-2 items-center w-full">
                  <b className="text-xl font-light">{item.price}.00</b>
                  <span className="line-through text-[14px] font-extralight">
                    {item.originalPrice}.00
                  </span>
                </h3>
                <h3 className="flex justify-center items-center w-full text-xl tracking-wider">
                  {item.stock == 0 ? 'Out Of Stock' : 'In Stock'}
                </h3>
                <div className="flex justify-center items-center w-full">
                  <button className="bg-white/90 hover:bg-white py-2 px-5 text-gray-950 font-bold">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default WishlistPage
