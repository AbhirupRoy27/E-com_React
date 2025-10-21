import { lazy, Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useProducts } from '../../Contexts/ProductContext'
import Page from '../../Components/PageNavigation/Page'

const FilterBar = lazy(() => import('../../Components/SideFilterBar/index'))

export const BrandDropList = () => {
  const { setFilteredProducts, products } = useProducts()

  const handleBs = (e) => {
    setFilteredProducts(
      e.target.value === 'All'
        ? products
        : products.filter((i) => i.name === e.target.value)
    )
  }
  return (
    <div className="flex sm:flex-col items-center sm:items-start gap-[0.4rem] ">
      <p className="font-semibold ">Select Brand:</p>
      <select
        className="p-[0.4rem] min-w-[100px] font-semibold focus:outline-none focus:ring-0 focus:border-transparent bg-[rgba(62,62,62,0.212)] rounded-md"
        onChange={handleBs}
      >
        <option defaultValue={'All'}>All</option>
        <option>Zudio</option>
        <option>Puma</option>
        <option>Nike</option>
        <option>Addidas</option>
      </select>
    </div>
  )
}

function Products() {
  const [devComplete, setDevComplete] = useState(false)
  return (
    <div className="w-full flex ">
      <div className="hidden sm:block p-[1%] bg-yellow-50">
        <Suspense>
          {devComplete ? (
            <>
              <p
                className="text-[13px] mb-3"
                onClick={() => setDevComplete(!devComplete)}
              >
                / Close
              </p>
              <FilterBar />
            </>
          ) : (
            <p
              className="min-w-[150px] font-bold"
              onClick={() => setDevComplete(!devComplete)}
            >
              Filters
            </p>
          )}
        </Suspense>
      </div>
      <div className="flex w-full h-full flex-col bg-[rgba(62,62,62,0.212)] ">
        <div className="sm:hidden p-2 flex gap-2">
          <BrandDropList />
        </div>
        <div className="flex flex-wrap gap-2 p-1 sm:p-2 sm:pl-[3%] sm:pr-[3%] min-h-[90vh] mb-4">
          <Outlet />
        </div>
        <Page />
      </div>
    </div>
  )
}

export default Products
