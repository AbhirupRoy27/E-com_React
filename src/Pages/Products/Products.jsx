import { Outlet } from 'react-router-dom'
import { useProducts } from '../../Contexts/ProductContext'
import Page from '../../Components/PageNavigation/Page'


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
    <div className="flex items-center gap-[0.4rem] ">
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
  return (
    <div className="w-full flex ">
      <div className="flex w-full h-full flex-col bg-[rgba(62,62,62,0.212)] min-w-[100vw] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
        <div className="p-2 flex gap-2">
          <BrandDropList />
        </div>
        <div className="flex flex-wrap gap-1 md:gap-2 p-1 sm:p-2 sm:px-[3%] min-h-[90vh] mb-4 min-w-[350px]">
          <Outlet />
        </div>
        <Page />
      </div>
    </div>
  )
}

export default Products
