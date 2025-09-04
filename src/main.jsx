import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.jsx'
import {ShopContextProvider} from './context/ShopContext.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ShopContextProvider>
        <RouterProvider router={router}></RouterProvider>
     </ShopContextProvider>
  </StrictMode>,
)
