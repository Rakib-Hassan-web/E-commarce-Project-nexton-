import React, { useState } from 'react'

import reslogo from '../assets/image/reslogo.png'
import { Link } from 'react-router'
import { RiSearch2Line } from "react-icons/ri"


import { RiUserLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";



const ResNavbar = () => {

const [crossNav,setcrossNav]=useState(false)



return (
<>



    <nav className='container  lg:hidden  px-[16px]'>



        <div className="nav_row flex justify-between items-center ">

            <Link to={'/'} className='reslogo'> <img className='w-[24px] h-[24px]' src={reslogo} alt="" /></Link>


            <div className="ressearch w-[200px] h-[52px]  bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px] "
                id='ressearch'>

                < RiSearch2Line className='text-xl text-praymary  srach_icon-res' id='srach_icon-res' />
                <input
                    className='navinpRes w-full border-none outline-none text-[12px] font-normal text-praymary font-praymary '
                    placeholder='Search in products... ' id='navinpRes' type="text" />

            </div>

            <div onClick={()=> setcrossNav(!crossNav)} className='w-[25px] h-[20px] relative ' >


                <span className={` ${crossNav?'rotate-45 top-[20px] ': ' rotate-0 top-0'} 1bar w-full h-[2px]
                    bg-praymary left-0 absolute duration-[.4s] `}></span>
                <span className={` ${crossNav? 'hidden' : 'block' } 2bar w-full h-[2px] bg-praymary absolute top-[50%]
                    left-0 duration-[.4s] `}></span>
                <span className={` ${crossNav?'rotate-[-45deg] top-[20px]': '' } 2bar w-full h-[2px] bg-praymary
                    absolute left-0 top-[100%] duration-[.4s]`}></span>

            </div>





            <div className={` ${crossNav? 'scale-100 ' :'scale-0 '}  duration-[.6s] z-[11]  absolute w-[90%] bg-praymary top-[80px] rounded-[25px]  flex justify-center items-center p-[18px]`}>

                <ul className=' flex gap-2 flex-col font-praymary text-white text-xl '>
                  <button className=' user_icon text-2xl text-white ' id='user_icon'>
                    <RiUserLine /></button>
                <button className='cart_icon text-2xl text-white relative' id='cart_icon'>
                    <RiShoppingCartLine /> </button>
                </ul>
     {/* <div id='cart_massage' className=' absolute top-[41px] right-[147px]   cart_massage h-[20px] w-[20px] bg-[#0EA5E9] rounded-full text-[12px] text-white font-praymary  font-normal flex justify-center items-center'>3</div> */}

            </div>









        </div>










    </nav>








</>
)
}

export default ResNavbar