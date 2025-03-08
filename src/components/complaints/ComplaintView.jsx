import { configDotenv } from "dotenv";
import React, { useEffect, useState } from "react";
import { FaHome, FaHouseUser } from "react-icons/fa";
import { useParams } from "react-router";
import { IoIosPersonAdd } from "react-icons/io";
import { VisitComplaint } from "./VisitComplaint";
import { FollowUpComplaint } from "./FollowUpComplaint";
const ComplaintDetails = () => {
  const { complaintId } = useParams();
  console.log(complaintId)
  const [complaint, setComplaint] = useState({});
  const [loading, setLoading] = useState(false);

  // const complaintId="67c2f33737db3ab612eb7694";
  const complaint2={
    "complaint": "test complaint part 1",
    "createdAt": "2025-03-01T11:44:55.512Z",
    "device": "2231hd",
    "followUps": [],
    "status": "pending",
    "text": "lorem ipsum donor to be khiod haibd e",
    "updatedAt": "2025-03-01T11:44:55.512Z",
    "user": {
      "address": "bxjsb chjdbchjdcjdc cdv a",
      "avatarUrl": "http://res.cloudinary.com/dhep9bobe/image/upload/v1749673272/ectnonplobzektvsn015.jpg",
      "complaints": [
        "67c2f55837bb8ded2d6218a",
        "67c2f55837bb8ded2d62196"
      ],
      "contact": "9655578515",
      "createdAt": "2025-02-27T16:21:11.418Z",
      "email": "abha2000ebd",
      "fullName": "abha",
      "orderHistory": [],
      "password": "25b0185zt5aDUldfz91s5r9Y.DgX0W3eylnehk4X0eKV3UGywF39XG60gso",
      "updatedAt": "2025-03-01T11:54:02.876Z",
      "username": "abha",
      "_id": "67c09e8f7b7cf9f31bd097ac"
    },
    "visits": [
      {
        "_id": "67c2f337d3bab612eb7694"
      }
    ]
  }
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/complaint/getComplaint/${complaintId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error fetching the response");
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setComplaint(data);
        setLoading(true);
      })
      .catch((e) => console.log("Error getting data from backend", e));
  }, []);

  const complaintData = complaint.data || {};
  console.log("Complaint Data:", complaintData);
  const avatarUrl=loading?complaintData.user.avatarUrl:"" ;
  const followUpData = complaintData.followUps || [];
  console.log("Follow-Ups Data:", followUpData);
  const visits=complaintData.visits ||[]
  console.log("visits Data:", visits);
// const complaintData=complaint2;
  return (
    <section className="min-h-screen  w-full p-10">
      <div className="w-full mx-auto p-5 bg-red-200 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          <span className="font-semibold">Complaint:</span> {complaintData.complaint}
        </h2>
          {/* details */}
        <div className="flex">    
          <div className=" w-1/2  text-gray-700 text-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Complaint Details</h3>
          <p><strong>Status:</strong> {complaintData.status}</p>
          <p><strong>Device:</strong> {complaintData.device}</p>
          <p><strong>Description:</strong> {complaintData.text}</p>
          <p><strong>Created At:</strong> {new Date(complaintData.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(complaintData.updatedAt).toLocaleString()}</p>
        </div>

      
        {complaintData.user && (
          <div className=" w-1/2  text-gray-700 text-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">User Details</h3>
            <p><strong>Name:</strong> {complaintData.user.fullName}</p>
            <p><strong>Username:</strong> {complaintData.user.username}</p>
            <p><strong>Email:</strong> {complaintData.user.email}</p>
            <p><strong>Contact:</strong> {complaintData.user.contact}</p>
            <p><strong>Address:</strong> {complaintData.user.address}</p>
         
          </div>
        )}

        <div className="w-[8%]">
        <img
                        src={avatarUrl}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mt-3"
                      />
        </div>
      </div>
        
        {/* visitst */}
        <div className="p-1">
            <div className="flex items-center my-5 justify-between">
              <h1 className="font-semibold  text-xl">VISITS</h1>
              <button >
            <span className="text-3xl text-blue-700"> 
         <VisitComplaint display={ <FaHouseUser />} id={complaintId}/>
              </span>
              </button>
            </div>
          <div className="border px-2 min-h-10 border-black font-semibold text-lg  flex">
                      <p className="w-1/4">Visited By</p>
                      <p className="w-1/4">Date</p>
                      <p className="w-1/4">Details</p>
                      <p className="w-1/4">Status</p>
                 </div>
            
              {
                visits.map((followUp)=>(
                  <div className="border px-2 min-h-10 border-black flex">
                      <p className="w-1/4">{followUp.visitedBy}</p>
                      <p className="w-1/4">{followUp.dateOfVisit.slice(0,10)}</p>
                      <p className="w-1/4">{followUp.textArea}</p>
                      <p className="w-1/4">{followUp.status}</p>
                 </div>
                ))
              }
          </div>

        {/* follow Section */}
          <div className="p-1">
            <div className="flex items-center my-5 justify-between">
              <h1 className="font-semibold  text-xl">FOLLOW UPS</h1>
              <button>
                
            <span className="text-3xl text-blue-700">  <FollowUpComplaint id={complaintId} display={<IoIosPersonAdd/>}/> </span>
              </button>
            </div>
          <div className="border border-black px-2 min-h-10 font-semibold text-lg  flex">
                      <p className="w-1/4">Name</p>
                      <p className="w-1/4">Contact</p>
                      <p className="w-1/4">Text</p>
                      <p className="w-1/4">Date</p>
                 </div>
            
              {
                followUpData.map((followUp)=>(
                  <div className="border min-h-10 px-2 border-black flex">
                      <p className="w-1/4">{followUp.name}</p>
                      <p className="w-1/4">{followUp.contact}</p>
                      <p className="w-1/4">{followUp.text}</p>
                      <p className="w-1/4">{followUp.date.slice(0,10)}</p>
                 </div>
                ))
              }
          </div>

         
      </div>
    </section>
  );
};

export default ComplaintDetails;
