import React from 'react'
import { HiStar } from 'react-icons/hi'

const Singleres = ({ pname , pprice , pimage ,prating , pacce , pdiscount ,Showdetails}) => {
return (
<>




  <section id='recomandation'>

    <div className="container" onClick={Showdetails}>


      <div className='w-[320px] h-[448px]  rounded-[16px]'>

        <div className="recoimg w-full h-[360px]  rounded-[16px] overflow-hidden mt-4">
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



  </section>












</>
)
}

export default Singleres