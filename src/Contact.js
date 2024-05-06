import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    const click_btn = () =>{
      navigate("/Login")
  
    }
  return (
    <div>
      <Navbar />

      <p className="bg-emerald-500   p-2 text-center text-2xl font-bold hover:text-white cursor-pointer">
        Contact Page
      </p>
      <button onClick={click_btn} className="bg-red-500 p-2 text-white rounded m-5 hover:bg-green-400 hover:text-red-600 font bold "> Go to Login</button>
    </div>
  );
};

export default Contact;
