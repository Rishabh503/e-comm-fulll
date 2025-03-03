"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useNavigate } from "react-router"

export function CollapsibleDemoComplaint({bills,display}) {
  const [isOpen, setIsOpen] = React.useState(false)
    // console.log(bills)
    const navigate=useNavigate()
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-auto h-auto space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          {display}s
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {/* <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @radix-ui/primitives
      </div> */}
      <CollapsibleContent className="space-y-2">
        

        {bills.length>0?
            bills.map((bill,i)=>(
                <li  key={i} className="rounded-md border px-4 py-3 font-mono text-sm">
                    
                    <button className="hover:scale-110 hover:underline"
                     onClick={()=>navigate(`/complaint/${bill._id}`)}> Complaint no {i+1}</button> 
                </li>
            )):""
        }
      </CollapsibleContent>
    </Collapsible>
  )
}
