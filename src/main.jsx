// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SideBarProvider } from './Contexts/SideBarContext.jsx'
import { CartProvider } from './Contexts/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './Contexts/ProductContext.jsx'
import { AuthProvider } from './Contexts/Auth/AuthContext.jsx'
import { BooksProvider } from './Contexts/BooksContext.jsx'
import { BuyContextProvider } from './Contexts/BuyContext.jsx'
import TrendingProductsProvider from './Contexts/Home/TrendingProducts.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <AuthProvider>
            <BooksProvider>
              <BuyContextProvider>
                <TrendingProductsProvider>
                  <App />
                </TrendingProductsProvider>
              </BuyContextProvider>
            </BooksProvider>
          </AuthProvider>
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
  // </StrictMode>
)
