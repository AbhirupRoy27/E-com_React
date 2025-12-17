import { useParams } from 'react-router-dom'
import Products from '../../../../Db/Products.json'

function ProductDetails() {
  const { id } = useParams()
  const filterItem = Products.filter((i) => i._id === Number(id))
  const discount = filterItem[0].discount.split('%')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl tracking-wider font-mono mt-2">
          <b>{filterItem[0].name}</b>
        </h3>
        <p className="sm:text-xl inline-block text-white/70">
          {filterItem[0].Model}
          {filterItem[0].Model}
          {filterItem[0].Model}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm sm:text-md font-semibold text-white bg-red-800 px-3 py-1 w-max text-center">
          {Number(discount[0]) > 79 ? 'All time Low' : 'Best Sale Price'}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start sm:items-center">
          <p className="text-5xl text-red-800 ">-{filterItem[0].discount}</p>
          <div className="flex gap-2 items-center">
            <p className="text-4xl">
              <small>M.R.P.</small>{' '}
              <b className="ml-2">{filterItem[0].price}</b>
              <small>.00</small>
            </p>

            <p className="text-xl text-white/70">
              <span className="line-through">
                {filterItem[0]['original-price']}
                .00
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
