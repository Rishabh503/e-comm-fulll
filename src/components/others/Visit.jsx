import React, { useEffect, useState } from "react";

export const Visit = () => {
  const [data,setData]=useState({
    visitTo: {
      username:"abcd"
    },
    visitedBy: "Rahul Sharma",
    date: "2025-02-27",
    problem: "Received a faulty smartphone with screen flickering issues.",
    reminderReference:{
      "._id":"123456y"
    },
    status: "Pending",
    location: "Delhi",
    text: "Purchased a phone, but the screen flickers. Customer care is unresponsive. Need immediate resolution.",
  })
  

  useEffect(()=>{
    fetch("http://localhost:5000/api/v1/visits/showVisit/67c081fd2d8d3b10e08c3606")
    .then((response)=>{
      if(!response.ok) throw new Error("error gettig data")
        return response.json()
    }).then((data)=>{
      setData(data.data)
      console.log(data.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  },[])

  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-gray-100 p-5">
      <div className="shadow-lg p-8 rounded-lg border bg-white max-w-3xl w-full">
        <h2 className="text-center text-3xl font-semibold mb-6">Visit Details</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-lg">
              <span className="font-semibold">Visit:</span> {data.visitTo.username}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Visited By:</span> {data.visitedBy}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Date:</span> {data.dateOfVisit}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Problem:</span> {data.problem}
            </p>
          </div>
          <div>
            <p className="text-lg">
              <span className="font-semibold">Reminder:</span> {data.reminderReference._id}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Status:</span> {data.status}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Location:</span> {data.location}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <label className="text-lg font-semibold">Complaint To Be Raised (if any)</label>
          <textarea
            className="border w-full mt-2 p-3 rounded-md"
            cols={60}
            rows={4}
            value={data.textArea}
            readOnly
          ></textarea>
        </div>

        <div className="mt-5">
          <label className="text-lg font-semibold">Upload Documents</label>
          <input
            className="border w-full p-2 rounded-md mt-2"
            type="file"
          />
        </div>
      </div>
    </section>
  );
};
