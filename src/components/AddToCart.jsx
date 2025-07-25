import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router'

const AddToCart = ({closeCart , closeDiv}) => {




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
            <div className="allProuct  ">
                {/* -----------single product---------- */}
                <div className='flex  items-center justify-around  mt-5'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>

                </div>
                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>

                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>
                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>
                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>
                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>
                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>
                {/* -----------single product---------- */}

                <div className='flex  items-center justify-around  mt-6'>
                    <div className="singleProduct flex gap-4 items-center">
                        <div className="productimg w-[50px] h-[50px] bg-praymary rounded-2xl">
                            {/* image asbe */}
                        </div>

                        <h2 className='text-base text-second font-medium font-praymary'>ProductName</h2>
                    </div>

                    <div className="product_price text-md text-second font-medium font-praymary ">20$</div>


                </div>

                {/* -----------total_price------- */}
                <div className="totalPrice flex items-center justify-around mt-14">
                    <h2 className='product_price text-[23px] text-second font-medium font-praymary'>Total Price :
                    </h2>
                    <h2 className='product_price text-[20px] text-second font-medium font-praymary'>160$</h2>

                </div>
                {/* ------------check out button---------- */}
                <Link
                    className='w-full text-center bg-black mt-[5px] inline-block py-4 text-2xl text-white font-praymary font-semibold'>
                Check Out</Link>
            </div>

                        </div>



    </section>












</>
)
}

export default AddToCart
























