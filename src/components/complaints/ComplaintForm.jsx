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
import { useState } from "react"
import { FaAddressBook, FaPlusCircle } from "react-icons/fa"
import { useParams } from "react-router"
import { toast } from "react-toastify"

export function ComplaintForm({value}) {
  // const {name,contact,address,companyName,problem,requirements,status}=req.body 

  const [complaint, setComplaint] = useState("")
  const [device, setDevice] = useState("")
  const [text,setText]=useState("")


  const userId=value;
//   console.log(userId)

  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData={
     complaint,
    device,
    text
    }
  
    console.log("Form Data Submitted:", formData);

    fetch(`http://localhost:5000/api/v1/complaint/newComplaint/${value}`,
      {
        method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
        body:JSON.stringify(formData)
      }
    ).then((response)=>{
      if(!response.ok){
        throw new Error("response didint come")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data)
      toast.success(data.message)
     setDevice("");setComplaint(""),setText("")
    }).catch((e)=>console.log("errror in data sendinf or fetching ",e))
  }
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-purple-400' variant="outline"><FaPlusCircle/>Complaint</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a New Complaint</SheetTitle>
        </SheetHeader>
        <form onSubmit={(e)=>(handleSubmit(e))} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="complaint" className="text-right">
              Complaint
            </Label>
            <Input id="name" value={complaint} onChange={(e)=>{setComplaint(e.target.value)} }  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="device" className="text-right">
              Device
            </Label>
            <Input id="username" type="text" value={device}  className="col-span-3"  onChange={(e)=>{setDevice(e.target.value)} } />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="text" className="text-right">
              Text
            </Label>
            <Input id="username" type="text" value={text}  className="col-span-3"  onChange={(e)=>{setText(e.target.value)} } />
          </div>
          <Button  type="submit">Create Complaint</Button>
        </form>
        <SheetFooter>
          <SheetClose asChild>
           
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
