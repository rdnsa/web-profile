import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import './styles/global.css'

createRoot(document.querySelector<HTMLDivElement>('#app')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
