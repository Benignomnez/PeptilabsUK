import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import './styles/globals.css'

// Catch any unhandled errors and show them on screen
window.onerror = (msg, src, line, col, err) => {
  document.getElementById('root').innerHTML = `
    <div style="background:#0f172a;color:#f87171;padding:2rem;font-family:monospace;min-height:100vh">
      <h2 style="color:#f87171;margin-bottom:1rem">App Error</h2>
      <pre style="white-space:pre-wrap;font-size:14px">${msg}\n\n${src}:${line}:${col}</pre>
    </div>`
}

window.onunhandledrejection = (e) => {
  document.getElementById('root').innerHTML = `
    <div style="background:#0f172a;color:#f87171;padding:2rem;font-family:monospace;min-height:100vh">
      <h2 style="color:#f87171;margin-bottom:1rem">Unhandled Promise Error</h2>
      <pre style="white-space:pre-wrap;font-size:14px">${e.reason}</pre>
    </div>`
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
