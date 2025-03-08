import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { toast } from "react-toastify";
// import { UNSAFE_ErrorResponseImpl } from "react-router";
// import { json } from "stream/consumers";

export const AddCategory=()=> {
    const [text,setText]=useState("")
    const [date,setDate]=useState("")
    const [name,setName]=useState("")
    const [selectedOption, setSelectedOption] = useState("");
    // const [formData,setFormData]=useState("")
// 

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
    // const complaintId=id;
    const formData={
        name:name,
        description:text,
        posterLocalPath:selectedOption
    }
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("name",name);
        formData.append("description",text);
        formData.append("poster",selectedOption);
    
        console.log(formData)
        console.log("form daata aya kya",formData)
        // console.log( `${id}`)
        try {
            const response=await fetch(`http://localhost:5000/api/v1/categories/newCategory`,
                {
                    method:'POST',
                    body:formData
                }
            )
            if(!response.ok) {
                const errData=await response.json();
                throw new Error(errData.message || "Error submitting data")
            }
            setName("");setDate(""),setText(""),setSelectedOption("")
            toast.success("CATEGORY HAS BEEN ADDED SUCCESFUULYY KINDLY REFRESH IT")
        } catch (error) {
            toast.error(error.message,error)
        }
    }
  return (
    <Dialog>
        
      <DialogTrigger asChild>
        <button className='bg-red-400 px-4 py-2 rounded-lg shadow-lg mb-4'>Add Category</button>
      </DialogTrigger>
      <DialogContent className="p-6">
      <DialogTitle>
          <p className="text-2xl font-semibold">New Visit</p>
        </DialogTitle>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3"
        >
            <label >Category Name</label>
          <Input type="text" name="username" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />

          <label >Description </label>
          <Input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Description" ></Input>
          <label className="block mb-2 ">Choose an option:</label>
            <input type="file"   onChange={(e)=>setSelectedOption(e.target.files[0])} ></input>

                {/* {selectedOption && <p className="mt-2">You selected: {selectedOption}</p>} */}
   
          <Button type="submit" >Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
