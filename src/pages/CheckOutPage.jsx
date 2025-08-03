import React, { useEffect, useState } from 'react'
// import BreadCrumb from './BreadCrumb'
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCard2 } from "react-icons/ci";
import { GrFormSubtract } from 'react-icons/gr';
import { MdAdd } from 'react-icons/md';
import axios from 'axios';
// import OrderSummary from './common/OrderSummary';

const CheckOutPage = () => {

const localCart = JSON.parse(localStorage.getItem('ProductKey'))

// ----------api------
const [product , setprodect] =useState([])
// const [cartProduct , setcartProduct ] =useState([])

useEffect(()=>{

axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{

let filterproduct = res.data.filter((item)=>{
return localCart?.includes(item.id)

})


const AddQuantity = filterproduct.map((item)=>{
return {...item , Qty:1}
})




setprodect(AddQuantity)


})

.catch((error)=>{
})
} ,[])


// ----------handeller----------
const handleAddqty =(id)=>{

}





return (
<>
    <section id='checkOut' className='pt-[40px] pb-[72px]'>
        <div className="container">
            <h2 className='text-[36px] font-semibold font-praymary text-second mb-[12px]'>Checkout</h2>
            <div id='all sides ' className='flex justify-between'>
                {/* -----cheack out part-------- */}
                <div>
                    {/*
                    <BreadCrumb breadName={'Checkout'} /> */}

                    <div className="checkRow mt-[52px] flex justify-between">
                        <div className="INFO w-[638px]">
                            {/* /----------contact info----------- */}

                            <div className="CONTACT border border-[#E5E7EB] rounded-[16px]">

                                <div className='flex gap-[12px] items-center border-b border-[#E5E7EB] p-[24px]'>
                                    <FaRegCircleUser className='text-[24px] text-[#334155]' />
                                    <p className='text-[16px] text-[#4B5563] font-medium font-praymary'>CONTACT INFO</p>
                                </div>
                                <div className="phnEmail flex gap-[24px] items-center">
                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-second font-medium font-praymary'>Your phone
                                            number
                                        </p>
                                        <input type='number'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>

                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-second font-medium font-poppins'>Email address
                                        </p>
                                        <input type='email'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                </div>

                            </div>



                            {/* -----------shipping address----------- */}

                            <div className="SHIPPING border border-[#E5E7EB] rounded-[16px] mt-[40px]">
                                <div className='flex gap-[12px] items-center border-b border-[#E5E7EB] p-[24px]'>
                                    <LiaShippingFastSolid className='text-[24px] text-[#334155]' />
                                    <p className='text-[16px] text-[#4B5563] font-medium font-praymary'>SHIPPING ADDRESS
                                    </p>
                                </div>
                                <div className="ADDRESS flex justify-between">
                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Frist Name
                                        </p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>

                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Last Name
                                        </p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                </div>
                                <div className='flex gap-[24px] p-[24px]'>
                                    <div className='w-[384px]'>
                                        <p className='text-[16px] text-second font-medium font-praymary'>Address line 1
                                        </p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                    <div className='w-[180px]'>
                                        <p className='text-[16px] text-second font-medium font-praymary'>Apt, Suite</p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                </div>

                                <div className="LINE2 p-[24px]">
                                    <p className='text-[16px] text-second font-medium font-praymary'>Address line 2</p>
                                    <input type='text'
                                        className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className="CITY flex justify-between">
                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>City</p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>

                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Country</p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                </div>

                                <div className="ADDRESS flex justify-between">
                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>
                                            State/Province
                                        </p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>

                                    <div className='w-[283px] p-[24px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Postal code
                                        </p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                </div>
                            </div>

                            <div className="PAYMENT mt-[41px] border border-[#E5E7EB] rounded-[16px]">
                                <div className="head flex gap-[12px] items-center p-[12px] border-b border-[#E5E7EB]">
                                    <CiCreditCard2 className='text-[24px] text-[#334155]' />
                                    <p className='text-[16px] text-[#4B5563] font-medium font-praymary'>PAYMENT</p>
                                </div>

                                <div className='p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-praymary'>Card number</p>
                                    <input type='number'
                                        className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className='p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-praymary'>Name on the card
                                    </p>
                                    <input type='text'
                                        className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className='flex gap-[24px] p-[24px]'>
                                    <div className='w-[386px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Expiration
                                            date
                                            (MM/YY)</p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>

                                    <div className='w-[180px]'>
                                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>CVC</p>
                                        <input type='text'
                                            className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>
                {/*------------- Order summery part---------- */}

                <div className='ORDER-SUMMARY w-[618px]'>
                    <div id='SUMMARY'>
                        <h2 className='text-[24px] font-semibold font-praymary text-second mb-[20px]'>Order summary</h2>
                        <span className='w-full bg-[#E5E7EB] h-[1px] inline-block'></span>
                    </div>



                    {/* ------single product cart--------- */}
                    {

                    product.map((item )=>(



                    <div key={item.id} className='ITEM flex justify-between mt-[24px]'>
                        <div className='flex gap-[24px]'>
                            <div className="Img w-[106px] h-[105px] ">
                                <img src={item.images[0]} alt="product image"
                                    className='w-full h-full  rounded-[16px]' />
                            </div>
                            <div>
                                <h2
                                    className='  text-[16px] font-semibold font-praymary text-second  overflow-ellipsis'>
                                    {item.title}
                                </h2>
                                <p className='text-[14px] font-normal font-praymary text-[#4B5563] mt-[4px]'>
                                    {item.category.slug}</p>

                                <div
                                    className="BTN w-[110px] bg-[#E5E7EB] px-[12px] py-[8px] rounded-[20px] flex justify-between mt-[20px]">
                                    <button
                                        className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'>
                                        <GrFormSubtract /></button>
                                    <p>{item.Qty}</p>
                                    <button onClick={()=>handleAddqty(id)}
                                        className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'>
                                        <MdAdd /></button>
                                </div>
                            </div>
                        </div>

                        <div className='PRICE text-center'>
                            <p className='text-[16px] font-semibold font-praymary text-second mt-[31px]'>{item.price}$
                            </p>
                            <p className='text-[14px] font-normal font-praymary text-second line-through'>$169.99</p>
                        </div>
                    </div>
                    ))
                    }
                    <span className='w-full bg-[#E5E7EB] h-[1px] inline-block mt-[24px]'></span>

                    <div className='flex justify-between items-center mt-[24px]'>
                        <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>Subtotal</p>
                        <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>$169.99</p>
                    </div>

                    <div className='flex justify-between items-center mt-[8px]'>
                        <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>Shipping estimate</p>
                        <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>$5.00</p>
                    </div>

                    <div className='flex justify-between items-center mt-[8px]'>
                        <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>Tax estimate</p>
                        <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>$24.90</p>
                    </div>

                    <div className='flex justify-between items-center mt-[24px]'>
                        <p className='text-[16px] font-semibold font-praymary text-second '>Order total</p>
                        <p className='text-[16px] font-semibold font-praymary text-second '>$199.89</p>
                    </div>

                    <div className='mt-[24px]'>
                        <button
                            className='w-full h-[52px] cursor-pointer bg-second rounded-full text-[16px] text-white font-medium font-praymary'>Confirm
                            order</button>
                    </div>

                </div>

            </div>
        </div>
    </section>
</>
)
}

export default CheckOutPage