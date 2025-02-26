import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import RegisterReal from './components/forms/RegisterReal.jsx'
import LoginForm from './components/forms/Login.jsx'
import { RouterProvider } from 'react-router-dom'
import Home from './components/desgin/Home.jsx'

const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route path='/register' element={<RegisterReal/>}/>
          <Route path='' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
      </Route>

    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
