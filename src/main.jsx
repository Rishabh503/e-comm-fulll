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
import Main from './pages/Main.jsx'
import Start from './pages/Main.jsx'
import { Admin } from './pages/Admin.jsx'
import BillForm from './components/others/Bill.jsx'
import { BillDashBoard } from './components/others/BillDashboard.jsx'
import Dropbox from './components/others/DropDown.jsx'
import { Visit } from './components/others/Visit.jsx'
import EnquiryDashboard from './components/enquiry/EnquiryDashBoard.jsx'
import EnquiryDetails from './components/enquiry/EnquiryDetails.jsx'
import {Trial} from './components/others/Trial'
import { EnquiryForm } from './components/enquiry/EnquiryForm'
import ComplaintDashBoard from './components/complaints/ComplaintDashBoard'
import ComplaintDetails from './components/complaints/ComplaintView'
import UserDashboard from './components/users/UserDashBoard'
import { CollapsibleDemo } from './components/others/CollapsibleDemo'


const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
          <Route path='/register' element={<RegisterReal/>}/>
          <Route path='' element={<Home/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/start' element={<Start/>}/>
          <Route path='/admin' element={<Admin/>}/>
          {/* for trying */}
          <Route path='/box' element={<Trial/>}/>  
          <Route path='/visit' element={<Visit/>}/>
          <Route path='/faltu' element={<CollapsibleDemo/>}/>
          <Route path='/billDashBoard' element={<BillDashBoard/>}/>
          <Route path='/complaintsDashBoard' element={<ComplaintDashBoard/>}/>
          <Route path='/complaint' element={<ComplaintDetails/>}/>
          <Route path='/complaint/:complaintId' element={<ComplaintDetails/>}/>

          <Route path='/enquiryDashBoard' element={<EnquiryDashboard/>}/>
          <Route path='/enquiryForm' element={<EnquiryForm/>}/>
          <Route path='/enquiry/:enquiryId' element={<EnquiryDetails/>}/>

          <Route path='/userDashBoard' element={<UserDashboard/>}/>
      </Route>

    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
