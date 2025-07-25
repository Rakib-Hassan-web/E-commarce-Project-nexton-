import React from 'react'
import SingleExplore from './comon/SingleExplore'
import { Link } from 'react-router'
import { FaArrowRightLong } from 'react-icons/fa6'



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ResExpolre = () => {
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1
};

return (
<>


    <section id='Explore ' className='mt-[88px] block lg:hidden '>

        <div className="container ">
            <h2 className='font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'> Start
                exploring.
                <span className='font-praymary text-[36px] font-semibold text-praymary hidden lg:block '> Good things
                    are waiting for
                    you</span>
            </h2>

            <Slider {...settings}>



                <div className='border  w-[419px] py-[40px] px-6 rounded-[16px] lg:ml-[-80px] border-[#E5E7EB]'>

                    <SingleExplore exploreBigtext={"For Men's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link
                        className='font-praymary font-medium text-[14px] text-praymary flex items-center pl-3 gap-[8px]'>
                        Shop
                        Now

                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>




                <div className='border  w-[419px] py-[40px] px-6 rounded-[16px] lg:ml-[-80px] border-[#E5E7EB]'>

                    <SingleExplore exploreBigtext={"For Women's"} exploreSmalltxt={'Starting at $19'} explorebutton={
                        <Link
                        className='font-praymary font-medium text-[14px] text-praymary flex items-center pl-3 gap-[8px]'>
                        Shop
                        Now

                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>




                <div className='border  w-[419px] py-[40px] px-6 rounded-[16px] lg:ml-[-80px] border-[#E5E7EB]'>

                    <SingleExplore exploreBigtext={"Accessories"} exploreSmalltxt={'Explore accessories'}
                        explorebutton={ <Link
                        className='font-praymary font-medium text-[14px] text-praymary flex items-center pl-3 gap-[8px]'>
                        Shop
                        Now

                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>





                <div className='border  w-[419px] py-[40px] px-6 rounded-[16px] lg:ml-[-80px] border-[#E5E7EB]'>

                    <SingleExplore exploreBigtext={"For Kid's"} exploreSmalltxt={'Starting at $24'} explorebutton={
                        <Link
                        className='font-praymary font-medium text-[14px] text-praymary flex items-center pl-3 gap-[8px]'>
                        Shop
                        Now

                        <FaArrowRightLong className='text-xl' />
                        </Link>} />
                </div>


            </Slider>
        </div>

    </section>




</>
)
}

export default ResExpolre