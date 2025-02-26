import { ToastContainer } from "react-toastify";
import { Register } from "./components/forms/Register";
import RegisterReal from "./components/forms/RegisterReal";
import LoginForm from "./components/forms/Login";
import { Outlet } from "react-router";
import Home from "./components/desgin/Home";
import NavBar from "./components/desgin/NavBar";

export default function App() {
  return (
    <div className="">
      <ToastContainer/>
      <NavBar/>
      <Outlet/>
    </div>
  )
}