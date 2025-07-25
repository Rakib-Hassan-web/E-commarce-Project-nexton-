import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // ✅ fixed
import { BsStars } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { HiMiniStar } from 'react-icons/hi2';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProductImageSlider = () => {
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${params.ProductID}`)
      .then((res) => {
        setProduct(res.data);
        if (res.data.images && res.data.images.length > 0) {
          setCurrentImage(res.data.images[0]); 
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.ProductID]);

  if (!product) return <p>Founding.......</p>; 
  return (
    <section id='PRODUCT_PAGE' className="mt-10">
      <div className="container">
        <div className='flex gap-20'>
          {/* Image Slider */}
          <div className="flex">
            {/* Thumbnails */}
            <div className="flex flex-col w-2/12 space-y-2 cursor-pointer">
              {product.images?.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`Thumbnail ${i}`}
                  className={`w-full object-contain ${currentImage === imgSrc ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setCurrentImage(imgSrc)}
                />
              ))}
            </div>

            {/* Main preview */}
            <div className="flex-1 w-[500px] mr-[32px] ml-6">
              <img
                src={currentImage} proImg={product.images[0]}
                alt="Product Preview"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="InfoBorder w-[460px] h-[463px] border-[#E5E7EB] border-1 p-[33px] rounded-[16px]">
              <div className='firstRow flex justify-between mb-8 '>
                <div className='flex gap-1'>
                  <HiMiniStar className='text-[#FBBF24] text-xl' />
                  <p className='text-base text-praymary font-praymary font-semibold'>4.9 · </p>
                  <p className=' underline text-base text-praymary font-praymary font-medium'>142 reviews</p>
                </div>
                <div>
                  <h2 className=' font-praymary font-semibold text-[24px] text-second'>{product.price}$</h2>
                </div>
              </div>

              {/* Size & Quantity */}
              <div className="SEcondRow mb-8">
                <h2 className='text-base text-second font-praymary font-semibold'>Size:
                  <span className='text-base text-second font-praymary font-semibold'> S</span>
                </h2>
                <div className="Sizes flex gap-2 mt-3">
                  {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                    <div key={size}
                      className="SmallSize border border-[#E5E7EB] py-[10px] px-[30px] w-fit rounded-[12px] cursor-pointer hover:bg-[#0EA5E9] duration-[.4s] text-base text-praymary font-praymary font-semibold hover:text-white ">
                      <h2>{size}</h2>
                    </div>
                  ))}
                </div>
              </div>


              {/* Quantity and Add to cart */}
              <div className="thirdRo flex items-center justify-between">
                <div className="quentityBg w-[110px] bg-[#F8F8F8] rounded-full py-2 px-3 flex justify-between items-center">
                  <span className='bg-[#fff] w-[24px] h-[24px] rounded-full border border-[#E5E7EB] text-3xl flex justify-center items-center text-praymary cursor-pointer'>
                    <p className='mb-2'>-</p>
                  </span>
                  <h2 className='text-base text-praymary font-praymary font-medium'>1</h2>
                  <span className='bg-[#fff] w-[24px] h-[24px] rounded-full border border-[#E5E7EB] text-2xl flex justify-center items-center text-praymary cursor-pointer font-praymary'>+</span>
                </div>
                <Link
                  className="curtButton bg-second rounded-full w-fit py-4 px-8 flex items-center gap-2 shadow hover:scale-[1.2] duration-[.4s] hover:shadow-xl">
                  <HiOutlineShoppingBag className='text-white font-semibold text-xl' />
                  <h2 className='text-base font-medium font-praymary text-white'>Add to cart</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-10">
          <h2 className='text-[36px] text-second font-semibold font-praymary mb-1'>{product.title}</h2>
          <p className='w-[735px] text-base text-praymary font-praymary font-normal'>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductImageSlider;
