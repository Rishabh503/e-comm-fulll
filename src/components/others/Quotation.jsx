import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export const  Quotation=({display})=> {
    const [text,setText]=useState("")
    const [date,setDate]=useState("")
    const [name,setName]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("name from the form",name)
        console.log("date from the form",date)
        console.log("text from the form",text)
        console.log("text from the form",display)
        alert("khtm hua")
        toast.success("added succesfully")
        setText("");//file
        setName(0) //number
        setDate("00-00-0000") //date
    }
  return (
    <Dialog>
        
      <DialogTrigger asChild>
        <button className='bg-'>{display}</button>
      </DialogTrigger>
      <DialogContent className="p-6">
      <DialogTitle>
           {display}
        </DialogTitle>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-3"
        >
            <label >Amount</label>
          <Input type="number" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Amount" />
          <label > Date</label>
          <Input type="date" value={date} onChange={((e)=>setDate(e.target.value))} placeholder="Enter Date" />
          <label >Quotation File</label>
          <Input type="file"  onChange={(e)=>setText(e.target.value)} placeholder="Description" ></Input>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
