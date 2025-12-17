import { lazy, Suspense } from 'react'
import Page from '../../Components/PageNavigation/Page'
import { BrandDropList } from './Components/ProductListing/BrandDropList'

const ProductCards = lazy(() =>
  import('./Components/ProductListing/ProductCards')
)

function Products() {
  return (
    <div className="w-full flex ">
      <div className="flex w-full h-full flex-col bg-[rgba(62,62,62,0.212)] min-w-[354px] overflow-hidden">
        <div className="p-2 flex gap-2">
          <BrandDropList />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3 px-2 sm:px-10 min-h-[90vh] mb-4">
          <Suspense fallback={<h1>Loading....</h1>}>
            <ProductCards />
          </Suspense>
        </div>
        <Page bgcolor={'bg-gray-950'} />
      </div>
    </div>
  )
}

export default Products
