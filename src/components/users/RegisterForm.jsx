import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { toast } from "react-toastify"
import React, { useState } from "react"

export function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullName: "",
    contact: "",
    address: "",
    password: "",
    avatar: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const response = await fetch("http://localhost:5000/api/v1/users/register", {
        method: "POST",
        body: submissionData,
      });

      let responseData;
      try {
        responseData = await response.json();
      } catch (jsonError) {
        const textResponse = await response.text();
        throw new Error(`Server returned non-JSON response: ${textResponse}`);
      }

      if (!response.ok) {
        throw new Error(responseData.message || `HTTP error! Status: ${response.status}`);
      }

      toast.success(responseData.message);
      console.log("Success:", responseData);
    } catch (error) {
      toast.error(error.message);
      console.error("Error from sending data to backend:", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className='bg-blue-400' variant="outline">New Registration</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Register</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {[
            { label: "Username", name: "username", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Contact", name: "contact", type: "text" },
            { label: "Address", name: "address", type: "text" },
            { label: "Password", name: "password", type: "password" },
            { label: "Avatar", name: "avatar", type: "file" },
          ].map(({ label, name, type }) => (
            <div key={name} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={name} className="text-right">{label}</Label>
              <Input id={name} name={name} type={type} onChange={handleChange} className="col-span-3" />
            </div>
          ))}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </Button>
        </form>
        <SheetFooter>
          <SheetClose asChild />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}