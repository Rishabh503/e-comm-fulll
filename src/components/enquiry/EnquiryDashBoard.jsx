import React, { use, useEffect, useState } from "react";
import { BillDashBoard } from "../others/BillDashboard";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { EnquiryForm } from "./EnquiryForm";
// const enquiries =[
//     {
//       "companyName": "Tata Consultancy Services",
//       "date": "2025-02-28",
//       "contact": "9876543210",
//       "problem": "Software bug in production",
//       "requirements": "Urgent debugging and patch deployment",
//       "status": "Pending"
//     },
//     {
//       "companyName": "Infosys Ltd",
//       "date": "2025-02-27",
//       "contact": "9898989898",
//       "problem": "Cloud server downtime",
//       "requirements": "Migration to AWS with high availability setup",
//       "status": "In Progress"
//     },
//     {
//       "companyName": "Wipro Technologies",
//       "date": "2025-02-26",
//       "contact": "9765432109",
//       "problem": "Network security breach",
//       "requirements": "Advanced firewall and cybersecurity solutions",
//       "status": "Resolved"
//     },
//     {
//       "companyName": "HCL Technologies",
//       "date": "2025-02-25",
//       "contact": "9856234789",
//       "problem": "Data loss due to power outage",
//       "requirements": "Automated backup and recovery solution",
//       "status": "Pending"
//     },
//     {
//       "companyName": "Tech Mahindra",
//       "date": "2025-02-24",
//       "contact": "9988776655",
//       "problem": "Employee portal crashing frequently",
//       "requirements": "Complete system overhaul and performance optimization",
//       "status": "In Progress"
//     },
//     {
//       "companyName": "Mindtree Ltd",
//       "date": "2025-02-23",
//       "contact": "9765544332",
//       "problem": "ERP software not responding",
//       "requirements": "Upgrade to latest ERP version with custom features",
//       "status": "Resolved"
//     },
//     {
//       "companyName": "L&T Infotech",
//       "date": "2025-02-22",
//       "contact": "9845123678",
//       "problem": "Database migration issues",
//       "requirements": "Expert assistance in migrating from Oracle to PostgreSQL",
//       "status": "Pending"
//     },
//     {
//       "companyName": "Capgemini India",
//       "date": "2025-02-21",
//       "contact": "9990001112",
//       "problem": "Website performance degradation",
//       "requirements": "Full-stack performance audit and optimization",
//       "status": "In Progress"
//     },
//     {
//       "companyName": "Cognizant",
//       "date": "2025-02-20",
//       "contact": "9988007766",
//       "problem": "Mobile app crashing on startup",
//       "requirements": "Bug fixes and testing across all platforms",
//       "status": "Resolved"
//     },
//     {
//       "companyName": "IBM India",
//       "date": "2025-02-19",
//       "contact": "9876123456",
//       "problem": "AI chatbot not functioning properly",
//       "requirements": "Enhance NLP model and improve response accuracy",
//       "status": "Pending"
//     }
//   ]


const EnquiryDashboard = () => {


  
        const [data,setData]=useState([]);
        const [loading,setloading]=useState(false);
        const [selectedEnquiry,setSelectedEnquiry]=useState(false);
        const [search,setSearch]=useState('')
        const navigate=useNavigate()
        const [newEnquiry,setNewEnquiry]=useState(false)

        useEffect(()=>{
          fetch(
            "http://localhost:5000/api/v1/enquiry/getALlEnquires"
          ).then((response)=>{
            if(!response.ok){
              throw new Error("couldnot get the repsone")
            }
            return response.json();
          }).then(
            (data)=>{
              setData(data);
              setloading(true);
              
            }
          ).catch((e)=>(console.log(e)))
        },[])

// {loading?console.log(data):""}

    const enquiryData=data.data||[];
    {loading?console.log("enquiry ka data",enquiryData):""}

    const handleOnClick=(e)=>{
      console.log(`{e}`)
    //  navigate('/bill-dashboard/${id}');
        navigate(`/enquiry/${e}`)
    }

    const filteredData=enquiryData.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.companyName.toLowerCase().includes(search.toLowerCase()) ||
    item.contact.toString().includes(search) ||
    item.createdAt.includes(search) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  ) ||enquiryData
   

    console.log("search ka data",filteredData)

  return (
    <section className="min-h-screen w-full">
        <div className="w-full  mx-auto p-6">
          <div className="flex  justify-between">
              <p className="w-[20%] text-2xl font-semibold">
                Enquiry Dashboard
              </p>
              <div className="w-full px-24 flex mb-5 justify-betweeen items-center">
                  <p className="text-lg">Search </p>
                  <FaSearch/>
                  <input className="w-[60%] border rounded-lg  bg-gray-200" type="text" onChange={(e)=>{setSearch(e.target.value)}} />
              </div>
              {/* <button onClick={()=>navigate('/enquiryForm')} className="w-auto bg-yellow-300 rounded-sm text-gray-800 px-3 mb-3">
                  Create New Enquiry
              </button> */}
             <EnquiryForm/>
          </div>
      <div className="grid grid-cols-7 bg-gray-200 text-gray-800 font-semibold p-3 rounded-md">
        <span>Company Name</span>
        <span>Date</span>
        <span>Contact</span>
        <span>Problem</span>
        <span>Requirements</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      {filteredData.map((enquiry, index) => (
        <div
          key={index}
          className={`grid ${index%2==0?"bg-red-200":"bg-white"} grid-cols-7 gap-5 h-12 items-center border-b border-gray-300 p-3`}
        >
          <span className="truncate">{enquiry.companyName}</span>
          <span>{enquiry.createdAt.slice(0,10)}</span>
          <span>{enquiry.contact}</span>
          <span className="truncate">{enquiry.problem}</span>
          <span className="truncate">{enquiry.requirements}</span>
          <span
            className={`px-3 py-1 rounded-md text-white text-sm ${
              enquiry.status === "Pending"
                ? "bg-yellow-500"
                : enquiry.status === "In Progress"
                ? "bg-blue-500"
                : "bg-green-500"
            }`}
          >
            {enquiry.status}
          </span>
          <button onClick={()=>handleOnClick(`${enquiry._id}`)} className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            View
          </button>
        </div>
      ))}
    </div>
    </section>
  );
};

export default EnquiryDashboard;
