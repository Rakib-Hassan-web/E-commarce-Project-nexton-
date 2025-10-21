import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singleres from './comon/Singleres'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { PorductNamereducer } from './slice/SrcSlice';

const Recomandation = () => {

  // ✅ Slider Config (responsive properly set)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tab device
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // small tablet or large phone
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // mobile device
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Fetch products
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error));
  }, []);

  // ✅ Show details
  const handelShow = (INFO) => {
    navigate(`/Product/${INFO.id}`);
  }

  // ✅ Add to cart
  const handlecart = (data) => {
    const myArray = JSON.parse(localStorage.getItem('ProductKey')) || [];
    myArray.push(data);
    localStorage.setItem('ProductKey', JSON.stringify(myArray));
    dispatch(PorductNamereducer(JSON.parse(localStorage.getItem('ProductKey'))));
  }

  return (
    <>
      <section id='Recomandation' className='lg:mt-[176px] mt-10 mb-10'>
        <div className="container mx-auto px-4">
          
          <h2 className='font-praymary lg:text-[36px] text-[24px] font-semibold text-second mb-[40px]'>
            Recommendations.
            <span className='font-praymary lg:text-[36px] font-semibold text-praymary hidden lg:block'>
              Best matching products for you
            </span>
          </h2>

          {/* ✅ Slider */}
          <div className="slider-container">
            <Slider {...settings}>
              {product.map((item, i) => (
                <Singleres
                  key={i}
                  cartclick={() => handlecart(item)}
                  Showdetails={() => handelShow(item)}
                  pimage={item.images[0]}
                  pname={item.category?.slug}
                  pprice={item.price}
                  pacce={item.title}
                />
              ))}
            </Slider>
          </div>

          {/* ✅ Button */}
          <div className='mt-10 flex justify-center'>
            <Link
              to={'/DetailPage'}
              className='py-4 px-10 bg-black text-base text-white font-praymary font-medium rounded-[20px]'
            >
              See All
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}

export default Recomandation
