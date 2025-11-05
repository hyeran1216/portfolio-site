import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './app/app.jsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename="/portfolio-site">
      <App />
    </HashRouter>
  </StrictMode>,
)
