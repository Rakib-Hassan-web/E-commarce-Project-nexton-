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
            <div className="first_col">
              <img src={footerlogo} alt="FooterLOGO" className='w-[119px]' />

              <div className='mt-5 space-y-4'>
                {/* Facebook */}
                <Link to={'#'} className='flex items-center gap-3'>
                  <FaFacebook className='text-[#4676ED] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Facebook</h2>
                </Link>

                {/* Youtube */}
                <Link to={'#'} className='flex items-center gap-3'>
                  <TbBrandYoutubeFilled className='text-[#DA0000] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Youtube</h2>
                </Link>

                {/* Telegram */}
                <Link to={'#'} className='flex items-center gap-3'>
                  <FaTelegram className='text-[#1c92d2] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Telegram</h2>
                </Link>

                {/* Twitter */}
                <Link to={'#'} className='flex items-center gap-3'>
                  <AiFillTwitterCircle className='text-[#5A99EC] text-3xl' />
                  <h2 className='font-praymary font-normal text-base text-praymary'>Twitter</h2>
                </Link>
              </div>
            </div>

            {/* ------------- Second Footer Column ------------ */}
            <div className="SecondCol">
              <h1 className='font-praymary font-semibold text-second text-lg pb-5 text-left'>
                Getting started
              </h1>
              <div className='flex flex-col text-left space-y-3'>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Release Notes</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Upgrade Guide</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Browser Support</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Dark Mode</button>
              </div>
            </div>

            {/* ------------- Third Footer Column ------------ */}
            <div className="ThirdCOL">
              <h1 className='font-praymary font-semibold text-second text-lg pb-5 text-left'>
                Explore
              </h1>
              <div className='flex flex-col text-left space-y-3'>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Prototyping</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Design systems</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Pricing</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Security</button>
              </div>
            </div>

            {/* ------------- Fourth Footer Column ------------ */}
            <div className="FourthCOL">
              <h1 className='font-praymary font-semibold text-second text-lg pb-5 text-left'>
                Community
              </h1>
              <div className='flex flex-col text-left space-y-3'>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Discussion Forums</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Code of Conduct</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>Contributing</button>
                <button className='font-praymary font-normal text-praymary text-base text-left'>API Reference</button>
              </div>
            </div>

          </div>
        </div>

        {/* bottom border */}
        <div className='border-t border-[#E5E7EB] mt-[54px]'></div>

        {/* copyright section */}
        <div className='text-center mt-6'>
          <p className='text-sm text-praymary font-praymary'>
            © {new Date().getFullYear()} All Rights Reserved by <span className='text-second font-semibold'>YourBrand</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default Footer
