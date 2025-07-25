import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router';


const Recomandation = () => {

  // ✅ Slider Config
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };



const [product , setprodect] =useState([])

useEffect(()=>{

axios.get('https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])




const navigate = useNavigate()

let handelShow =(INFO)=>{
  navigate(`/Product/${INFO.id}` , )
}


const handlecart =()=>{
console.log('hummm')
}

return (
<>

  <section id='Recomandation' className='mt-[176px]'>

    <div className="container">
      <h2 className=' w-[881px]font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'>
        Recommendations.
        <span className='font-praymary lg:text-[36px] font-semibold text-praymary  '> Best matching products for
          you</span>
      </h2>

      {/* <Slider {...settings}>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.map((item)=>(
            <Singleres Showdetails={handelShow} pimage={item.category.image} pname={item.category.slug} pprice={item.price} pacce={item.title} />
            ))
            }
          </div>
        </div> */}

 <div className="slider-container">
                <Slider {...settings}>
                    {
                      product.map((item,i)=>(
                        <Singleres cartclick={()=>handlecart()} key={i} Showdetails={()=>handelShow(item)} pimage={item.images[0]} pname={item.category.slug} pprice={item.price} pacce={item.title}/>
                      ))
                    }  
                </Slider>
            </div>


{/* HandleCart={()=>HandleCart(item)} */}


      <div className='  mt-15'>
        <Link to={'/DetailPage'}
          className=' m-auto text-center  py-4 px-10 bg-black text-base text-white font-praymary font-medium flex justify-center items-center w-fit rounded-[20px] '>
        See All</Link>
     
      </div>
    </div>



  </section>






</>
)
}

export default Recomandation