// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SideBarProvider } from './Contexts/SideBarContext.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import { NavLinksProvider } from './Contexts/NaclinkContext/NavLinksContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Contexts/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <SideBarProvider>
    <CartProvider>
      <NavLinksProvider>
        <ProductProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProductProvider>
      </NavLinksProvider>
    </CartProvider>
  </SideBarProvider>
  // </StrictMode>
)
