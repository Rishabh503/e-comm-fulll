import React from 'react'
import { NavLink } from 'react-router'
import { GoAlert } from "react-icons/go";
import { FaPray, FaRegUser } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";


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
                <div className='flex  items-center justify-between gap-4'>
               <div className='items-center flex flex-col'>
                    <FaPray className='' />
                        <NavLink className='text-center' to='/faltu'>
                        Faltu
                        </NavLink>
               </div>
               <div className='items-center flex flex-col'>

                            <TbCategory/>
                        <NavLink to='/start'>
                        
                        Categories
                        </NavLink>
                    </div>
                <div clas>
                <NavLink to='/userDashBoard'>
                <FaRegUser/>
                   Users
                </NavLink>
                </div>
                <NavLink to='/enquiryDashBoard'>
                <IoCallOutline />
                    Enquiries
                </NavLink>
                <NavLink to='/complaintsDashBoard'>
                    <GoAlert/>
                    Complaints
                </NavLink>
                {/* <NavLink to='/bill'>
                     Bill
                </NavLink> */}
                <NavLink to='/billDashBoard'>
                <RiBillLine />
                 Bill 
                </NavLink>
                {/* <p>
                    Cart
                </p> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default NavBar