import CoverImag from '../Components/Card/CoverImage'
import ProductCardDetails from '../Components/Card/ProductCardDetails'
import ProductNotFound from '../Components/Not-Found/ProductNotFound'
import { useProducts } from '../Context/ProductContext'

function ProductCards() {
  const { filteredProducts } = useProducts()

  if (!filteredProducts) return

  return filteredProducts?.length > 0 ? (
    <>
      {filteredProducts.map((p) => (
        <div key={p._id} className="bg-slate-50/40 h-max rounded-md">
          <CoverImag product={p} />
          <ProductCardDetails product={p} />
        </div>
      ))}
    </>
  ) : (
    <ProductNotFound />
  )
}

export default ProductCards
