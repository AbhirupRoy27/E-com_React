import { Heart } from 'lucide-react'
import { useState } from 'react'

function RightCompo() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="bg-gray-950 w-full min-h-[85vh] px-2 sm:px-10 xl:px-30 pb-10">
      <p className="text-center pt-10 pb-5 font-bold text-3xl sm:text-5xl border-b-2 border-white/10">
        Feedback List
      </p>
      <div className="px-[5%] lg:px-[10%] max-h-[75vh] overflow-scroll no-scrollbar mt-4 ">
        {['Amit', 'Ajay', 'Sumit', 'Pranav'].map((f, i) => (
          <div
            className="flex flex-col bg-gray-800 rounded-xl p-2 mt-3"
            key={i}
          >
            <p className="text-2xl text-white font-semibold py-2">
              {f}'s <small>FeedBack</small>{' '}
            </p>
            <p className="bg-gray-300 py-2 rounded p-2 text-sm sm:text-lg h-max text-gray-950 tracking-widest">
              Form DescrtiptionForm DescrtiptionForm DescrtiptionForm
              DescrtiptionForm DescrtiptionForm DescrtiptionForm
              DescrtiptionForm DescrtiptionForm DescrtiptionForm
              DescrtiptionForm Descrtiption
            </p>
            <p className="text-gray-200 text-md py-3">
              <b className="text-lg">Category:</b>{' '}
              <strong className="font-light tracking-widest">Any</strong>
            </p>
            <div
              className="flex gap-1 items-center"
              type="button"
              onClick={() => setIsClicked(!isClicked)}
            >
              <p className="text-red-300 flex gap-1">
                <Heart fill={`${isClicked ? 'red' : 'white'}`} /> Like
              </p>
              <p className="text-white font-extralight text-sm">(10)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightCompo
