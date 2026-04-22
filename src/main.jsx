import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <--- IF THIS IS MISSING, EVERYTHING IS WHITE

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)