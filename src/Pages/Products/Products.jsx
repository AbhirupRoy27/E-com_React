import './index.css'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const FilterBar = lazy(() => import('../../Components/SideFilterBar/index'))

function Products() {
  return (
    <div className="w-full flex">
      <div className="hidden sm:block p-[1%] bg-yellow-50">
        <Suspense>
          <FilterBar />
        </Suspense>
      </div>
      <div className="products-container ">
        <Outlet />
      </div>
    </div>
  )
}

export default Products
