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
import { toast } from "react-toastify"

export function EnquiryForm() {
  // const {name,contact,address,companyName,problem,requirements,status}=req.body 

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [address,setAddress]=useState("")
  const [companyName,setCompanyName]=useState("")
  const [problem,setProblem]=useState("")
  const [requirements,setRequiremnts]=useState("")


  const handleSubmit=(e)=>{
    e.preventDefault();
    const formData={
      name,
      contact,
      address,
      companyName,
      problem,
      requirements
    }
  
    console.log("Form Data Submitted:", formData);

    fetch("http://localhost:5000/api/v1/enquiry/newEnquiry",
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
      setName("");setAddress('');setCompanyName('');setContact('');setProblem("");setRequiremnts("")
    }).catch((e)=>console.log("errror in data sendinf or fetching ",e))
  }
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-red-400' variant="outline">New Enquiry</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a New Enquiry</SheetTitle>
        </SheetHeader>
        <form onSubmit={(e)=>(handleSubmit(e))} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e)=>{setName(e.target.value)} }  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Contact
            </Label>
            <Input id="username" type="number" value={contact}  className="col-span-3"  onChange={(e)=>{setContact(e.target.value)} } />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Address
            </Label>
            <Input id="username" type="text" value={address}  className="col-span-3"  onChange={(e)=>{setAddress(e.target.value)} } />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Company Name
            </Label>
            <Input id="username" type="text" value={companyName}  className="col-span-3"  onChange={(e)=>{setCompanyName(e.target.value)} } />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Problem
            </Label>
            <Input id="username" type="text" value={problem}  className="col-span-3"  onChange={(e)=>{setProblem(e.target.value)} } />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Requirements
            </Label>
            <Input id="username" type="text" value={requirements}  className="col-span-3"  onChange={(e)=>{setRequiremnts(e.target.value)} } />
          </div>
          <Button  type="submit">Create Enquiry</Button>
        </form>
        <SheetFooter>
          <SheetClose asChild>
           
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
