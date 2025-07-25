import React from 'react'

import { TbTruckDelivery } from "react-icons/tb";


const Singleservice = ( {serviceicon ,servicebigtxt,servicesmlltxt}) => {
  return (
    <>
    
    
    
    <div className="serviceBow flex  items-center  lg:gap-[16px] gap-1 mt-[15px] ">
       {serviceicon}
 
   <div className="boxtxt">
    <h2 className='lg:text-[18px] text-[14px]   font-normal lg:font-medium font-praymary lg:text-second text-praymary mr-[15px]
    '>
        {servicebigtxt}</h2>
    <h2 className='text-praymary font-praymary  text-[14px] font-normal hidden lg:block'>
        {servicesmlltxt}
    </h2>
   </div>

    </div>
    
    
    
    
    </>
  )
}

export default Singleservice