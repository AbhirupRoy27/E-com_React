// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from './App.jsx'
import { SideBarProvider } from '../Layouts/Context/SideBarContext.jsx'
import { CartProvider } from '../features/Cart/Context/CartContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from '../features/shop/Context/ProductContext.jsx'
import { BooksProvider } from '../features/home/Context/BooksContext.jsx'
import { BuyContextProvider } from '../features/Payment/Context/BuyContext.jsx'
import TrendingProductsProvider from '../features/home/Context/TrendingProducts.jsx'
import { AuthProvider } from '../features/auth/context/AuthContext.jsx'
import WishlistContexProvider from '../features/wishlist/Context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <SideBarProvider>
      <TrendingProductsProvider>
        <BooksProvider>
          <BuyContextProvider>
            <ProductProvider>
              <CartProvider>
                <AuthProvider>
                  <WishlistContexProvider>
                    <App />
                  </WishlistContexProvider>
                </AuthProvider>
              </CartProvider>
            </ProductProvider>
          </BuyContextProvider>
        </BooksProvider>
      </TrendingProductsProvider>
    </SideBarProvider>
  </BrowserRouter>
  // </StrictMode>
)

{
  /* 
  
      
        
          <BrowserRouter>
            
              
                
                  
                    <App />
                  </TrendingProductsProvider>
                </BuyContextProvider>
              </BooksProvider>
            </AuthProvider>
          </BrowserRouter>
        </ProductProvider>
      </CartProvider>
    </SideBarProvider>
  */
}
