import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/general.css'
import './styles/navbar.css'
import './styles/mainPage/mainPage.css'
import './styles/mainPage/mainPageLeft/mainPageLeft.css'
import './styles/mainPage/mainPageLeft/filters.css'
import './styles/mainPage/mainPageRight/mainPageRight.css'
import './styles/mainPage/mainPageRight/top.css'
import './styles/mainPage/mainPageRight/bottom.css'

createRoot(document.getElementById('root')).render(
  <App />
)
