import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div className="  p-5 flex justify-evenly bg-slate-500 emerald-300">
        <p className="bg-green-400  p-4 font-bold text-xl hover:text-red-600 hover:bg-slate-700 rounded-full">
          <NavLink to="/"> Home </NavLink>
        </p>
        <p className="bg-green-400  p-4 font-bold text-xl hover:text-red-600 hover:bg-slate-700 rounded-full">
          <NavLink to="/About"> About </NavLink>
        </p>
        <p className="bg-green-400  p-4 font-bold text-xl hover:text-red-600 hover:bg-slate-700 rounded-full">
          <NavLink to="/Contact"> Contact </NavLink>
        </p>
        <p className="bg-green-400  p-4 font-bold text-xl hover:text-red-600 hover:bg-slate-700 rounded-full">
          <NavLink to="/Login"> Login </NavLink>
        </p>
      </div>

    </div>
  )
}

export default Navbar
