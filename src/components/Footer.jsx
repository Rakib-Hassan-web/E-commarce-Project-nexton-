import React from 'react'

import footerlogo from '../assets/image/logo.png'
import { FaFacebook, FaTelegram } from 'react-icons/fa6'
import { Link } from 'react-router'
import { TbBrandYoutubeFilled } from 'react-icons/tb'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
return (
<>





    <section>

        <div className='       border-[#E5E7EB]     mt-[54px] mb-[60px]  border-t-1'></div>


        <div className="container">

            <div className="allItems flex items-center justify-between">
{/* -------------first Footer colum------------ */}
                <div className="first_col">
                    <img src={footerlogo} alt="FooterLOGO" className='w-[119px]' />
                    {/* -----------------Facebook--------------------- */}
                    <div className=' mt-5 mb-3'>
                        <Link to={'#'} className='  flex items-center gap-3'>
                        <FaFacebook className='text-[#4676ED] text-3xl ' />
                        <h2 className='font-praymary font-normal text-base text-praymary'>Facebook</h2>
                        </Link>
                    </div>
                    {/* --------------Youtube------------------ */}
                    <div className=' mt-5 mb-3'>
                        <Link to={'#'} className='  flex items-center gap-3'>
                        <TbBrandYoutubeFilled className='text-[#DA0000] text-3xl  ' />
                        <h2 className='font-praymary font-normal text-base text-praymary'>Youtube</h2>
                        </Link>
                    </div>
                    {/* --------------Telegram------------------ */}
                    <div className=' mt-5 mb-3'>
                        <Link to={'#'} className='  flex items-center gap-3'>
                        <FaTelegram className='text-[#1c92d2] text-3xl ' />
                        <h2 className='font-praymary font-normal text-base text-praymary'>Telegram</h2>
                        </Link>
                    </div>
                    {/* --------------Twitter------------------ */}
                    <div className=' mt-5 '>
                        <Link to={'#'} className='  flex items-center gap-3'>
                        <AiFillTwitterCircle className='text-[#5A99EC] text-3xl ' />
                        <h2 className='font-praymary font-normal text-base text-praymary'>Twitter</h2>
                        </Link>
                    </div>



                </div>


{/* -------------Second Footer colum------------ */}

      <div className="SecondCol">

       <h1 className='font-praymary font-semibold text-second text-base pb-5 text-left' >Getting started</h1>
       <div className=' flex-col flex  text-left '>
       <button className='font-praymary font-normal text-praymary text-base pt-5 pb-4 text-left'>Release Notes</button>
      <button className='font-praymary font-normal text-praymary text-base pb-4 text-left'>Upgrade Guide</button>
      <button className='font-praymary font-normal text-praymary text-base pb-4 text-left'>Browser Support</button>
      <button className='font-praymary font-normal text-praymary text-base text-left'>Dark Mode</button>

      </div>

</div>


{/* -------------Third Footer colum------------ */}
  
      <div className="ThirdCOL">

       <h1 className='font-praymary font-semibold text-second text-base pb-5 text-left' >Explore</h1>
       <div className=' flex-col flex  text-left '>
       <button className='font-praymary font-normal text-praymary text-base pt-5 pb-4 text-left'>Prototyping</button>
      <button className='font-praymary font-normal text-praymary text-base pb-4 text-left'>Design systems</button>
      <button className='font-praymary font-normal text-praymary text-base pb-4 text-left'>Pricing</button>
      <button className='font-praymary font-normal text-praymary text-base text-left'>Security</button>

      </div>

</div>

{/* -------------Fourth Footer colum------------ */}

        <div className="FourthCOL">

       <h1 className='font-praymary font-semibold text-second text-base pb-5 text-left' >Community</h1>
       <div className=' flex-col flex  text-left '>
       <button className='font-praymary font-normal text-praymary text-base pt-5 pb-4 text-left'>Discussion Forums</button>
      <button className='font-praymary font-normal text-praymary text-base pb-4 text-left'>Code of Conduct</button>
      <button className='font-praymary font-normal text-praymary text-base pb-4 text-left'>Contributing</button>
      <button className='font-praymary font-normal text-praymary text-base text-left'>API Reference</button>

      </div>

</div>








            </div>



        </div>



        <div className='       border-[#E5E7EB]     mt-[54px] mb-[60px]  border-t-1'></div>








    </section>








</>
)
}

export default Footer