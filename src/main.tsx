import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from '@/components/app/App';



const root = document.getElementById('root');
if (root !== null && root !== undefined) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  alert("Кореневий елемент не знайдено.")
}