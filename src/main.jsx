// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SideBarProvider } from './Contexts/SideBarContext.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import { NavLinksProvider } from './Contexts/NaclinkContext/NavLinksContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Contexts/ProductContext.jsx'
import { AuthProvider } from './Contexts/Auth/AuthContext.jsx'
import { BooksProvider } from './Contexts/BooksContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <SideBarProvider>
    <CartProvider>
      <NavLinksProvider>
        <ProductProvider>
          <BrowserRouter>
            <AuthProvider>
              <BooksProvider>
                <App />
              </BooksProvider>
            </AuthProvider>
          </BrowserRouter>
        </ProductProvider>
      </NavLinksProvider>
    </CartProvider>
  </SideBarProvider>
  // </StrictMode>
)
