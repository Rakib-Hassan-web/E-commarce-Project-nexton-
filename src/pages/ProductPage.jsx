import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { HiMiniStar } from 'react-icons/hi2';
import axios from 'axios';

const ProductImageSlider = (cartClick) => {
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

  if (!product) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <section id="PRODUCT_PAGE" className="mt-10">
      <div className="container mx-auto px-4">
        {/* main layout */}
        <div className="flex flex-col lg:flex-row lg:gap-20 gap-10">
          {/* Image Section */}
          <div className="flex flex-col sm:flex-row lg:flex-row w-full lg:w-1/2 items-center">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 sm:w-2/12 w-full sm:mb-0 mb-4 justify-center">
              {product.images?.map((imgSrc, i) => (
                <img
                  key={i}
                  src={imgSrc}
                  alt={`Thumbnail ${i}`}
                  className={`object-contain w-[60px] h-[60px] sm:w-full sm:h-auto border rounded-lg cursor-pointer ${
                    currentImage === imgSrc ? 'border-2 border-blue-500' : 'border-gray-200'
                  }`}
                  onClick={() => setCurrentImage(imgSrc)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 w-full sm:w-[400px] lg:w-[500px] sm:ml-4">
              <img
                src={currentImage}
                alt="Product Preview"
                className="w-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[460px]">
            <div className="InfoBorder border border-[#E5E7EB] p-6 rounded-2xl shadow-sm">
              {/* Rating + Price */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1 items-center">
                  <HiMiniStar className="text-[#FBBF24] text-xl" />
                  <p className="text-base text-gray-800 font-semibold">4.9 · </p>
                  <p className="underline text-base text-gray-600 font-medium">142 reviews</p>
                </div>
                <h2 className="text-[22px] font-semibold text-gray-800">${product.price}</h2>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h2 className="text-base text-gray-800 font-semibold">
                  Size: <span className="text-base font-medium">S</span>
                </h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                    <div
                      key={size}
                      className="border border-gray-200 py-2 px-5 rounded-xl cursor-pointer hover:bg-blue-500 hover:text-white text-gray-700 font-medium transition"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-[120px] bg-[#F8F8F8] rounded-full py-2 px-3 flex justify-between items-center">
                  <span className="bg-white w-[24px] h-[24px] rounded-full border text-lg flex justify-center items-center cursor-pointer">
                    -
                  </span>
                  <h2 className="text-base text-gray-700 font-medium">1</h2>
                  <span className="bg-white w-[24px] h-[24px] rounded-full border text-lg flex justify-center items-center cursor-pointer">
                    +
                  </span>
                </div>

                <Link className="bg-blue-600 text-white rounded-full py-3 px-8 flex items-center gap-2 shadow hover:scale-[1.05] transition">
                  <HiOutlineShoppingBag className="text-white text-xl" />
                  <span className="text-sm font-medium">Add to cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-10 text-center lg:text-left">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-praymary font-semibold text-gray-800 mb-2">
            {product.title}
          </h2>
          <p className="max-w-[735px] font-praymary mx-auto lg:mx-0 text-base text-gray-600">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductImageSlider;
