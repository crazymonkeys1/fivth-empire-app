import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { ClockProvider } from './ClockContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClockProvider>
      <App />
    </ClockProvider>
  </StrictMode>,
)
