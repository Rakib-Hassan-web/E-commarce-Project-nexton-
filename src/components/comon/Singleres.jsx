import React from 'react'
import { HiStar } from 'react-icons/hi'
import { IoCartOutline } from 'react-icons/io5'
import { PiShoppingCartSimpleThin } from 'react-icons/pi'

const Singleres = ({ pname , pprice , pimage ,prating , pacce , pdiscount ,Showdetails}) => {
return (
<>

{/* onClick={cartClick} */}


  {/* <section id='recomandation'>

    <div className="container"  */}
         <div className=' relative  h-[448px] w-[320px]'>
             
               <button  className='w-[40px] h-[40px] bg-orange-400 rounded-full flex justify-center items-center text-2xl text-white font-bold absolute right-[10px] top-[10px] cursor-pointer hover:bg-primary duration-300 z-20'><PiShoppingCartSimpleThin /></button>

       
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
{/* 
    </div>



  </section> */}












</>
)
}

export default Singleres