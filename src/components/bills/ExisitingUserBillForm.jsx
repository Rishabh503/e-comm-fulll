import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { FaCircle, FaPlusCircle } from "react-icons/fa";

export default function ExistingUserBillForm({value}) {
     const userId=value;
  const [form, setFormData] = useState({
    amount: "",
    date: "",
    status: "pending",
    warranty: "",
    bill: null, // File upload for bill
    remValue1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...form, bill: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("userId", form.userId);
    formData.append("amount", form.amount);
    formData.append("date", form.date);
    formData.append("status", form.status);
    formData.append("warranty", form.warranty);
    formData.append("remValue1", form.remValue1);
    if (form.bill) formData.append("bill", form.bill);

    try {
      const response = await fetch(`http://localhost:5000/api/v1/bills/oldUserBill/${value}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      toast.success("Bill added successfully");
      setFormData({
        userId: "",
        amount: "",
        date: "",
        status: "pending",
        warranty: "",
        bill: null,
        remValue1: "",
      });
    } catch (error) {
      toast.error(error.message);
      console.error("Error adding bill:", error);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-green-400' variant="outline"> <FaPlusCircle/> New Bill</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto max-h-screen w-full">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* <Label htmlFor="userId">User ID</Label>
            <input type="text" id="userId" name="userId" placeholder="User ID" value={form.userId} onChange={handleChange} className="w-full p-2 border rounded-md" /> */}
            
            <Label htmlFor="amount">Amount</Label>
            <input type="number" id="amount" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="date">Date</Label>
            <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="status">Status</Label>
            <input type="text" id="status" name="status" placeholder="Status" value={form.status} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="warranty">Warranty</Label>
            <input type="number" id="warranty" name="warranty" placeholder="Warranty (in years)" value={form.warranty} onChange={handleChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="bill">Upload Bill</Label>
            <input type="file" id="bill" name="bill" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
            
            <Label htmlFor="remValue1">Reminder (months before)</Label>
            <select id="remValue1" name="remValue1" value={form.remValue1} onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="">Select Reminder</option>
              <option value="1">1 Month</option>
              <option value="2">2 Months</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="12">12 Months</option>
            </select>
            
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700">Submit</button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
