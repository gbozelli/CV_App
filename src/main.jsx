import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import General from './components/General.jsx'
import Educational from './components/Educational.jsx'
import Pratical from './components/Pratical.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
    <Educational />
    <Pratical />
  </StrictMode>,
)
