import NoItemWishlist from '../Components/NoItemWishlist'
import { useWishlist } from '../Context/WishlistContext'

function WishlistPage() {
  const { wishlistItems } = useWishlist()
  console.log(wishlistItems)
  return (
    <div className="h-screen min-w-[354px] sm:mt-5 overflow-x-scroll">
      <h1 className="capitalize text-4xl pb-3 tracking-wider font-light text-nowrap">
        My Wishlist
      </h1>

      <section className="overflow-y-scroll no-scrollbar py-3 my-3">
        {wishlistItems.length < 1 ? (
          <NoItemWishlist />
        ) : (
          <div className="w-fit no-scrollbar">
            <div className="grid grid-cols-[80px_120px_300px_200px_160px_200px] lg:grid-cols-[80px_160px_500px_250px_200px_250px] border-y-1 border-white/20 w-full text-center py-5 gap-3">
              <button></button>
              <div></div>
              <h3>Product Name</h3>
              <h3>Unit Price</h3>
              <h3>Stock Status</h3>
              <h3>Actions</h3>
            </div>
            {wishlistItems.map((item) => (
              <div
                className="grid grid-cols-[80px_120px_300px_200px_160px_200px] lg:grid-cols-[80px_160px_500px_250px_200px_250px] border-b-1 border-white/20 text-center py-5 gap-3 no-scrollbar"
                key={item}
              >
                <button>X</button>
                <div className="flex justify-center items-center w-full">
                  <img src="https://m.media-amazon.com/images/G/31/IMG25/Fashion/BAU/Flip/EOSS/HalosNonSelected/Men._SS300_QL85_FMpng_.png" />
                </div>
                {['Product Name', 'Unit Price', 'Stock Status', 'Actions'].map(
                  (item) => (
                    <h3 className="flex justify-center items-center w-full">
                      {item}
                    </h3>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default WishlistPage
