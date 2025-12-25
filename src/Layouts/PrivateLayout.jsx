import { Outlet } from 'react-router-dom'

function PrivateLayout() {
  return (
    <div className="min-w-[354px]">
      <Outlet />
    </div>
  )
}

export default PrivateLayout
