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
                <p>
                   Products
                </p>
                <p>
                    Categories
                </p>
                <p>
                     Account
                </p>
                <p>
                  About Us
                </p>
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