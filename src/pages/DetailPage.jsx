import React from 'react'
import AllProduct from '../components/AllProduct'
import Footer from '../components/Footer'

const DetailPage = () => (
<>

    <section id='detail_page'>

        <div className='       border-[#E5E7EB]     mt-[4px] mb-[40px]  border-t-1'></div>
        <div className="container">

            <div className="DetailPageALLside flex gap-[54px]">
            {/* ------------left side menu---------- */}
            <div className="LeftSide w-[285px] h-screen">

                <div id='catagories' className=" mt-10">
                    <h1 className='font-praymary font-semibold text-second text-[18px] mb-6'>Categories</h1>

                    <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Men’s fashion</h2>
                    </div>



                    <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Women’s fashion</h2>
                    </div>

 
                     <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Kids & Toys</h2>
                    </div>




                   <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Accessories</h2>
                    </div>




                   <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Cosmetics</h2>
                    </div>


                    <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Shoes</h2>
                    </div>



                     <div  className='flex items-center gap-3 mb-4'>
                        <input type='checkbox'  className='w-4 h-4 border-1   border-[#94A3B8] rounded-[4px] outline-none '/>
                         <h2  className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Sports</h2>
                    </div>




                   

                </div>

                <div className='       border-[#E5E7EB]     mb-[32px] mt-[40px]  border-t-1'></div>

                <div className="Prizerange ">

                    <h1 className='font-praymary font-semibold text-second text-[18px] mb-6'>Price range</h1>

                     <input type="range" />

                    <div className="Prices flex items-center justify-between">

                        <div className="minPrice ">
                            <h2 className='font-praymary font-normal text-praymary text-[16px] mb-1 mt-8'>Min price</h2>
                            <div
                                className="borderMINprice w-[130px] border py-2 flex justify-around items-center  rounded-full  border-[#E5E7EB]">
                                <p className='font-praymary font-medium text-praymary text-[14px]'>100</p>
                                <p className='font-praymary font-medium text-praymary text-[14px]'>$</p>
                            </div>
                        </div>


                        <div className="MaxPrice ">
                            <h2 className='font-praymary font-normal text-praymary text-[16px] mb-1 mt-8'>Max price</h2>
                            <div
                                className="borderMINprice w-[130px] border py-2 flex justify-around items-center  rounded-full  border-[#E5E7EB]">
                                <p className='font-praymary font-medium text-praymary text-[14px]'>500</p>
                                <p className='font-praymary font-medium text-praymary text-[14px]'>$</p>
                            </div>
                        </div>




                    </div>

                </div>

                 <div className='       border-[#E5E7EB]     mt-[40px]   border-t-1'></div>


                  <div id='Order' className=" mt-8">
                    <h1 className='font-praymary font-semibold text-second text-[18px] mb-6'>Sort order</h1>


                   <div  className='flex items-center gap-3 mb-4'>
                        <input type='radio'  className='w-[20px] h-[20px] border-1 !rounded-full border-[#94A3B8] '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Most Popular</h2>
                    </div>



 <div  className='flex items-center gap-3 mb-4'>
                        <input type='radio'  className='w-[20px] h-[20px] border-1 !rounded-full border-[#94A3B8] '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Best Rating</h2>
                    </div>



 <div  className='flex items-center gap-3 mb-4'>
                        <input type='radio'  className='w-[20px] h-[20px] border-1 !rounded-full border-[#94A3B8] '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Newest</h2>
                    </div>
 <div  className='flex items-center gap-3 mb-4'>
                        <input type='radio'  className='w-[20px] h-[20px] border-1 !rounded-full border-[#94A3B8] '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Price Low - Hight</h2>
                    </div>
 <div  className='flex items-center gap-3 mb-4'>
                        <input type='radio'  className='w-[20px] h-[20px] border-1 !rounded-full border-[#94A3B8] '/>
                         <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px] '>Price Hight - Low</h2>
                    </div>

        

                </div>





            </div>


{/* -----------rightside-------------- */}





</div>
{/* ----------footer----- */}

        </div>
    </section>












</>
)

export default DetailPage