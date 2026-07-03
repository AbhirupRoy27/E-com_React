import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CountDownMessage() {
  const [counter, setCounter] = useState(4)

  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (counter <= 0) {
      navigate('/')
    }
  }, [counter, navigate])

  return (
    <div className="bg-gray-800 py-2 flex justify-center items-center">
      <p className="text-2xl text-white tracking-widest">
        Going home in {counter} sec...
      </p>
    </div>
  )
}

export default CountDownMessage
