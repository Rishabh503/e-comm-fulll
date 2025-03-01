import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ComplaintDetails = () => {
  const { complaintId } = useParams();
  const [complaint, setComplaint] = useState({});
  const [loading, setLoading] = useState(false);
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
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/v1/complaints/getComplaint/${complaintId}`)
//       .then((response) => {
//         if (!response.ok) throw new Error("Error fetching the response");
//         return response.json();
//       })
//       .then((data) => {
//         setComplaint(data);
//         setLoading(true);
//       })
//       .catch((e) => console.log("Error getting data from backend", e));
//   }, []);

//   const complaintData = complaint.data || {};
//   console.log("Complaint Data:", complaintData);

//   const followUpData = complaintData.followUps || [];
//   console.log("Follow-Ups Data:", followUpData);
const complaintData=complaint2;
  return (
    <section className="min-h-screen w-full p-10">
      <div className="w-full mx-auto p-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          <span className="font-semibold">Complaint:</span> {complaintData.complaint}
        </h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-lg">
          <p><strong>Status:</strong> {complaintData.status}</p>
          <p><strong>Device:</strong> {complaintData.device}</p>
          <p><strong>Description:</strong> {complaintData.text}</p>
          <p><strong>Created At:</strong> {new Date(complaintData.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(complaintData.updatedAt).toLocaleString()}</p>
        </div>

        {/* User Details */}
        {complaintData.user && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">User Details</h3>
            <p><strong>Name:</strong> {complaintData.user.fullName}</p>
            <p><strong>Username:</strong> {complaintData.user.username}</p>
            <p><strong>Email:</strong> {complaintData.user.email}</p>
            <p><strong>Contact:</strong> {complaintData.user.contact}</p>
            <p><strong>Address:</strong> {complaintData.user.address}</p>
            <img
              src={complaintData.user.avatarUrl}
              alt="User Avatar"
              className="w-24 h-24 rounded-full mt-3"
            />
          </div>
        )}

        {/* Follow-Ups Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Follow-Ups</h3>
          {loading && followUpData.length > 0 ? (
            <div className="flex flex-col gap-4 text-gray-700">
              {followUpData.map((followUp, index) => (
                <div className="border p-4 shadow-md rounded-lg" key={index}>
                  <p className="text-lg"><strong>Remarks:</strong> {followUp.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No follow-ups recorded</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComplaintDetails;
