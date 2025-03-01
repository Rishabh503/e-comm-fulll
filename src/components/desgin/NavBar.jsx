import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <section className='w-full h-auto bg-gray-950 text-white'>
        <div className='p-4  border-red-200' >
            <div className='p-3 flex justify-between'>
                <div>
                   <NavLink to='/'>
                   E-COMMERECE  PLATFORM
                   </NavLink>
                </div>
                <div className='flex justify-between gap-4'>
                <NavLink to='/faltu'>
                   Faltu 😂
                </NavLink>
                <NavLink to='/start'>
                   Categories
                </NavLink>
                <NavLink to='/userDashBoard'>
                   Users
                </NavLink>
                <NavLink to='/enquiryDashBoard'>
                    Enquiries
                </NavLink>
                <NavLink to='/complaintsDashBoard'>
                    Complaints
                </NavLink>
                {/* <NavLink to='/bill'>
                     Bill
                </NavLink> */}
                <NavLink to='/billDashBoard'>
                 Bill DashBoard
                </NavLink>
                <p>
                    Cart
                </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavBar