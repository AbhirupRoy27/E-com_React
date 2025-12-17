import Products from '../../../../Db/Products.json'
import { useParams } from 'react-router-dom'

export default function ProductImages() {
  const { id } = useParams()
  const filterItem = Products.filter((i) => i._id === Number(id))

  return (
    <div className="flex items-center sm:px-10">
      <div className="sm:p-2 flex justify-center items-center w-full">
        <img
          src={filterItem[0].mainimg}
          alt="Loading...."
          className="bg-white sm:rounded-md object-fill object-top overflow-hidden h-[64vh] w-full lg:min-w-[30vw]"
        />
      </div>
    </div>
  )
}
