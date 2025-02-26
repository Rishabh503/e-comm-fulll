import React from 'react'

export const Admin = () => {

  const trialData=
  [
      {
        "name": "Electronics",
        "description": "Devices, gadgets, and accessories for everyday use."
      },
      {
        "name": "Fashion",
        "description": "Trendy clothing, footwear, and accessories."
      },
      {
        "name": "Home & Kitchen",
        "description": "Furniture, appliances, and kitchen essentials."
      },
      {
        "name": "Books",
        "description": "A collection of fiction, non-fiction, and academic books."
      },
      {
        "name": "Sports & Outdoors",
        "description": "Equipment and gear for various sports and outdoor activities."
      },
      {
        "name": "Beauty & Personal Care",
        "description": "Skincare, haircare, and personal grooming products."
      },
      {
        "name": "Toys & Games",
        "description": "Fun and educational toys for all age groups."
      },
      {
        "name": "Automotive",
        "description": "Car accessories, tools, and maintenance products."
      },
      {
        "name": "Health & Wellness",
        "description": "Supplements, fitness gear, and wellness products."
      },
      {
        "name": "Groceries",
        "description": "Daily essentials, fresh produce, and packaged foods."
      }
    ]
  return (
    <section className='bg-orange-50 w-full min-h-screen'>
        <div className='p-4'>
            <div className='text-center items-center flex justify-center bg-blue-500 h-16'>
          <p className='text-3xl text-white'>
            ADMIN PANEL
          </p>
            </div>
            <div className='text-xl'>
            <p className='font-semibold  my-4 text-center'>  Category Information </p>
            </div>
            <div>
              {/* table  */}
              
            </div>
            <div className='gap-4  flex flex-col'>
              {trialData.map((d,i)=>(
                <div className='flex bg-white  justify-between px-4 p-2 gap-5 border  shadow-lg rounded-xl w-full '>
                <div className=''>
                  {i}
                </div>
                <div className='w-1/6 font-semibold '>
                   {d.name}
                </div>
                <div className='w-1/2 '>
                  {d.description}
                </div>
                <div className='flex gap-3 justify-between'>
                    <button className='bg-green-700 rounded-lg text-white py-1 px-2'>
                      Add 
                    </button>
                    <button className='bg-orange-700 rounded-lg text-white py-1 px-2'>
                      View 
                    </button>
                    <button className='bg-blue-700 rounded-lg text-white py-1 px-2'>
                      Edit 
                    </button>
                    <button className='bg-red-700 text-sm rounded-lg text-white py-1 px-2'>
                      Delete 
                    </button>
                </div>
            </div>
              ))}
            </div>
        </div>
    </section>
  )
}
