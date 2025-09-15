import './index.css'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { useProducts } from '../../Contexts/ProductContext'

const FilterBar = lazy(() => import('../../Components/SideFilterBar/index'))

function Products() {
  const { setFilteredProducts, products } = useProducts()

  const handleBs = (e) => {
    setFilteredProducts(
      e.target.value === 'All'
        ? products
        : products.filter((i) => i.name === e.target.value)
    )
  }

  return (
    <div className="w-full flex ">
      <div className="hidden sm:block p-[1%] bg-yellow-50">
        <Suspense>
          <FilterBar />
        </Suspense>
      </div>
      <div className="flex w-full h-full flex-col bg-[rgba(62,62,62,0.212)] ">
        <div className="flex items-center gap-[0.4rem] p-[0.4rem] ">
          <p className="font-semibold pl-[10px]">Select Brand:</p>
          <select
            className="p-[0.4rem] min-w-[100px] font-semibold focus:outline-none focus:ring-0 focus:border-transparent bg-[rgba(62,62,62,0.212)] rounded-md"
            onChange={handleBs}
          >
            <option default>All</option>
            <option>Zudio</option>
            <option>Puma</option>
            <option>Nike</option>
            <option>Addidas</option>
          </select>
        </div>
        <div className="products-container min-h-[90vh]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Products
