import React from 'react'

import { LuShoppingCart } from 'react-icons/lu'


const Singleres = ({ pname , pprice , pimage ,prating , pacce , pdiscount ,Showdetails}) => {
return (
<>

{/* onClick={cartClick} */}


 
         <div className=' relative  h-[448px] w-[320px]'>
             
               <button  className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-2xl text-black font-bold absolute right-[20px] top-[30px] cursor-pointer hover:bg-praymary duration-[.4s] z-20 hover:text-white'><LuShoppingCart  /></button>

       
      <div className='w-[320px] h-[448px]  rounded-[16px]   ' onClick={Showdetails}>

        <div className="recoimg w-full h-[360px]  rounded-[16px] overflow-hidden mt-4  z-1 ">
          <img src={pimage} alt="product image"   />
        </div>
          
        <div className="recoAllTxt">
         

          <div className="reco1sttxtrow flex items-center justify-between   ">
            <h2 className='font-praymary font-semibold text-second text-base'>{pname}</h2>
            <h2 className='font-praymary font-semibold text-second text-base'>${pprice}</h2>
          </div>


          <div className="reco2ndtxtrow flex items-center justify-between  ">
            <p className='text-[14px] font-normal font-praymary text-praymary cursor-pointer'>{pacce}</p>
            <p className='text-[14px] font-normal font-praymary text-praymary line-through'>{pdiscount}</p>
          </div>




        </div>


</div>




      </div>












</>
)
}

export default Singleres