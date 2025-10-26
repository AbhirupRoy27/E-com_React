import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const [orders, setOrders] = useState('Make Your First Order with NextGen')
  // setOrders('Make Your First Order with NextGen')
  const navigate = useNavigate()
  return (
    <div className="min-h-[85vh] flex justify-center items-center flex-col min-w-[100vw] sm:min-w-[640px] md:min-w-[768px] lg:min-w-[1024px] xl:min-w-[1280px]">
      <p className="text-2xl pb-1">{orders}</p>
      <button
        className="mt-4 py-1 px-3 hover:border bg-slate-200 rounded"
        onClick={() => navigate('/login')}
      >
        Login / Signup
      </button>
    </div>
  )
}

export default Orders
