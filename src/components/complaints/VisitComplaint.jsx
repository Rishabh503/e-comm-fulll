import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { toast } from "react-toastify";
// import { UNSAFE_ErrorResponseImpl } from "react-router";
// import { json } from "stream/consumers";

export const  VisitComplaint=({display,id})=> {
    const [text,setText]=useState("")
    const [date,setDate]=useState("")
    const [name,setName]=useState("")
    const [selectedOption, setSelectedOption] = useState("");
// 

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    const complaintId=id;
    const formData={
        visitedBy:name,
        dateOfVisit:date,
        textArea:text,
        status:selectedOption
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log("form daata aya kya",formData)
        // console.log( `${id}`)
        try {
            const response=await fetch(`http://localhost:5000/api/v1/complaint/${id}/newVisit`,
                {
                    method:'POST',
                    headers: {
                        "Content-Type": "application/json", 
                    },
                    body:JSON.stringify(formData)
                }
            )
            if(!response.ok) {
                const errData=await response.json();
                throw new Error(errData.message || "Error submitting data")
            }
            setName("");setDate(""),setText(""),setSelectedOption("")
            toast.success("VISIT ADDED SUCCESFUULYY KINDLY REFRESH IT")
        } catch (error) {
            toast.error(error.message,error)
        }
    }
  return (
    <Dialog>
        
      <DialogTrigger asChild>
        <button className='bg-'>{display}</button>
      </DialogTrigger>
      <DialogContent className="p-6">
      <DialogTitle>
          <p className="text-2xl font-semibold">New Visit</p>
        </DialogTitle>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3"
        >
            <label >Visitor Name</label>
          <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
          <label >Visit Date</label>
          <Input type="date" value={date} onChange={((e)=>setDate(e.target.value))} placeholder="Enter Date" />
          <label >Description for Visit</label>
          <Input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Description" ></Input>
          <label className="block mb-2 ">Choose an option:</label>
                <select
                    className="border rounded px-3 py-2 w-full"
                    value={selectedOption}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                    <option value="In Progress">In Progress</option>
                </select>
                {/* {selectedOption && <p className="mt-2">You selected: {selectedOption}</p>} */}
   
          <Button>Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
