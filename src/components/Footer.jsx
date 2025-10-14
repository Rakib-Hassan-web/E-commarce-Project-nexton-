import React from 'react'
import footerlogo from '../assets/image/logo.png'
import { FaFacebook, FaTelegram } from 'react-icons/fa6'
import { Link } from 'react-router'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <section className='mt-[54px] mb-[60px]'>
        {/* top border */}
        <div className='border-t border-[#E5E7EB] mb-[60px]'></div>

        <div className='container'>
          {/* Main footer grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] md:gap-[60px] lg:gap-[80px] justify-between'>

            {/* ------------- First Footer Column ------------ */}
            <div className="first_col text-center sm:text-left">
              <img src={footerlogo} alt="FooterLOGO" className='w-[119px] mx-auto sm:mx-0' />

              <div className='mt-5 space-y-4'>
                <Link to={'#'} className='flex items-center justify-center sm:justify-start gap-3'>
                  <FaFacebook className='text-[#4676ED] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Facebook</h2>
                </Link>

                <Link to={'#'} className='flex items-center justify-center sm:justify-start gap-3'>
                  <TbBrandYoutubeFilled className='text-[#DA0000] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Youtube</h2>
                </Link>

                <Link to={'#'} className='flex items-center justify-center sm:justify-start gap-3'>
                  <FaTelegram className='text-[#1c92d2] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Telegram</h2>
                </Link>

                <Link to={'#'} className='flex items-center justify-center sm:justify-start gap-3'>
                  <AiFillTwitterCircle className='text-[#5A99EC] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Twitter</h2>
                </Link>
              </div>
            </div>

            {/* ------------- Second Footer Column ------------ */}
            <div className="SecondCol text-center sm:text-left">
              <h1 className='font-praymary font-semibold text-second text-lg pb-5'>Getting started</h1>
              <div className='flex flex-col items-center sm:items-start space-y-3'>
                <button className='font-praymary font-normal text-praymary text-base'>Release Notes</button>
                <button className='font-praymary font-normal text-praymary text-base'>Upgrade Guide</button>
                <button className='font-praymary font-normal text-praymary text-base'>Browser Support</button>
                <button className='font-praymary font-normal text-praymary text-base'>Dark Mode</button>
              </div>
            </div>

            {/* ------------- Third Footer Column ------------ */}
            <div className="ThirdCOL text-center sm:text-left">
              <h1 className='font-praymary font-semibold text-second text-lg pb-5'>Explore</h1>
              <div className='flex flex-col items-center sm:items-start space-y-3'>
                <button className='font-praymary font-normal text-praymary text-base'>Prototyping</button>
                <button className='font-praymary font-normal text-praymary text-base'>Design systems</button>
                <button className='font-praymary font-normal text-praymary text-base'>Pricing</button>
                <button className='font-praymary font-normal text-praymary text-base'>Security</button>
              </div>
            </div>

            {/* ------------- Fourth Footer Column ------------ */}
            <div className="FourthCOL text-center sm:text-left">
              <h1 className='font-praymary font-semibold text-second text-lg pb-5'>Community</h1>
              <div className='flex flex-col items-center sm:items-start space-y-3'>
                <button className='font-praymary font-normal text-praymary text-base'>Discussion Forums</button>
                <button className='font-praymary font-normal text-praymary text-base'>Code of Conduct</button>
                <button className='font-praymary font-normal text-praymary text-base'>Contributing</button>
                <button className='font-praymary font-normal text-praymary text-base'>API Reference</button>
              </div>
            </div>
          </div>
        </div>

 awerasf
      </section>
    </>
  )
}

export default Footer
