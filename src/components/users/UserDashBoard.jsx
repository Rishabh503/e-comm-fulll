import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CollapsibleDemo } from "../others/CollapsibleDemo";
import { ComplaintForm } from "../complaints/ComplaintForm";
import { EnquiryForm } from "../enquiry/EnquiryForm";
import { CollapsibleDemoComplaint } from "../others/CollapsibleDemoComplaint";
import { RegisterForm } from "./RegisterForm";
import ExistingUserBillForm from "../bills/ExisitingUserBillForm";

const UserDashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users/getAllUser")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(true);
      })
      .catch((e) => console.log(e));
  }, []);

  const userData = data.data || [];
  console.log("Fetched users:", userData);

  const filteredData = userData.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.contact.toString().includes(search) ||
      user.createdAt.includes(search)
  );
  const username=search;
  const tryingSorting = filteredData.sort((a, b) => a.username.localeCompare(b.username)) || [];

  console.log("sorrted data ",tryingSorting)
  // students.sort((a, b) => a.age - b.age);
  return (
    <section className="min-h-screen w-full">
      <div className="w-full mx-auto p-6">
        <div className="flex justify-between">
          <p className="w-[20%] text-2xl font-semibold">User Dashboard</p>
          <div className="w-full px-24 flex mb-5 items-center gap-2">
            <p className="text-lg">Search</p>
            <FaSearch />
            <input
              className="w-[60%] border rounded-lg bg-gray-200 p-2"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          <div className="w-auto flex justify-end">
          <EnquiryForm/>
          <RegisterForm/>
          </div>
          </div>
        </div>
        <div className="grid grid-cols-8 bg-gray-200 text-gray-800 gap-5 font-semibold p-3 rounded-md">
          <span>Full Name</span>
          {/* <span>Username</span> */}
          <span>Email</span>
          <span>Contact</span>
          <span>Address</span>
          <span>Bills</span>
          <span>Complaints</span>
          <span>New Complaint</span>
          <span>New Bill</span>

        </div>

        {filteredData.map((user, index) => (
          <div
            key={index}
            className={`grid ${index % 2 === 0 ? "bg-blue-200" : "bg-white"} grid-cols-8 gap-5 h-auto items-center border-b border-gray-300 p-3`}
          >
            <span className="truncate">{user.fullName}</span>
            {/* <span>{user.username}</span> */}
            <span className="overflow-x-hidden">{user.email}</span>
            <span>{user.contact}</span>
            <span className="truncate">{user.address}</span>
            {/* <button
              onClick={() => navigate(`/user/${user._id}`)}
              className="bg-purple-500 text-white px-4 py-1 rounded-md hover:bg-purple-700"
            >
              View
            </button> */}
          
                <CollapsibleDemo bills={user.bills} display={"Bill"}  className=""/>
                <CollapsibleDemoComplaint bills={user.complaints}display={"Complaint"}  className=""/>
                <p className='w-1/5'>
                                  <ComplaintForm value={user._id}/>
</p>
<p>
                    <ExistingUserBillForm value={user._id}/>
</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserDashboard;
