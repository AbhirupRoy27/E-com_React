import CoverImage from '../../../../Components/Product/Card/CoverImage'
import ProductCardDetails from '../../../../Components/Product/Card/ProductCardDetails'
import ProductNotFound from '../../../../Components/Product/Not-Found/ProductNotFound'
import { useProducts } from '../../../../Contexts/ProductContext'

function ProductCards() {
  const { filteredProducts } = useProducts()

  if (!filteredProducts) return

  return filteredProducts?.length > 0 ? (
    <>
      {filteredProducts.map((p) => (
        <div key={p._id} className="bg-slate-50/40 h-max rounded-md">
          <CoverImage product={p} />
          <ProductCardDetails product={p} />
        </div>
      ))}
    </>
  ) : (
    <ProductNotFound />
  )
}

export default ProductCards
