import React, { useEffect, useState } from 'react'
import { Form, Link } from 'react-router'

import { RiSearch2Line, RiShoppingCart2Line } from "react-icons/ri"
import logo from '../assets/image/logo.png'


import { RiUserLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import AddToCart from './AddToCart';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';




const Navbar = () => {

const localProduct =JSON.parse(localStorage.getItem('ProductKey'))

const [cart ,setCart]= useState(true)

const [search_Inp ,setsearch_Inp] =useState('')
const [search_Rslt ,setsearch_Rslt] =useState([])


// --------------api Fetch---------
const [product , setprodect] =useState([])

useEffect(()=>{

axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])

// -------handler--------

const searchHandler =(e)=>{
e.preventDefault()

  if(!search_Inp) return alert("Input Dosen't Be Empty ")





 const DataFilter =product.filter((item)=> item.title === search_Inp)


   
  setsearch_Rslt(DataFilter)
  console.log(DataFilter)
  console.log(product)


}



return (
<>


  {/* ------------dark mood ar jonno dark:bg-black---------- */}
  <nav className=' py-[27px]  hidden lg:block   ' id='navbar'>

<div className='container'>

    <div className="nav_row flex justify-between items-center">

      <Link to={'/'} className="nav_LOGO w-[119px] " id='nav_LOGO'><img src={logo} alt="" /></Link>


      <Form onSubmit={searchHandler}

        className="navsearch w-[400px] h-[52px]  bg-[#F8F8F8] rounded-[100px] flex items-center gap-[10px] pl-[24px] "
        id='navsearch'>

        < RiSearch2Line className='text-2xl text-praymary  srach_icon' id='srach_icon' onClick={()=>setvalue(!value)} />
          <input onChange={(e)=>setsearch_Inp(e.target.value)} className='navinp w-full border-none outline-none text-[14px] font-normal text-praymary font-praymary '
            placeholder='Search in products... ' id='navinp' type="text" />

      </Form>


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
<div className='bg-gray-200 pb-5 pt-2  w-[1000px] m-auto mt-5 rounded-3xl '>
  {
    search_Rslt.map((item)=>(

  <div key={item.id} className='flex items-center  justify-around  mt-10'>

 <div className='flex items-center gap-5'>
   <div className='w-[80px] h-[80px]   mb-3'>
    <img src={item.category.image} alt="product image" className='rounded-[20px]' />
   </div>
  <h1 className=' pt-4 pb-2  text-lg font-praymary text-black mt-[-15px] '>{item.title}</h1>
  </div>
  <h1 className=' pt-4 pb-2   text-lg font-praymary text-black  mt-[-15px] '>price</h1>
   </div>
    ))
  }

</div>
  </nav>





</>
)
}

export default Navbar