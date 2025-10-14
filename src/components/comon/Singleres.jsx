import React from 'react'

import { LuShoppingCart } from 'react-icons/lu'


const Singleres = ({ pname , pprice , pimage ,prating , pacce , pdiscount ,Showdetails ,cartclick}) => {
  
return (
<>

  {/* onClick={cartClick} */}



  <div className=' relative  h-[448px] w-[320px]'>

    <div onClick={cartclick}
      className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center text-2xl text-black font-bold absolute right-[20px] top-[30px] cursor-pointer hover:bg-praymary duration-[.4s] z-1 hover:text-white'>
      <button className="  rounded-2xl flex justify-center items-center cursor-pointer transition-all bg-white text-black px-4 py-2  border-white
        borer-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
             active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        <LuShoppingCart />
      </button></div>


    <div className='lg:w-[320px] w-full h-[448px]  flex flex-wrap  rounded-[16px]   ' onClick={Showdetails}>

      <div className="recoimg w-full h-[360px]  rounded-[16px] overflow-hidden mt-4  z-1 ">
        <img src={pimage} alt="product image" />
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