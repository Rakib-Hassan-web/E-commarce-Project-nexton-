import React from 'react'
import Singleservice from './comon/Singleservice'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiExchange2Line, RiRefund2Line } from 'react-icons/ri'
import { TfiWorld } from 'react-icons/tfi'

const Service = () => {
  return (
   <>
   
   <section id='service'  >
    <div className=''>
        <div className="serviceRow container lg:border mt-[52px]  pt-[52px]  lg:py-6 border-[#E5E7EB] lg:rounded-[16px] flex lg:justify-around lg:items-center flex-wrap  px-[24px] ">
            <h2 className='font-semibold font-praymary text-base text-second lg:hidden  pb-[24px]'>Nexton® always with you</h2>
            <Singleservice  servicebigtxt={'Free shipping      '} serviceicon={  <TbTruckDelivery className='text-2xl text-praymary' />} servicesmlltxt={'On orders over $50.00'}/>
            <span className='  lg:w-[1px]  lg:h-[50px] lg:bg-[#E5E7EB] lg:inline-block'></span>
             <Singleservice  servicebigtxt={'Very easy to return'} serviceicon={  <RiExchange2Line className='text-2xl text-praymary' />} servicesmlltxt={'Just phone number'}/>
                      <span className='  lg:w-[1px]  lg:h-[50px] lg:bg-[#E5E7EB] lg:inline-block'></span>

            <Singleservice  servicebigtxt={'Worldwide delivery'} serviceicon={  <TfiWorld className='text-2xl text-praymary' />} servicesmlltxt={'Fast delivery worldwide'}/>
                     <span className='  lg:w-[1px]  lg:h-[50px] lg:bg-[#E5E7EB] lg:inline-block'></span>
          <Singleservice  servicebigtxt={'Refunds policy'} serviceicon={  <RiRefund2Line className='text-2xl text-praymary' />} servicesmlltxt={'60 days return for any reason'}/>
            
        </div>
    </div>
   </section>

  
   
 



   
   </>
  )
}

export default Service