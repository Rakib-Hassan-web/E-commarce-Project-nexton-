import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router';

const BestSeller = () => {



    var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
};




const [product , setprodect] =useState([])

useEffect(()=>{

axios.get(' https://api.escuelajs.co/api/v1/products')
.then((res)=>{setprodect(res.data)})

.catch((error)=>{
})
} ,[])



console.log(product)

product.length = 4
  return (
    <section id='bestSeller' className='mt-[136px]'>

    <div className="container">
      <h2 className=' w-[881px]font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'>
        Best Sellers.
        <span className='font-praymary lg:text-[36px] font-semibold text-praymary  '>  Best selling of the month</span>
      </h2>

      <Slider {...settings}>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,4).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,4).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,4).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,4).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,4).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug} />
            ))
            }
          </div>
        </div>
        <div>
          <div className=' lg:flex mt-5 lg:flex-wrap justify-between items-center'>
            {
            product.slice(0,4).map((item)=>(
            <Singleres pimage={item.category.image} pname={item.title} pprice={item.price} pacce={item.slug}  />
            ))
            }
          </div>
        </div>
      </Slider>


      <div className='  mt-15'>
        <Link
          className=' m-auto text-center  py-4 px-10 bg-black text-base text-white font-praymary font-medium flex justify-center items-center w-fit rounded-[20px] '>
        See All</Link>
      </div>
    </div>



  </section>

  )
}

export default BestSeller