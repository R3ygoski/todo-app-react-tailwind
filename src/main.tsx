import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToDoListProvider } from './context/ToDoListContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ToDoListProvider>
    <App />
  </ToDoListProvider>,
)
