import React from 'react'
import Footer from './Footer.jsx'
import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

createRoot(document.getElementById('footer')).render(
  <Footer />
)