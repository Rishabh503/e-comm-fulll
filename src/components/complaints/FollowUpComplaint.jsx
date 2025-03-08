import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { toast } from "react-toastify";
// import { l } from "react-router/dist/development/fog-of-war-Cm1iXIp7";

export const FollowUpComplaint = ({ display ,id }) => {
    const [contact, setContact] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const complaintId=id
    const formData= {
        name:name,
        date:date,
        contact:contact,
        text:text
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form ka data",formData)
        try {
            const response=await fetch(`http://localhost:5000/api/v1/complaint/${id}/followUp`,
                {
                    method:'POST',
                    headers: {
                        "Content-Type": "application/json", 
                    },
                    body:JSON.stringify(formData)
                }
            )

            if(!response.ok){
                const err=await response.json()
                throw new Error(err.message || "error submitting form")
            }

            toast.success("Follow Up created succesfully ")
            setName(""),setContact(""),setText(""),setDate("")
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-">{display}</button>
            </DialogTrigger>
            <DialogContent className="p-6">
                <DialogTitle>
                    <p className="text-2xl font-semibold">New Follow-Up</p>
                </DialogTitle>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                      
                <label>Follow-Up By</label>
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
                    <label>Contact</label>
                    <Input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact Number" />
                  
                    
                    <label>Follow-Up Date</label>
                    <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    
                    <label>Description</label>
                    <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Description" />
                    
                    <Button type="submit">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};
