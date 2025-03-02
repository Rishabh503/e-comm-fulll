import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { EnquiryForm } from '../enquiry/EnquiryForm'
import { useNavigate } from 'react-router'

const ComplaintDashBoard = () => {
    const [text,setText]=useState("")
  const [loading,setloading]=useState(false);
    const [data,setData]=useState([]);
    const [search,setSearch]=useState("")
    const navigate=useNavigate();
   useEffect(()=>{
    fetch(  "http://localhost:5000/api/v1/complaint/allComplaints")
    .then((response)=>{
        if(!response.ok){
            throw new Error("respose from backend didnt came")
        }
        return response.json();
    })
    .then((data)=>{
        setData(data)
        setloading(true)
    })
   },[])    

   const complaintData=data.data || []
   console.log("data from backend",data.data)

   const filteredData=complaintData.filter((complanints)=>
          complanints.user.username.toLowerCase().includes(search.toLocaleLowerCase())  ||
          complanints.createdAt.includes(search)  ||
          complanints.user.contact.toString().includes(search) ||
          complanints.device.includes(search) ||
          complanints.status.includes(search)
        //   complanints.problem.includes(search)
   ) || []
  return (
    <section className="min-h-screen w-full">
       <div className="w-full  mx-auto p-6">
              <div className="flex  justify-between">
                          <p className="w-[20%] text-2xl font-semibold">
                            Complaint Dashboard
                          </p>
                          <div className="w-full px-24 flex mb-5 justify-betweeen items-center">
                              <p className="text-lg">Search </p>
                              <FaSearch/>
                              <input className="w-[60%] border rounded-lg  bg-gray-200" type="text" onChange={(e)=>{setSearch(e.target.value)}} />
                          </div>
                          {/* <button onClick={()=>navigate('/enquiryForm')} className="w-auto bg-yellow-300 rounded-sm text-gray-800 px-3 mb-3">
                              Create New Enquiry
                          </button> */}
                         {/* <EnquiryForm/> */}
                      </div>

        <div className="grid grid-cols-8  bg-gray-200 text-gray-800 font-semibold p-3 rounded-md">
                            <span>Company Name</span>
                            <span>Date</span>
                            <span>Contact</span>
                            <span>Problem</span>
                            <span>Device</span>
                            <span>Description</span>
                            <span>Status</span>
                            <span>Action</span>
      </div>
                
                <div >
                        {
                            filteredData.map((complaint,i)=>(
                                // console.log(complaint)
                             <div key={i} className={`grid grid-cols-8 ${i%2!=0?"bg-[#97e0bb]":"bg-white"}  text-gray-800 font-semibold p-3 rounded-md`}>
                                <span>
                                    {complaint.user.username}
                                </span>
                                <span>
                                    {complaint.createdAt.slice(0,10)}
                                </span>
                                <span>
                                    {complaint.user.contact}
                                </span>
                                <span>
                                    {complaint.complaint}
                                </span>
                                <span>
                                    {complaint.device}
                                </span>
                                <span>
                                    {complaint.text}
                                </span>
                                <span>
                                    {complaint.status}
                                </span>
                                <button onClick={()=>navigate(`/complaint/${complaint._id}`)} className="bg-[#4f8fd3] h-10 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            View
          </button>
                             </div>

                            ))
                        }
                </div>

        </div>

    </section>
  )
}

export default ComplaintDashBoard