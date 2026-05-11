import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ScrollToTop from './components/ScrollToTop'
import { CartProvider } from './context/CartContext'
import CartDrawer from './components/CartDrawer'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <CartDrawer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
