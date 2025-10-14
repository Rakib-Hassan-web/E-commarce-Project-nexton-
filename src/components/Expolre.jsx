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
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640, // for mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <section id='Explore' className='mt-[60px] sm:mt-[70px] lg:mt-[88px]'>
        <div className="container px-4 sm:px-6 lg:px-0">
          <h2 className='font-praymary text-[22px] sm:text-[28px] lg:text-[36px] font-semibold text-second mb-[24px] sm:mb-[32px] lg:mb-[40px] leading-snug'>
            Start exploring.{" "}
            <span className='font-praymary text-[22px] sm:text-[28px] lg:text-[36px] font-semibold text-praymary'>
              Good things are waiting for you
            </span>
          </h2>

          <Slider {...settings}>
            {/* Men's */}
            <div className="EXPLORE w-full px-2 sm:px-4">
              <div className='border w-full sm:w-[360px] lg:w-[419px] px-[24px] sm:px-[32px] lg:px-[40px] py-[32px] sm:py-[36px] lg:py-[40px] inline-block rounded-[16px] border-[#E5E7EB] mx-auto'>
                <SingleExplore
                  exploreBigtext={"For Men's"}
                  exploreSmalltxt={'Starting at $24'}
                  explorebutton={
                    <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px]'>
                      Shop Now
                      <FaArrowRightLong className='text-xl' />
                    </Link>
                  }
                />
              </div>
            </div>

            {/* Women's */}
            <div className='border w-full sm:w-[360px] lg:w-[419px] p-[32px] sm:p-[36px] lg:p-[40px] rounded-[16px] border-[#E5E7EB] mx-auto'>
              <SingleExplore
                exploreBigtext={"For Women's"}
                exploreSmalltxt={'Starting at $19'}
                explorebutton={
                  <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px]'>
                    Shop Now
                    <FaArrowRightLong className='text-xl' />
                  </Link>
                }
              />
            </div>

            {/* Accessories */}
            <div className='border w-full sm:w-[360px] lg:w-[419px] p-[32px] sm:p-[36px] lg:p-[40px] rounded-[16px] border-[#E5E7EB] mx-auto'>
              <SingleExplore
                exploreBigtext={"Accessories"}
                exploreSmalltxt={'Explore accessories'}
                explorebutton={
                  <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px]'>
                    Shop Now
                    <FaArrowRightLong className='text-xl' />
                  </Link>
                }
              />
            </div>

            {/* Kid's */}
            <div className='border w-full sm:w-[360px] lg:w-[419px] p-[32px] sm:p-[36px] lg:p-[40px] rounded-[16px] border-[#E5E7EB] mx-auto'>
              <SingleExplore
                exploreBigtext={"For Kid's"}
                exploreSmalltxt={'Starting at $24'}
                explorebutton={
                  <Link className='font-praymary font-medium text-[14px] text-praymary flex gap-[8px] items-center pl-[12px]'>
                    Shop Now
                    <FaArrowRightLong className='text-xl' />
                  </Link>
                }asfsfd
              />
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Expolre
