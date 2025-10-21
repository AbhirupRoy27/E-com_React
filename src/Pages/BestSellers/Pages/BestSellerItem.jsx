import { useSearchParams } from 'react-router-dom'
import { useBestSellers } from '../../../Contexts/BooksContext'
// import { useEffect, useState } from 'react'

function BestSellerItem() {
  const { books } = useBestSellers()
  const [searchParams] = useSearchParams()
  const _id = searchParams.get('book-id')

  const book = books.filter((p) => p._id === _id)

  console.log(_id, book)

  return (
    <>
      {book.length > 0 && (
        <div className="bg-gray-100 min-h-[85vh] px-[2%] sm:px-[4%] md:px-[7%] lg:px-[10%] py-[5%] flex gap-2 overflow-hidden">
          <img
            src={book[0].coverImage}
            alt="Product Image"
            className="min-w-[20vw] max-w-[20vw] min-h-[50vh] max-h-[50vh]"
          />
          <div className="px-2 py-1 w-full">
            <p>Title</p>
            <p>Author</p>
            <hr />
            <div>
              <p>Offes</p>
            </div>
            <hr />
            <div>Delivery Details</div>
            <p>Description</p>
            <div>pages, Category</div>
          </div>
          <div className="min-w-[20vw] max-w-[20vw] min-h-[50vh] max-h-[50vh] bg-sky-100 p-2">
            <div>Discount, amount</div>
            <p>Discount</p>
            <hr />
            <p>Stock Detail</p>
            <div>
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BestSellerItem
