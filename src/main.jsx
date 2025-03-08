import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { BillDashBoard } from './components/bills/BillDashboard.jsx'
import BillView from './components/bills/BillView'
import Start from './components/categories/Main.jsx'
import ComplaintDashBoard from './components/complaints/ComplaintDashBoard'
import ComplaintDetails from './components/complaints/ComplaintView'
import Home from './components/desgin/Home.jsx'
import EnquiryDashboard from './components/enquiry/EnquiryDashBoard.jsx'
import EnquiryDetails from './components/enquiry/EnquiryDetails.jsx'
import { EnquiryForm } from './components/enquiry/EnquiryForm'
import LoginForm from './components/forms/Login.jsx'
import RegisterReal from './components/forms/RegisterReal.jsx'
import { Trial } from './components/others/Trial'
import { Visit } from './components/others/Visit.jsx'
import UserDashboard from './components/users/UserDashBoard'
import './index.css'
import { Admin } from './pages/Admin.jsx'
import ExistingUserBillForm from './components/bills/ExisitingUserBillForm.jsx'


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
          <Route path='/faltu' element={<ExistingUserBillForm/>}/>
          <Route path='/billDashBoard' element={<BillDashBoard/>}/>
          <Route path='/billView/:billId' element={<BillView/>}/>
          

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
