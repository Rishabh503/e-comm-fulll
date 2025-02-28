import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export const  Trial=({display})=> {
    const [text,setText]=useState("")
    const [date,setDate]=useState("")
    const [name,setName]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("name from the form",name)
        console.log("date from the form",date)
        console.log("text from the form",text)
        console.log("text from the form",display)
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
            <label >Visitor Name</label>
          <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
          <label >Visit Date</label>
          <Input type="date" value={date} onChange={((e)=>setDate(e.target.value))} placeholder="Enter Date" />
          <label >Description for Visit</label>
          <Input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Description" ></Input>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
