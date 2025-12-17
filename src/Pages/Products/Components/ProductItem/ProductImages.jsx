import { useState } from 'react'
import Products from '../../../../Db/Products.json'
import { useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function ProductImages() {
  const { id } = useParams()
  const filterItem = Products.filter((i) => i._id === Number(id))

  const [imageIndex, setImageIndex] = useState(0)
  const [img, setImg] = useState(filterItem[0].mainimg)

  return (
    <div className="flex items-center">
      <button
        className="bg-amber-50 rounded-full h-fit p-2 active:scale-95"
        onClick={() =>
          handleImage(
            'dec',
            setImg,
            filterItem[0].coverimg,
            setImageIndex,
            imageIndex
          )
        }
        disabled={imageIndex == 0}
      >
        <ArrowLeft color="black" />
      </button>
      <div className="sm:p-2 flex justify-center items-center w-full">
        <img
          src={img}
          alt="Loading...."
          className="bg-white sm:rounded-md object-cover overflow-hidden h-[54vh] w-full lg:min-w-[30vw]"
        />
      </div>
      <button
        className="bg-amber-50 rounded-full h-fit p-2 active:scale-95"
        onClick={() =>
          handleImage(
            'asc',
            setImg,
            filterItem[0].coverimg,
            setImageIndex,
            imageIndex
          )
        }
        disabled={imageIndex > 1}
      >
        <ArrowRight color="black" />
      </button>
    </div>
  )
}

function handleImage(action, setImg, list, setImageIndex, imageIndex) {
  if (action == 'asc') {
    if (imageIndex == 0) {
      setImageIndex((prev) => prev + 1)
      return setImg(list[0].link)
    }
    setImageIndex((prev) => prev + 1)
    return setImg(list[1].link)
  }

  console.log(action, list, imageIndex)
  if (imageIndex == 0) return

  setImageIndex((prev) => prev - 1)
  return setImg(list[imageIndex].link)
}
