import React from 'react'
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <div className="flex min-h-screen w-full h-full justify-center items-center  bg-[#121212] text-white">
          <div className=" h-full w-full rounded-lg -mt-32  flex">
            <div className="w-1/2 h-auto p-4  flex flex-col items-start justify-center gap-4  border-[#FFA500] rounded-lg mr-4">
              <h2 className="text-4xl font-bold">E-COMMERECE WEBSITE</h2>
              <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat veniam ipsum voluptates aliquid ducimus adipisci, accusantium itaque corrupti animi, numquam distinctio dolorum laboriosam inventore error temporibus quas. Consectetur, dolor velit!</p>
              <div className='flex justify-between gap-5'>
              <NavLink to='/start' className="mt-2 px-4 py-2 bg-[#FFA500] text-[#121212] rounded">Start Shopping</NavLink>
              <NavLink to='/register'
                className="mt-2 px-4 py-2 bg-[#FFA500] text-[#121212] rounded">New User ?</NavLink>
              </div>
              
            </div>
            <div className="w-1/2 p-4 h-auto  -[#FFA500] rounded-lg flex justify-center items-center">
                <div className='h-3/4 w-3/4'>
                <img src="photo1.png" alt="" />
                </div>
        
            </div>
          </div>
        </div>
      );
}

export default Home