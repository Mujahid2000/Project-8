import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import myCreateRoute from './Routeer/Routeer'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>,
)
