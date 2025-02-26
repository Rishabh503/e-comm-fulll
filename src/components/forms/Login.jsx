import { useState } from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";
import { Admin } from "../../pages/Admin";
import Home from "../desgin/Home";
// import { lstat } from "fs";
// import 'dotenv/config'

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLoggedInAlready=localStorage.getItem('user')
  const userIsThere=JSON.parse(userLoggedInAlready) || {}
  const [userLoggedIn,setUserLoggedIn]=useState(userIsThere.user)

  const adminLoggedIn=localStorage.getItem('admin');
  console.log(JSON.parse(adminLoggedIn))
  const adminIsThere=JSON.parse(adminLoggedIn) || {}
  console.log(adminIsThere.admin)
  const [admin,setAdmin]=useState(adminIsThere.admin)



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    // console.log(import.meta.env.VITE_ADMIN_EMAIL);  // ✅ Correct

    if(email==import.meta.env.VITE_ADMIN_EMAIL){
      if(password==import.meta.env.VITE_ADMIN_PASSWORD){
        setAdmin(true)
        console.log("hi from checkk")
        localStorage.setItem('admin',JSON.stringify({admin:true}));
      }
      
    }
    const formData=new FormData();
    formData.append("email",email);
    formData.append("password",password);

      try {
        const response=await fetch("http://localhost:5000/api/v1/users/login",{
          method:"POST",
          body:formData
        })

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
          localStorage.setItem('user',JSON.stringify({user:true}));
          setUserLoggedIn(true)
       
          console.log("Success:", responseData);
      } catch (error) {
        toast.error(error.message)
          console.log("error from sendin data to backend block: ",error)
          setUserLoggedIn(false)
      }
  };
    if(userLoggedIn && !admin) return <Home/>
    else if(userLoggedIn && admin) return <Admin/>
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-center text-2xl font-semibold mb-4">Login</h2>
        <p className="text-white">
          {userLoggedIn?'u have been logged in succesfully':"kindly login to get started"}
          <br />
          {admin?"welcome admin":""}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-400 block mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-400 block mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
            <NavLink to='/register'
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Register
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
