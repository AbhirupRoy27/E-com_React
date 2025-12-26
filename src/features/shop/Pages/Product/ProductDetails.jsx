import { useBestSellers } from '../../../home/Context/BooksContext'
import { useSearchParams } from 'react-router-dom'
import products from '../../mock/Products.json'
import ProductListing from './ProductListing'
import React from 'react'

function ProductDetailPage() {
  const { books } = useBestSellers()
  const [searchParams] = useSearchParams()
  const _id = searchParams.get('product-id')

  const book = books.filter((p) => p._id == _id)
  const product = products.filter((p) => p._id == _id)

  // console.log(product)

  if (book.length < 1 && product.length < 1) {
    return (
      <div className="py-5 min-w-[354px] bg-gray-900/40 min-h-[80vh]">
        <div className="h-[80vh] flex justify-center items-center">
          <h1>No Such Book</h1>
        </div>
      </div>
    )
  }

  if (book.length < 1) {
    return (
      <div className="py-5 min-w-[354px]  min-h-screen">
        <ProductListing item={product[0]} />
      </div>
    )
  }

  return (
    <div className="py-5 min-w-[354px] min-h-screen">
      <ProductListing book={book[0]} />
    </div>
  )
}

export default React.memo(ProductDetailPage)
