import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import General from './components/General.jsx'
import Educational from './components/Educational.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <General />
    <Educational />
  </StrictMode>,
)
