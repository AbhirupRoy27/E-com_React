import { useParams } from 'react-router-dom'
import Products from '../../Db/Products.json'

function Item() {
  const { id } = useParams()
  // console.log()
  const filterItem = Products.filter((i) => i.id === Number(id))
  console.log(filterItem)

  return (
    <div className="bg-blue-50 w-full h-max p-3 flex flex-col md:flex-row gap-2 ">
      <div className="flex flex-col gap-4 md:w-[50%]">
        <h1 className="font-semibold text-2xl tracking-wider">
          {filterItem[0].productName}
        </h1>
        <div className="bg-slate-200 rounded">
          <img
            src={filterItem[0].imageurl}
            alt="Product Img"
            className="rounded min-h-[450px] max-h-[550px] w-full"
          />
        </div>
      </div>
      <div className="p-2 sm:p-4 sm:mt-10 w-full flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{filterItem[0].name}</h1>
        <p className="text-lg tracking-widest">{filterItem[0].Model}</p>
        <div className="flex gap-2 items-center">
          <p className="text-2xl font-bold">Rs. {filterItem[0].Cost}</p>
          <p className="font-semibold text-green-700">
            {filterItem[0].discount}
          </p>
          <p className="line-through">{filterItem[0]['original-price']}/-</p>
        </div>
        <div className="flex gap-2 p-2 min-h-[50px]">
          <p
            className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
            tabIndex="0"
          >
            S
          </p>
          <p
            className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
            tabIndex="0"
          >
            M
          </p>
          <p
            className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
            tabIndex="0"
          >
            L
          </p>
          <p
            className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
            tabIndex="0"
          >
            XL
          </p>
          <p
            className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
            tabIndex="0"
          >
            2XL
          </p>
          <p
            className="bg-white px-3 py-1 rounded active:shadow-md shadow-black/30 focus:border border-blue-800"
            tabIndex="0"
          >
            3XL
          </p>
        </div>
        <div className="flex gap-2 py-2 justify-center sm:justify-start font-semibold">
          <button className="bg-[#febd68] p-2 rounded-md active:scale-102 w-[50%]">
            <p className="hover:font-bold">Buy Now</p>
          </button>
          <button className="bg-slate-300 p-2 rounded-md active:scale-102 w-[50%]">
            <p className="hover:font-bold">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
