import OrderComplete from '../Pages/OrderComplete/OrderComplete'

function DevLayout() {
  return (
    <>
      <div className="p-2 sm:px-6 lg:px-10 xl:px-30 ">
        <h1>This is only for dev's</h1>
      </div>
      <OrderComplete />
    </>
  )
}

export default DevLayout
