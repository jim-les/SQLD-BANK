import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import tailwindcss from 'tailwindcss';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
