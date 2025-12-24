import Page from '../../Components/PageNavigation/Page'
import { BrandDropList } from '../../Components/Product/Filters/BrandDropList'
import ProductCards from './ProductCards'

function Products() {
  return (
    <>
      <div className="w-full min-w-[354px] min-h-max px-2 sm:px-6 md:px-10 xl:px-30 pt-5 bg-[rgba(62,62,62,0.212)]">
        <h1 className=" capitalize text-4xl pb-3 tracking-wider font-light text-nowrap">
          Products
        </h1>
        <div className="flex w-full h-full flex-col min-w-[354px] overflow-hidden">
          <BrandDropList />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 sm:gap-2 md:gap-3 min-h-[90vh] mb-4">
            <ProductCards />
          </div>
        </div>
      </div>
      <Page bgcolor={'bg-gray-950'} />
    </>
  )
}

export default Products
