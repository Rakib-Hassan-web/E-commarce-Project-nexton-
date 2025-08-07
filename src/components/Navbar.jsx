import React, { useState } from 'react'
import { Link } from 'react-router'

import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri"
import logo from '../assets/image/logo.png'


import { RiUserLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import AddToCart from './AddToCart';
import { RxCross1 } from 'react-icons/rx';




const Navbar = () => {

const localProduct =JSON.parse(localStorage.getItem('ProductKey'))

const [cart ,setCart]= useState(true)


return (
<>


  {/* ------------dark mood ar jonno dark:bg-black---------- */}
  <nav className=' py-[27px]  hidden lg:block   ' id='navbar'>

<div className='container'>

    <div className="nav_row flex justify-between items-center">

      <Link to={'/'} className="nav_LOGO w-[119px] " id='nav_LOGO'><img src={logo} alt="" /></Link>


      <div
        className="navsearch w-[400px] h-[52px]  bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px] "
        id='navsearch'>

        < RiSearch2Line className='text-2xl text-praymary  srach_icon' id='srach_icon' onClick={()=>setvalue(!value)} />
          <input className='navinp w-full border-none outline-none text-[14px] font-normal text-praymary font-praymary '
            placeholder='Search in products... ' id='navinp' type="text" />

      </div>


      <div className="nav_icons relative flex gap-1 items-center " id='nav_icons'>

        <Link to={'/RegisterPage'} className='user_icon text-2xl text-praymary  mr-[22px]' id='user_icon'>
        <RiUserLine />
        </Link>

        <button onClick={()=>setCart(!cart)} className='relative cursor-pointer'>
          <RiShoppingCart2Line className='text-[24px] text-Primary' />
          <div
            className='absolute right-[-7px] top-[-7px] bg-[#0EA5E9] h-[20px] w-[20px] flex items-center justify-center rounded-full text-[#fff] text-[12px]'>
            {localProduct? localProduct.length : 0 }</div>
        </button>
      </div>



      {/* ---------cart----------- */}


      <div id='CART' className={`fixed top-0 h-screen w-full left-0 flex justify-end bg-[#0000009b] z-10 duration-[.3s]
        ${cart? 'hidden' : 'visible' }` }>
        <AddToCart closeDiv={()=>setCart(!cart)} closeCart={<RxCross1 onClick={()=>setCart(!cart)}
            className='text-3xl'/>}/>
      </div>


    </div>
</div>

{/* ------------search result---------- */}
<div className='bg-red-300 py-5 px-34 '>
  <h1 className='hover:bg-gray-400 duration-500  py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis enim ex veritatis ullam suscipit! Nesciunt porro earum assumenda, neque ullam quos? Iure quas eos tempora natus modi ducimus dolorum!</h1>
</div>
  </nav>





</>
)
}

export default Navbar