import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router'

const AddToCart = ({closeCart , closeDiv}) => {



const localCart = JSON.parse(localStorage.getItem('ProductKey'))


const [product , setprodect] =useState([])

useEffect(()=>{

axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{console.log(error)})
} ,[])
 
const CartAll =product.filter((item)=>{
  return localCart.includes(item.id)
})


console.log(CartAll)

return (
<>



    <section id='addTOCart'>

<div  onClick={closeDiv} className='w-full h-screen bg-[#00000046] absolute top-0 left-0 z-12'></div>

          <div className='bg-white z-20 pt-18 w-[500px] h-screen absolute top-0 right-0'> 
            {/* -------------cart Heading------------ */}
            <div className="Cart_heading flex  items-center  justify-around gap-55">
                <h2 className='text-[30px] font-semibold font-praymary text-second pl-5'>AddToCart</h2>
                <div className='cursor-pointer pr-6'>{closeCart}</div>

            </div>
            <div className="allProuct   h-[610px]  overflow-y-scroll">

                {
                    CartAll.map((item )=>(

                <div key={item.id} className='flex  items-center justify-around  mt-5'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[70px] h-[70px]  rounded-3xl bg-praymary ">
                           <img src={item.images[0]} alt="Productimage" className='rounded-3xl' />
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary overflow-ellipsis'>{item.title}</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">{item.price}$</div>

                </div>
                    ))
                }
                {/* -----------single product---------- */}
               
            </div>

                {/* -----------total_price------- */}
                <div className="totalPrice flex items-center gap-59 mb-4">
                    <h2 className='product_price text-[23px] text-second font-medium font-praymary pl-10'>Total Price :
                    </h2>
                    <h2 className='product_price text-[20px] text-second font-medium font-praymary'>160$</h2>

                </div>
                {/* ------------check out button---------- */}
                <Link
                    className='w-full text-center bg-black mt-[5px] inline-block py-4 text-2xl text-white font-praymary font-semibold'>
                Check Out</Link>

                        </div>



    </section>












</>
)
}

export default AddToCart
























