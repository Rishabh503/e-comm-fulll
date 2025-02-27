import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function BillForm() {
  const [form, setFormData] = useState({
    billTo: "rishabh",
    amount: "2400",
    date: "",
    contact: "9650594608",
    email: "rihab@12",
    status: "warranty",
    category: "laptop",
    reminder: "",
    warranty:"",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formattedDate = new Date(form.date).toISOString();
    
    const billData = {
      billTo: form.billTo,
      amount: form.amount,
      contact: form.contact,
      email: form.email,
      status: form.status,
      category: form.category,
      warranty: form.warranty, // Default warranty value (change if needed)
      remValue1: form.reminder,
      date: formattedDate
    };

    try {
      const response = await fetch("http://localhost:5000/api/v1/bills/newBill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(billData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      toast.success("bill created succesfully")
      // alert("Bill created successfully");
      setFormData({
        billTo: "",
        amount: "",
        date: "",
        contact: "",
        email: "",
        status: "",
        category: "",
        reminder: "",
        warranty:"",
      });
    } catch (error) {
      toast.error(error.message)
      console.error("Error creating bill:", error);
      // alert("Failed to create bill");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Bill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="billTo" placeholder="Bill to" value={form.billTo} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="contact" placeholder="Mobile" value={form.contact} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="number" name="warranty" placeholder="warranty" value={form.warranty} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <input type="text" name="status" placeholder="Payment Status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded-md" />
        <select name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded-md">
          <option value="telephone">Telephone</option>
          <option value="laptop2">laptop</option>
          <option value="EPBAX">EPBAX</option>
          <option value="Panasonic">Panasonic</option>
          {/* <option value="Rent">Rent</option> */}
        </select>
        <h3 className="text-lg font-semibold">Reminder</h3>
        <select name="reminder" value={form.reminder} onChange={handleChange} className="w-full p-2 border rounded-md">
          <option value="">Reminder (months before)</option>
          <option value="1">1 Month</option>
          <option value="2">2 Months</option>
          <option value="3">3 Months</option>
          <option value="4">4 Months</option>
          <option value="6">6 Months</option>
          <option value="12">12 Months</option>
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
