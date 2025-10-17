import React from 'react'
import AllProduct from '../components/AllProduct'
import Footer from '../components/Footer'

const DetailPage = () => (
  <>
    <section id='detail_page' className='py-6'>
      <div className='border-t border-[#E5E7EB] mt-[4px] mb-[40px]'></div>
      <div className="container mx-auto px-4">

        <div className="DetailPageALLside flex flex-col lg:flex-row gap-6 lg:gap-[54px]">
          {/* ------------Left side menu---------- */}
          <div className="LeftSide w-full lg:w-[285px] lg:h-screen border border-transparent p-2 lg:p-0">

            {/* Categories */}
            <div id='catagories' className="mt-6 lg:mt-10">
              <h1 className='font-praymary font-semibold text-second text-[18px] mb-6 text-center lg:text-left'>Categories</h1>

              {[
                "Men’s fashion",
                "Women’s fashion",
                "Kids & Toys",
                "Accessories",
                "Cosmetics",
                "Shoes",
                "Sports"
              ].map((item, i) => (
                <div key={i} className='flex items-center gap-3 mb-4 justify-start'>
                  <input type='checkbox' className='w-4 h-4 border border-[#94A3B8] rounded-[4px] outline-none' />
                  <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px]'>{item}</h2>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className='border-t border-[#E5E7EB] mb-[32px] mt-[40px]'></div>

            {/* Price Range */}
            <div className="Prizerange">
              <h1 className='font-praymary font-semibold text-second text-[18px] mb-6 text-center lg:text-left'>Price range</h1>
              <input type="range" className='w-full accent-[#94A3B8]' />

              <div className="Prices flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
                {/* Min Price */}
                <div className="minPrice text-center sm:text-left">
                  <h2 className='font-praymary font-normal text-praymary text-[16px] mb-1 mt-8'>Min price</h2>
                  <div className="borderMINprice w-[130px] border py-2 flex justify-around items-center rounded-full border-[#E5E7EB] mx-auto sm:mx-0">
                    <p className='font-praymary font-medium text-praymary text-[14px]'>100</p>
                    <p className='font-praymary font-medium text-praymary text-[14px]'>$</p>
                  </div>
                </div>

                {/* Max Price */}
                <div className="MaxPrice text-center sm:text-left">
                  <h2 className='font-praymary font-normal text-praymary text-[16px] mb-1 mt-8'>Max price</h2>
                  <div className="borderMINprice w-[130px] border py-2 flex justify-around items-center rounded-full border-[#E5E7EB] mx-auto sm:mx-0">
                    <p className='font-praymary font-medium text-praymary text-[14px]'>500</p>
                    <p className='font-praymary font-medium text-praymary text-[14px]'>$</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className='border-t border-[#E5E7EB] mt-[40px]'></div>

            {/* Sort Order */}
            <div id='Order' className="mt-8">
              <h1 className='font-praymary font-semibold text-second text-[18px] mb-6 text-center lg:text-left'>Sort order</h1>

              {[
                "Most Popular",
                "Best Rating",
                "Newest",
                "Price Low - High",
                "Price High - Low"
              ].map((item, i) => (
                <div key={i} className='flex items-center gap-3 mb-4 justify-start'>
                  <input type='radio' name="sort" className='w-[20px] h-[20px] border border-[#94A3B8] rounded-full' />
                  <h2 className='font-praymary font-normal text-praymary text-[14px] mt-[2px]'>{item}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* -----------Right side-------------- */}
          <div className="RightSide w-full">
            <AllProduct />
          </div>
        </div>

        {/* ----------Footer---------- */}
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </section>
  </>
)

export default DetailPage
