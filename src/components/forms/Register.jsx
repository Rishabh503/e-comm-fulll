import { useForm } from "react-hook-form"

import React from 'react'

export const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors ,isSubmitting },
      } = useForm()

       const  onSubmit= async (data)=>{
        await new Promise((resolve)=>setTimeout(resolve,3000));
        console.log("form ka data :",data);
      }
  return (
<>
    <div>Register</div>
         <form className="flex flex-col gap-4 bg-red-200 w-1/2 border" onSubmit={handleSubmit(onSubmit)}>
            <label >First Name</label>
            <input type="text" {...register('firstName',{required:true})} />
            <label >Middle Name</label>
            <input type="text" {...register('middleName')} />
            <label >Last Name</label>
            <input type="text" {...register('lastName')} />
            <button disabled={isSubmitting} >
                {isSubmitting?"submitting":"submit"}
            </button>
         </form>
</>
  )
}
