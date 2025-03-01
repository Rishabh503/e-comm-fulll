import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
// import { Sheet } from "../ui/sheet";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
    <Sheet >
      <SheetTrigger asChild>
        <Button className='bg-red-400' variant="outline">New Bill</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto max-h-screen w-full">

        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Label htmlFor="billTo">Bill To</Label>
            <input type="text" id="billTo" name="billTo" placeholder="Bill to" value={form.billTo} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="amount">Amount</Label>
            <input type="number" id="amount" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="date">Date</Label>
            <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="contact">Mobile</Label>
            <input type="text" id="contact" name="contact" placeholder="Mobile" value={form.contact} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="email">Email</Label>
            <input type="email" id="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="warranty">Warranty</Label>
            <input type="number" id="warranty" name="warranty" placeholder="warranty" value={form.warranty} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="status">Payment Status</Label>
            <input type="text" id="status" name="status" placeholder="Payment Status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="category">Category</Label>
            <select id="category" name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="telephone">Telephone</option>
              <option value="laptop2">laptop</option>
              <option value="EPBAX">EPBAX</option>
              <option value="Panasonic">Panasonic</option>
            </select>
            
            <h3 className="text-lg font-semibold">Reminder</h3>
            <Label htmlFor="reminder">Reminder (months before)</Label>
            <select id="reminder" name="reminder" value={form.reminder} onChange={handleChange} className="w-full p-2 border rounded-md">
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
      </SheetContent>
    </Sheet>
  );
}