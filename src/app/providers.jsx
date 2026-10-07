'use client'

import ErrorBoundary from '../components/ErrorBoundary'
import { CartProvider } from '../context/CartContext'
import CartDrawer from '../components/CartDrawer'

export default function Providers({ children }) {
  return (
    <ErrorBoundary>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </ErrorBoundary>
  )
}
