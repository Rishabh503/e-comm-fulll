import { Dialog } from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Trial } from "../others/Trial";
import { Quotation } from "../others/Quotation";

const EnquiryDetails = () => {
  const { enquiryId } = useParams();
  const [enquiry, setEnquiry] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/enquiry/getEnquiry/${enquiryId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error fetching the response");
        return response.json();
      })
      .then((data) => {
        setEnquiry(data);
        setLoading(true);
      })
      .catch((e) => console.log("Error getting data from backend", e));
  }, []);

  const enquiryData = enquiry.data || {};
  console.log("Enquiry Data:", enquiryData);

  const followUpData = enquiryData.followUps || [];
  console.log("Follow-Ups Data:", followUpData);

  const visitsData = enquiryData.visits || [];
  console.log("Visits Data:", visitsData);

  const quotations=enquiryData.quotations ||[];
  return (
    <section className="min-h-screen w-full p-10">
      <div className="w-full mx-auto p-5 bg-white shadow-lg rounded-lg">
        {/* Company Name */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        <span className="font-semibold">
            Enquiry:
        </span>  
            {enquiryData.companyName}
        </h2>

        {/* Details Section */}
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-lg">
          <p><strong>Address:</strong> {enquiryData.address}</p>
          <p><strong>Contact:</strong> {enquiryData.contact}</p>
          <p><strong>Person Name:</strong> {enquiryData.name}</p>
          <p><strong>Problem:</strong> {enquiryData.problem}</p>
          <p><strong>Requirements:</strong> {enquiryData.requirements}</p>
          <p><strong>Created At:</strong> {new Date(enquiryData.createdAt).toLocaleString()}</p>
          <p className="col-span-2">
            <span className={`text-white font-bold py-1 px-3 inline-block rounded-md ${
              enquiryData.status === "pending" ? "bg-yellow-500" : "bg-green-500"
            }`}>
              {loading ? enquiryData.status.toUpperCase() : ""}
            </span>
          </p>

          <p><strong>Id:</strong> {enquiryData._id}</p>
        </div>

        {/* Assign Buttons */}
        <div className="flex justify-between mt-6">
         
          
        </div>

        {/* Visits Section */}
        <div className="mt-8">
<div className="flex justify-between my-6">
<h3 className="text-2xl font-semibold text-gray-800 mb-3">Visits</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            <Trial display={"assing new visit"}/>
          </button>
</div>
          {visitsData.length > 0 ? (
            <div className="flex flex-col gap-4 text-gray-700">
              {visitsData.map((visit, index) => (
                <div className="border p-4 shadow-md rounded-lg" key={index}>
                  <div className="flex justify-between items-center">
                    <p className="text-xl">
                      Visited By: <span className="font-semibold">{visit.visitedBy}</span>
                    </p>
                    <p className="text-lg">{visit.dateOfVisit.slice(0, 10)}</p>
                  </div>
                  <div className="flex justify-between">
                        <p className="text-gray-600 mt-2">
                    <strong>Remarks:</strong> {visit.textArea}
                  </p>
                  <p className="col-span-2">
            <span className={`text-white font-bold py-1 px-3 inline-block rounded-md ${
              enquiryData.status === "pending" ? "bg-yellow-500" : "bg-green-500"
            }`}>
              {loading ? enquiryData.status.toUpperCase() : ""}
            </span>
          </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No visits recorded</p>
          )}
        </div>
        <div className="mt-8">
<div className="flex justify-between my-6">
<h3 className="text-2xl font-semibold text-gray-800 mb-3">Quotations</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            <Quotation display={"Add New Quotation"}/>
          </button>
</div>
          {quotations.length > 0 ? (
            <div className="flex flex-col gap-4 text-gray-700">
              {quotations.map((visit, index) => (
                <div className="border p-4 shadow-md rounded-lg" key={index}>
                  <div className="flex justify-between items-center">
                  <p className="text-lg">{visit.date.slice(0, 10)}</p>
                    <p className="text-xl">
                      Quoted Amount: <span className="font-semibold">{visit.price}</span>
                    </p>

                  
                    <p className="text-white bg-green-600 rounded-lg text-2xl px-5 py-1 mt-2">
                    <a href={visit.fileUrl}>PDF</a>
                  </p>
                  </div>
                  <div className="flex justify-between">
                     
                  <p className="col-span-2">
           
          </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No visits recorded</p>
          )}
        </div>

        {/* Follow-Ups Section */}
    

        <div className="mt-8">
        <div className="mt-8 mb-8 flex justify-between">
       <h3 className="text-2xl font-semibold text-gray-800 mb-3">Follow-Ups</h3>
       <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
           <Trial display={"Assign a New Follow Up"}/>
          </button>
       </div>
          {loading && followUpData.length > 0 ? (
            <div className="flex flex-col gap-4 text-gray-700">
              {followUpData.map((followUp, index) => (
                <div className="border p-4 shadow-md rounded-lg" key={index}>
                  <div className="flex justify-between items-center">
                    <p className="text-xl">
                      Followed Up By: <span className="font-semibold">{followUp.name}</span>
                    </p>
                    <p className="text-lg">{followUp.date.slice(0, 10)}</p>
                  </div>
                  <p className="text-gray-600 mt-2">
                    <strong>Remarks:</strong> {followUp.text}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No follow-ups available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EnquiryDetails;
