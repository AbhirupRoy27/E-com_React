import { Minus, Plus } from 'lucide-react'
import FandQList from './listFandQ.json'
import { useState } from 'react'

function FandQ() {
  const [isOpen, setIsOpen] = useState({
    open: false,
    id: '',
  })

  const handleAns = (id) => {
    if (isOpen.open == false) {
      setIsOpen({
        open: true,
        id,
      })
      return
    }
    setIsOpen({
      open: false,
      id: '',
    })
  }

  return (
    <div className="min-w-[354px] px-1 sm:px-6 md:px-10 xl:px-30 py-5 min-h-[90vh]">
      <h1 className="ml-3 capitalize text-4xl pb-5 tracking-wider font-light">
        F&Q
      </h1>
      {FandQList &&
        FandQList.map((q) => (
          <div key={q.id}>
            <div
              className="flex items-center justify-between py-5 px-3 sm:px-10 bg-gray-800/80 hover:bg-gray-900 mt-2"
              onClick={() => handleAns(q.id)}
            >
              <h1 className="tracking-wider font-bold">{q.question}</h1>
              <button className="cursor-pointer hover:scale-115">
                {isOpen.open && isOpen.id == q.id ? <Minus /> : <Plus />}
              </button>
            </div>
            {isOpen.open && (
              <Answer ans={q.answer} id={q.id} active={isOpen.id} />
            )}
          </div>
        ))}
    </div>
  )
}

export default FandQ

const Answer = ({ ans, id, active }) => {
  return (
    <div
      className={`${
        active == id ? 'flex' : 'hidden'
      } bg-gray-900/60 py-3 pb-5 px-3 font-light tracking-widest`}
    >
      <p>{ans}</p>
    </div>
  )
}
