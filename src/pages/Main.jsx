import React, { useEffect, useState } from 'react'

const Start =  () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true)
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
          let responseData;

   useEffect(()=>{
    fetch("http://localhost:5000/api/v1/categories/allCategories")
    .then((response)=>{
        if(!response.ok){
            throw new Error("Network response not ok ")
        }
        return response.json();
    })
    .then((data)=>{
        setData(data);
        setLoading(false)
    }).catch((e)=>console.log(e))

   },[])
   console.log(data.data)
  return (
    <section className='bg-gray-800 min-h-screen w-full'>
        <div className='p-4 text-white'>
            <div className='p-4'>
                <div className=''>
                 <p className='text-2xl mb-2'>
                    Browse By Categories   
                 </p>
                </div>
                <div className='flex w-full gap-5 overflow-auto'>
                    {!loading?
                    data.data.map((d,i)=>(
                        <div key={i} className='bg-gray-950 shadow-lg rounded-lg text-white w-1/4 flex-shrink-0  flex flex-col px-2 py-1 gap-4 h-auto '>
                            <div className='flex items-center justify-center '>
                               <div className='h-1/2 w-1/2  '>
                               <img src="image2.png" alt="" />
                               </div>
                            </div>
                            <div className='mt-10'>
                                <p className='text-2xl font-semibold text-gray-200'>{d.name}</p>
                                <p className='text-gray-500'>
                                    description:{d.description}
                                </p>
                                <br /><br />
                            </div>
                        </div>
                    )):"data is being loaded"}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start