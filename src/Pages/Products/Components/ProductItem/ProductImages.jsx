import { useState } from 'react'
import Products from '../../../../Db/Products.json'
import { useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProductImages() {
  const { id } = useParams()
  const filterItem = Products.filter((i) => i._id === Number(id))

  const [imageIndex, setImageIndex] = useState(0)
  const [img, setImg] = useState(filterItem[0].imageurl)

  return (
    <div className="flex items-center">
      <button
        className="bg-amber-50 rounded-full h-fit p-2 active:scale-95"
        onClick={() =>
          handleImage(
            'dec',
            setImg,
            filterItem[0].sideUrl,
            setImageIndex,
            imageIndex
          )
        }
      >
        <ArrowLeft color="black" />
      </button>
      <div className="sm:p-2 flex justify-center items-center w-full">
        <img
          src={img}
          alt="Loading...."
          className="bg-white sm:rounded-md object-contain overflow-hidden h-[54vh] w-full lg:min-w-[30vw]"
        />
      </div>
      <button
        className="bg-amber-50 rounded-full h-fit p-2 active:scale-95"
        onClick={() =>
          handleImage(
            'asc',
            setImg,
            filterItem[0].sideUrl,
            setImageIndex,
            imageIndex
          )
        }
      >
        <ArrowRight color="black" />
      </button>
    </div>
  )
}

function handleImage(action, setImg, list, setImageIndex, imageIndex) {
  if (action == 'asc') {
    if (imageIndex < 0 || imageIndex >= 3) {
      return
    }
    setImageIndex((prev) => prev + 1)
    return setImg(list[imageIndex].sideUrl1, imageIndex)
  }
  if (imageIndex <= 0 || imageIndex > 3) {
    return
  }
  setImageIndex((prev) => prev - 1)
  return setImg(list[imageIndex].sideUrl1)
}
