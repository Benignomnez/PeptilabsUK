'use client'

import ErrorBoundary from '../components/ErrorBoundary'

export default function Providers({ children }) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
