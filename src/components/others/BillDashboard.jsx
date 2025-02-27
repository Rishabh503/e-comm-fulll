import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Dropbox from './DropDown';
import { FaSearch } from "react-icons/fa";
export const BillDashBoard = () => {
  const headers=["Client Name","Order Date","BIll No","Reminder","Status","Warranty"]
  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);

  const items = [
    { billNo: "Important File 1", link: "https://example.com/file1" },
    { billNo: "Document A", link: "https://example.com/docA" },
    { billNo: "Report B", link: "https://example.com/reportB" },
    { billNo: "Image C", link: "https://example.com/imageC" }
  ];

  
  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/bills/getAllBills")
    .then((response)=>{
      if(!response.ok){
        throw new Error("error fetching data")
      }
      return response.json()
    })
    .then((data)=>{
      setData(data);
      console.log(data)
    })
    .catch((error)=>{
      toast.error(error.message)
      console.log("error getting data from backend ",error)
    })
  },[])

  // loading?console.log("data is  loaded",data):console.log("data is being loaded",data);

  const billingData=data.data ||[];
  console.log("this data is of each ",billingData)
  const billedToData=billingData.map(item=>item.billTo) || [];
  console.log("data of users to those the order was shipped",billedToData)
  const reminderData=billingData.map(item=>item.reminder)
  // console.log("data of all reminders :",reminderData)
  console.log(reminderData)

  

  return (
    <section className='min-h-screen w-full'>
      <div className='p-6'>
        <div className='flex justify-between mb-5'>
          <p className='text-center font-semibold'>
            BILL DASHBOARD
          </p>
          <div className='w-3/4 flex items-center gap-2'>
         
            Search
            <FaSearch />
            <input className='bg-gray-200 rounded-md w-3/4 border'  type="text" name="" id="" />
          </div>
        </div>
        <div className=' text-start items-center w-full border'>
        <div  className='w-full flex gap-3 font-semibold'>
            <p className='w-1/5'>Client Name</p>
            <p className='w-1/5'>Order Date</p>
            <p className='w-1/5'>Bill No</p>
            <p className='w-1/5'>Contact</p>
            <p className='w-1/5'>Reminder</p>
            <p className='w-1/5'>Status</p>
          </div>
        </div>
        <div className=' text-start items-center w-full border'>
          {
            billingData.map((item,i)=>(
              <div key={i} className={`w-full border ${i%2==0?"bg-blue-200":"bg-white"}  flex gap-3`}>
                <p className='w-1/5'>
                  
                  {item.billTo.username}
                </p>
                <p className='w-1/5'>
                  {item.billTo.createdAt.slice(0,10)}
                </p>
                <p className='w-1/5'>
                  {item._id.slice(0,7)}
                </p>
                <p className='w-1/5'>
                  {item.contact}
                </p>
                <div className='w-1/5'>
                 <Dropbox items={item.reminder}/>
                </div>
                {/* <p className='w-1/5'>
                  {item.reminder[0].date.slice(0,10)}
                </p> */}
                <p className='w-1/5'>
                  {item.status}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
