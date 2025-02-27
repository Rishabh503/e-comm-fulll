import React from "react";

const enquiries =[
    {
      "companyName": "Tata Consultancy Services",
      "date": "2025-02-28",
      "contact": "9876543210",
      "problem": "Software bug in production",
      "requirements": "Urgent debugging and patch deployment",
      "status": "Pending"
    },
    {
      "companyName": "Infosys Ltd",
      "date": "2025-02-27",
      "contact": "9898989898",
      "problem": "Cloud server downtime",
      "requirements": "Migration to AWS with high availability setup",
      "status": "In Progress"
    },
    {
      "companyName": "Wipro Technologies",
      "date": "2025-02-26",
      "contact": "9765432109",
      "problem": "Network security breach",
      "requirements": "Advanced firewall and cybersecurity solutions",
      "status": "Resolved"
    },
    {
      "companyName": "HCL Technologies",
      "date": "2025-02-25",
      "contact": "9856234789",
      "problem": "Data loss due to power outage",
      "requirements": "Automated backup and recovery solution",
      "status": "Pending"
    },
    {
      "companyName": "Tech Mahindra",
      "date": "2025-02-24",
      "contact": "9988776655",
      "problem": "Employee portal crashing frequently",
      "requirements": "Complete system overhaul and performance optimization",
      "status": "In Progress"
    },
    {
      "companyName": "Mindtree Ltd",
      "date": "2025-02-23",
      "contact": "9765544332",
      "problem": "ERP software not responding",
      "requirements": "Upgrade to latest ERP version with custom features",
      "status": "Resolved"
    },
    {
      "companyName": "L&T Infotech",
      "date": "2025-02-22",
      "contact": "9845123678",
      "problem": "Database migration issues",
      "requirements": "Expert assistance in migrating from Oracle to PostgreSQL",
      "status": "Pending"
    },
    {
      "companyName": "Capgemini India",
      "date": "2025-02-21",
      "contact": "9990001112",
      "problem": "Website performance degradation",
      "requirements": "Full-stack performance audit and optimization",
      "status": "In Progress"
    },
    {
      "companyName": "Cognizant",
      "date": "2025-02-20",
      "contact": "9988007766",
      "problem": "Mobile app crashing on startup",
      "requirements": "Bug fixes and testing across all platforms",
      "status": "Resolved"
    },
    {
      "companyName": "IBM India",
      "date": "2025-02-19",
      "contact": "9876123456",
      "problem": "AI chatbot not functioning properly",
      "requirements": "Enhance NLP model and improve response accuracy",
      "status": "Pending"
    }
  ]
  

const EnquiryDashboard = () => {
  return (
    <section className="min-h-screen w-full">
        <div className="w-full  mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Enquiry Dashboard</h2>

      <div className="grid grid-cols-7 bg-gray-200 text-gray-800 font-semibold p-3 rounded-md">
        <span>Company Name</span>
        <span>Date</span>
        <span>Contact</span>
        <span>Problem</span>
        <span>Requirements</span>
        <span>Status</span>
        <span>Action</span>
      </div>

      {enquiries.map((enquiry, index) => (
        <div
          key={index}
          className={`grid ${index%2==0?"bg-gray-400":"bg-white"} grid-cols-7 gap-5 items-center border-b border-gray-300 p-3`}
        >
          <span className="truncate">{enquiry.companyName}</span>
          <span>{enquiry.date}</span>
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
          <button className="bg-orange-400 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            View
          </button>
        </div>
      ))}
    </div>
    </section>
  );
};

export default EnquiryDashboard;
