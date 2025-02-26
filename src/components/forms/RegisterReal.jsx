import React, { useState } from 'react'
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';

const RegisterReal = () => {

    // const user=await User.create({
    //         username:username,
    //         email:email,
    //         fullName:fullName,
    //         contact:contact,
    //         address:address,
    //         avatarUrl:avatarUpload?.url || "",
    //         password:password
    //     })

    const [username,setUsername]=useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [contact, setContact] = useState('');
    const [address,setAddress]=useState('')
    const [password,setPassword]=useState('')
    const [avatar,setAvatarUrl]=useState('')

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("fron start",username,email,fullName,contact,address,password,avatar)
        // const {email,fullName,username,contact,address,password}=req.body

        // const data={
        //     username:username,
        //     email:email,
        //     fullName:fullName,
        //     contact:contact,
        //     address:address,
        //     avatarUrl:avatarUrl?.url || "",
        //     password:password
        // }

        const formData=new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("fullName", fullName);
        formData.append("contact", contact);
        formData.append("address", address);
        formData.append("password", password);
        formData.append("avatar",avatar);


        
            try {
                const response = await fetch("http://localhost:5000/api/v1/users/register", {
                    method: "POST",
                    body: formData,
                });
        
                let responseData;
                try {
                    responseData = await response.json();
                } catch (jsonError) {
                    const textResponse = await response.text(); // Get raw response if JSON parsing fails
                    throw new Error(`Server returned non-JSON response: ${textResponse}`);
                }
        
                if (!response.ok) {
                    throw new Error(responseData.message || `HTTP error! Status: ${response.status}`);
                }
                toast.success(responseData.message)
                console.log("Success:", responseData);
            } catch (error) {
                toast.error(error.message)
                console.error("Error from sending data to backend:", error.message);
            }
        
    }
  return (
    <section className='min-h-screen min-w-full w-full bg-gray-900 '>
        <div className='min-h-screen gap-4 p-10 flex w-full bg-gray-900'>
            {/* info about the site */}
            <div className="w-1/2 bg-gray-800 text-white p-6 flex flex-col space-y-4">
  {/* First Row */}
  <div className="grid grid-cols-2 gap-4">
    <img src="photo1.png" alt="Photo1" className="w-full h-auto object-cover rounded-lg shadow-lg" />
    <div className=" p-4 rounded-lg shadow-md flex items-center justify-center">
      <p className=" text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, vero ratione quaerat voluptas impedit dolorum animi sapiente totam velit veritatis consectetur aspernatur corrupti illum nesciunt sed? Quo laborum atque aliquam.</p>
    </div>
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-2 gap-4">
    <div className="text-white p-4 rounded-lg shadow-md flex items-center justify-center">
      <p className="text-white text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, commodi?</p>
    </div>
    <img src="photo2.png" alt="Photo2" className="w-full h-auto object-cover rounded-lg shadow-lg" />
  </div>

  {/* Third Row - Full Width Text Area */}
  <div className=" p-6 rounded-lg shadow-md flex items-center justify-center">
    <p className=" text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consectetur maxime laborum nostrum officia, ullam similique maiores, tempore aspernatur voluptate explicabo, vero accusantium eaque? Blanditiis mollitia doloribus quasi hic saepe.
    Deleniti, itaque dolor. orem sunt in qui.</p>
  </div>
</div>

            {/* form  */}
            <div className='w-1/2 min-h-full p-2 border rounded-lg '>
            <p className='text-center font-semibold text-2xl text-[#007BFF]'>Register User</p>
                <form encType="multipart/form-data"  className='flex flex-col gap-5' onSubmit={(e)=>handleSubmit(e)}>
                    <div className='w-full'>
                        <label className='w-full font-bold text-xl px-2 text-blue-500'>Name</label>
                        <input className='w-full rounded-xl border shadow-md p-1' value={fullName} required type="text"  
                        onChange={(e)=>(setFullName(e.target.value))}
                        />
                    </div> 
                    <div className='w-full'>
                        <label className='w-full font-bold text-xl px-2 text-blue-500'>Email</label>
                        <input className='w-full rounded-xl border shadow-md p-1' required value={email}
                         type="email" 
                         onChange={(e)=>(setEmail(e.target.value))}
                         />
                    </div> 
                    <div className='w-full'>
                        <label className='w-full font-bold text-xl px-2 text-blue-500'>Password</label>
                        <input className='w-full rounded-xl border shadow-md p-1' 
                        required 
                        value={password}
                        type="password"
                        
                        onChange={(e)=>(setPassword(e.target.value))}/>
                    </div> 
                    <div className='w-full'>
                        <label className='w-full font-bold text-xl px-2 text-blue-500'>User Name</label>
                        <input className='w-full rounded-xl border shadow-md p-1' value={username} required type="text"  onChange={(e)=>(setUsername(e.target.value))} />
                    </div> 
                    <div className='w-full'>
                        <label className='w-full font-bold text-xl px-2 text-blue-500'>Contact</label>
                        <input className='w-full rounded-xl border shadow-md p-1'   value={contact} required type="text" 
                         onChange={(e)=>(setContact(e.target.value))} />
                    </div> 
                    <div className='w-full'>
                        <label className='w-full font-bold text-xl px-2 text-blue-500'>Address</label>
                        <input className='w-full rounded-xl border shadow-md p-1' value={address} required type="text" 
                         onChange={(e)=>(setAddress(e.target.value))}
                        />
                    </div> 
                    <div className='w-full flex justify-start'>
                        <label className='w-1/3 font-bold text-xl px-2 text-blue-500'>Avatar</label>
                        <input className='w-full text-blue-50 rounded-xl border shadow-md p-1'  type="file"
                      required
                        onChange={(e)=>(setAvatarUrl(e.target.files[0]))}
                        />
                    </div> 
                    <div className='flex justify-between  items-center gap-4'>
                    <button   className="mt-2 px-4 py-2 bg-[#FFA500] text-[#121212] rounded">
                        submit
                    </button>
                    <NavLink to='/login' className=' text-white w-auto items-center p-3 rounded-xl'>
                        Already Registered ..
                    </NavLink>
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default RegisterReal