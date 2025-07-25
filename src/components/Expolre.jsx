import React from 'react'
import SingleExplore from './comon/SingleExplore'
import { Link } from 'react-router'
import { FaArrowRightLong } from 'react-icons/fa6'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Expolre = () => {

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1
};

return (
<>



    <section id='Explore ' className='mt-[88px] hidden lg:block '>

        <div className="container ">
            <h2 className=' w-[881px]font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'> Start exploring.
<span className='font-praymary lg:text-[36px] font-semibold text-praymary  '> Good things are waiting for
                    you</span>
            </h2>

            <Slider {...settings}>
                <div className="EXPLORE  w-full ">
                    <div className=' '>
                        <div className='border   w-[312px] lg:w-[419px] px-[40px] py-[40px] inline-block rounded-[16px] border-[#E5E7EB]'>


                            <SingleExplore exploreBigtext={"For Men's"} exploreSmalltxt={'Starting at $24'}
                            
                                explorebutton={ <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px] '>
                                Shop Now
                                <FaArrowRightLong className='text-xl' />
                                </Link>} />
                        </div>
                    </div>
                </div>







                <div className='border  w-[419px] p-[40px] rounded-[16px] lg:ml-[-80px] border-[#E5E7EB]'>

                    <SingleExplore exploreBigtext={"For Women's"} exploreSmalltxt={'Starting at $19'} explorebutton={
                        <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px] '>Shop
                        Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>


                <div className='border  w-[419px] p-[40px] rounded-[16px] lg:ml-[-40px] border-[#E5E7EB]'>


                    <SingleExplore exploreBigtext={"Accessories"} exploreSmalltxt={'Explore accessories'}
                        explorebutton={ <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px] '>Shop
                        Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>





                <div className='border  w-[419px] p-[40px] rounded-[16px] lg:ml-[-20px]  border-[#E5E7EB]'>      


                    <SingleExplore exploreBigtext={"For Kid's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px] '>Shop Now
                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>

            </Slider>
        </div>

    </section>











</>
)
}

export default Expolre