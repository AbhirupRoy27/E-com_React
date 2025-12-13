import { Outlet } from 'react-router-dom'
import { useProducts } from '../../Contexts/ProductContext'
import Page from '../../Components/PageNavigation/Page'

const Brands = ['All', 'Zudio', 'Puma', 'Nike', 'Addidas', 'Zara', 'Campus']

export const BrandDropList = () => {
  const { setFilteredProducts, products } = useProducts()

  const getBrands = (e) => {
    if (e.target.localName == 'button') {
      let text =
        e.target.innerText.charAt(0) + e.target.innerText.slice(1).toLowerCase()
      // console.log(text)
      return setFilteredProducts(
        text === 'All' ? products : products.filter((i) => i.name === text)
      )
    }

    setFilteredProducts(
      e.target.value === 'All'
        ? products
        : products.filter((i) => i.name === e.target.value)
    )
  }
  return (
    <div className="flex items-center gap-[0.4rem] px-3 lg:px-10">
      <p className="font-semibold font-mono text-xl ">Select Brand:</p>
      <div className="hidden sm:flex gap-2 overflow-x-scroll no-scrollbar">
        {Brands.map((b, idx) => (
          <button
            key={idx}
            onClick={getBrands}
            className="bg-gray-900/20 hover:bg-gray-900/30 min-w-[100px] text-black font-semibold py-2 rounded-2xl border-dashed border-2 border-black/40 uppercase active:scale-95"
          >
            {b}
          </button>
        ))}
      </div>
      <select
        className="sm:hidden p-[0.4rem] min-w-[100px] font-semibold focus:outline-none focus:ring-0 focus:border-transparent bg-[rgba(62,62,62,0.212)] rounded-md"
        onChange={getBrands}
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
      <div className="flex w-full h-full flex-col bg-[rgba(62,62,62,0.212)] min-w-[354px] overflow-hidden">
        <div className="p-2 flex gap-2">
          <BrandDropList />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:lg:grid-cols-5  gap-1 md:gap-2 px-2 sm:px-10 min-h-[90vh] mb-4">
          <Outlet />
        </div>
        <Page />
      </div>
    </div>
  )
}

export default Products
