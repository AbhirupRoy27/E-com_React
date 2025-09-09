import './index.css'
import { Outlet } from 'react-router-dom'

function Products() {
  return (
    <div className="products-container">
      <Outlet />
    </div>
  )
}

export default Products
