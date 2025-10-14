import React from 'react'
import { Link } from 'react-router'
import bgextra from '../assets/image/bannerex.png'

const BottomBanner = () => {
  return (
    <>
      <section id='BottomBanner' className='mt-[60px] sm:mt-[80px] lg:mt-[110px]'>
        <div className="container px-4 sm:px-6 lg:px-0">
          <div
            id='bannerbg2'
            style={{
              background: `url(${bgextra})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className='py-[60px] sm:py-[80px] lg:py-[94px] px-[40px] sm:px-[60px] lg:pl-[120px] rounded-[24px]'
          >
            <div className='pl-0 sm:pl-[20px] lg:pl-[124px] max-w-[600px]'>
              
              <h1 className='text-praymary text-[12px] sm:text-[16px] lg:text-[20px] font-praymary font-medium'>
                100% Original Products
              </h1>

              <h2 className='text-second text-[22px] sm:text-[28px] lg:text-[36px] font-semibold font-praymary w-[240px] sm:w-[320px] lg:w-[362px] mt-[10px] lg:mt-[14px] mb-[16px] sm:mb-[20px] lg:mb-[24px]'>
                The All New Fashion Collection Items
              </h2>

              <p className='text-[16px] sm:text-[18px] lg:text-[20px] text-praymary font-medium font-praymary mb-4 sm:mb-6'>
                Starting from: $59.99
              </p>

              <Link
                to={'#'}
                className='bg-second flex items-center justify-center gap-2 sm:gap-3 rounded-full text-white text-[13px] sm:text-[15px] lg:text-[16px] font-medium font-praymary py-[10px] sm:py-[12px] lg:py-[14px] px-[22px] sm:px-[28px] lg:px-[34px] hover:scale-[1.05] duration-300 w-fit'
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BottomBanner
