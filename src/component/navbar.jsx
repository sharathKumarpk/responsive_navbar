import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
const Navbar = () => {
  const [extendNavbar,setExtendNavbar]=useState(false)
  console.log(extendNavbar);
  return (
    <div className="bg-gray-500 text-black h-20 px-6">
     <div className=" flex justify-between max-w-7xl mx-auto">
      <div className="h-20 flex items-center">
        <h1 className="text-4xl font-bold">logo</h1>
      </div>
      <div className="flex gap-6">
        <ul className={`lg:static flex flex-col lg:flex-row lg:items-center absolute gap-6 text-xl duration-500 ${extendNavbar? "left-5 top-24" : "left-[-150px] top-24"}`}>
          <li className='hover:text-orange-100 cursor-pointer'>About</li>
          <li className='hover:text-orange-100 cursor-pointer'>Home</li>
          <li className='hover:text-orange-100 cursor-pointer'>Career</li>
          <li className='hover:text-orange-100 cursor-pointer'>Login</li>
          <li className='hover:text-orange-100 cursor-pointer'>SignUp</li>
        </ul>
        <div className='flex lg:hidden h-20 items-center' onClick={()=> {setExtendNavbar(open => !open);
        }}>
         {
          extendNavbar?<ClearIcon/>:<MenuIcon/>
         }
        </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar