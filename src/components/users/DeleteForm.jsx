import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { FaTrash } from "react-icons/fa"
import { useParams } from "react-router"
// import { c } from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P"
  
  export default function DeleteForm() {
    const handleDelete=async()=>{
    console.log("tiempas")

    }
    const value=useParams()
console.log(value)
    useEffect(()=>{
        // console.log({value},`${value.userId}`)
         fetch(`http://localhost:5000/api/v1/users/deleteOneUser/${value.userId}`,
            {
                method:"DELETE"
            }
          ).then((response)=>{
              if(!response.ok) throw new Error("error deleting it")
                  return response.json()
          }).then((data)=>(
                  console.log(data)
          )).catch((e)=>(console.log(e)))
    },[])
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className='bg-transparent text-red-600' variant="outline"><FaTrash/></Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  