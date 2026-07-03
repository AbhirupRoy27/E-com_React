import React from 'react'
import NavbarPayment from '../Components/NavbarPayment'
import CheckoutForm from './CheckoutForm'
import OrderTotal from '../Components/OrderTotal'

function CheckOutLayout() {
  return (
    <>
      <NavbarPayment />
      <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-6 lg:px-20 py-4">
        <CheckoutForm />
        <OrderTotal />
      </div>
    </>
  )
}

export default CheckOutLayout
