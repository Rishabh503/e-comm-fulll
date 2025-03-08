// import { error } from "console";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const BillView = () => {
    const billId=useParams()
    // console.log("hs",billId.billId)
    const [billData,setBillData]=useState({});
    const [loading,setLoading]=useState(true)
   const n= {
        "billTo": {
            "_id": "67c4c0127ca33d75b2011b76",
            "username": "akash ahemdabad",
            "email": "akaashahmehdaaba@2",
            "fullName": "Akash Ahemdabad",
            "contact": "2565859426",
            "address": "ahmedahba bhide ka ghar",
            "avatarUrl": "http://res.cloudinary.com/dhe9p6bo0/image/upload/v1740947475/tgdnp3hkgm0dcvljascp.png",
            "orderHistory": [],
            "password": "$2b$10$tuSwvnfQBL34Hjsnwp7KgOROVzQhbO5qWovDqpT8.LD2hipJ0Wliy",
            "complaints": [
                "67cb2ae5532d734d4a095028"
            ],
            "bills": [
                "67cc12088ea46a11866358a3",
                "67cc129b0919cf85b04f4832"
            ],
            "createdAt": "2025-03-02T20:31:14.969Z",
            "updatedAt": "2025-03-08T09:49:15.990Z",
            "__v": 3
        },
        "amount": 250000,
        "date": "2025-11-02T18:30:00.000Z",
        "contact": 2565859426,
        "email": "akaashahmehdaaba@2",
        "status": "pending",
        "reminder": [
            "67cc129c0919cf85b04f4836",
            "67cc129c0919cf85b04f4839",
            "67cc129c0919cf85b04f483c",
            "67cc129c0919cf85b04f483f"
        ],
        "warranty": 1,
        "billUrl": "http://res.cloudinary.com/dhe9p6bo0/raw/upload/v1741427364/bhavwhhbbfew609jyqsa.docx",
        "_id": "67cc129b0919cf85b04f4832",
        "createdAt": "2025-03-08T09:49:15.922Z",
        "updatedAt": "2025-03-08T09:49:16.321Z",
        "__v": 1
    }
//   if (!billData) return <p className="text-center text-gray-500">No data available</p>;

  const { amount, billTo, billUrl, reminder } = billData;
  let newBill={}
 useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/bills/getOneBill/${billId.billId}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error("couldnot recive data from backend")
        }
        return response.json()
    })
    .then((data)=>{
        setBillData(data.data);
        setLoading(false)
        // console.log(data)
        newBill=data;
 })
    .catch((e)=>{
        console.log("error is",error)
    })
 },[])
 console.log("new bill",billData)
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-10 py-8 mt-10 bg-gray-100">
      {/* Bill Details */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Bill Details</h1>
        {!loading?
        <div className="grid grid-cols-2 gap-6 text-gray-600">
          <p><strong>Amount:</strong> ₹{amount}</p>
          <p><strong>Full Name:</strong> {billTo.fullName}</p>
          <p><strong>Warranty</strong> {billData.warranty}</p>
          <p><strong>Date</strong> {billData.date.slice(0,10)}</p>
          <p><strong>Contact:</strong> {billTo.contact}</p>
          <p><strong>Email:</strong> {billTo.email}</p>
          <p><strong>Address:</strong> {billTo.address}</p>
        </div>
:""}
        {/* File Display */}
        {!loading?<div className=" flex items-center gap-3 mt-6">
          <h2 className="text-lg font-medium text-gray-700">Attached File:</h2>
         <a href={billData.billUrl}>Bill PDF</a>
        </div>:""}
      </div>

      {/* Reminder Section */}
      <div className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reminders</h2>
        <table className="w-full border-collapse border border-gray-300 text-gray-600">
          <thead className="bg-gray-200">
            <tr>
              {/* <th className="border border-gray-300 px-4 py-2">Bill No.</th> */}
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Fulfilled</th>
            </tr>
          </thead>
          <tbody>
            {!loading?reminder.map((rem, index) => (
              <tr key={index} className="text-center">
                {/* <td className="border border-gray-300 px-4 py-2">{rem.billNo}</td> */}
                <td className="border border-gray-300 px-4 py-2">{new Date(rem.date).toLocaleDateString()}</td>
                <td className="border border-gray-300 px-4 py-2">{rem.status}</td>
                <td className="border border-gray-300 px-4 py-2">{rem.fulfilled ? "✅ Yes" : "❌ No"}</td>
              </tr>
            )):""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillView;
