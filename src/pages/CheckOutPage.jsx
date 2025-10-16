import React, { useEffect, useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCard2 } from "react-icons/ci";
import { GrFormSubtract } from 'react-icons/gr';
import { MdAdd } from 'react-icons/md';
import axios from 'axios';

const CheckOutPage = () => {

  const localCart = JSON.parse(localStorage.getItem('ProductKey'))

  const [product, setprodect] = useState([])

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        let filterproduct = res.data.filter((item) => {
          return localCart?.includes(item.id)
        })
        const AddQuantity = filterproduct.map((item) => {
          return { ...item, Qty: 1, UnitePrice: item.price }
        })
        setprodect(AddQuantity)
      })
      .catch((error) => { })
  }, [])

  const handleAddqty = (id) => {
    setprodect((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item
        const updateQty = item.Qty + 1;
        const updatePriceee = item.UnitePrice * updateQty
        return { ...item, Qty: updateQty, price: updatePriceee }
      })
    )
  }

  const total = product.reduce((sem, product) => {
    return sem + product.price
  }, 0)

  return (
    <>
      <section id='checkOut' className='pt-[40px] pb-[72px]'>
        <div className="container mx-auto px-4">
          <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-semibold font-praymary text-second mb-[12px] text-center md:text-left'>
            Checkout
          </h2>

          <div id='all sides ' className='flex flex-col lg:flex-row justify-between gap-10'>
            {/* -----cheack out part-------- */}
            <div className='w-full lg:w-[60%]'>
              <div className="checkRow mt-[52px] flex flex-col">
                <div className="INFO w-full">
                  {/* ----------contact info----------- */}
                  <div className="CONTACT border border-[#E5E7EB] rounded-[16px]">
                    <div className='flex gap-[12px] items-center border-b border-[#E5E7EB] p-[16px] sm:p-[24px]'>
                      <FaRegCircleUser className='text-[24px] text-[#334155]' />
                      <p className='text-[16px] text-[#4B5563] font-medium font-praymary'>CONTACT INFO</p>
                    </div>

                    <div className="phnEmail flex flex-col sm:flex-row gap-[24px] items-center">
                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-second font-medium font-praymary'>Your phone number</p>
                        <input type='number'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>

                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-second font-medium font-poppins'>Email address</p>
                        <input type='email'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                    </div>
                  </div>

                  {/* -----------shipping address----------- */}
                  <div className="SHIPPING border border-[#E5E7EB] rounded-[16px] mt-[40px]">
                    <div className='flex gap-[12px] items-center border-b border-[#E5E7EB] p-[16px] sm:p-[24px]'>
                      <LiaShippingFastSolid className='text-[24px] text-[#334155]' />
                      <p className='text-[16px] text-[#4B5563] font-medium font-praymary'>SHIPPING ADDRESS</p>
                    </div>

                    <div className="ADDRESS flex flex-col sm:flex-row justify-between">
                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Frist Name</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>

                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Last Name</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-[24px] p-[16px] sm:p-[24px]'>
                      <div className='w-full sm:w-[384px]'>
                        <p className='text-[16px] text-second font-medium font-praymary'>Address line 1</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                      <div className='w-full sm:w-[180px]'>
                        <p className='text-[16px] text-second font-medium font-praymary'>Apt, Suite</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                    </div>

                    <div className="LINE2 p-[16px] sm:p-[24px]">
                      <p className='text-[16px] text-second font-medium font-praymary'>Address line 2</p>
                      <input type='text'
                        className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                    </div>

                    <div className="CITY flex flex-col sm:flex-row justify-between">
                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>City</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>

                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Country</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                    </div>

                    <div className="ADDRESS flex flex-col sm:flex-row justify-between">
                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>State/Province</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>

                      <div className='w-full sm:w-[283px] p-[16px] sm:p-[24px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Postal code</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                    </div>
                  </div>

                  {/* ------------payment------------ */}
                  <div className="PAYMENT mt-[41px] border border-[#E5E7EB] rounded-[16px]">
                    <div className="head flex gap-[12px] items-center p-[16px] sm:p-[24px] border-b border-[#E5E7EB]">
                      <CiCreditCard2 className='text-[24px] text-[#334155]' />
                      <p className='text-[16px] text-[#4B5563] font-medium font-praymary'>PAYMENT</p>
                    </div>

                    <div className='p-[16px] sm:p-[24px]'>
                      <p className='text-[16px] text-[#111827] font-medium font-praymary'>Card number</p>
                      <input type='number'
                        className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                    </div>

                    <div className='p-[16px] sm:p-[24px]'>
                      <p className='text-[16px] text-[#111827] font-medium font-praymary'>Name on the card</p>
                      <input type='text'
                        className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                    </div>

                    <div className='flex flex-col sm:flex-row gap-[24px] p-[16px] sm:p-[24px]'>
                      <div className='w-full sm:w-[386px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>Expiration date (MM/YY)</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>

                      <div className='w-full sm:w-[180px]'>
                        <p className='text-[16px] text-[#111827] font-medium font-praymary'>CVC</p>
                        <input type='text'
                          className='outline-0 text-[18px] font-praymary text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*------------- Order summary part---------- */}
            <div className='ORDER-SUMMARY w-full lg:w-[40%]'>
              <div id='SUMMARY'>
                <h2 className='text-[24px] font-semibold font-praymary text-second mb-[20px] text-center lg:text-left'>Order summary</h2>
                <span className='w-full bg-[#E5E7EB] h-[1px] inline-block'></span>
              </div>

              {product.map((item) => (
                <div key={item.id} className='ITEM flex flex-col sm:flex-row justify-between mt-[24px] gap-4'>
                  <div className='flex gap-[16px] sm:gap-[24px]'>
                    <div className="Img w-[90px] h-[90px] sm:w-[106px] sm:h-[105px]">
                      <img src={item.images[0]} alt="product image" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div>
                      <h2 className='text-[16px] font-semibold font-praymary text-second break-words'>
                        {item.title}
                      </h2>
                      <p className='text-[14px] font-normal font-praymary text-[#4B5563] mt-[4px]'>{item.category.slug}</p>

                      <div className="BTN w-[110px] bg-[#E5E7EB] px-[12px] py-[8px] rounded-[20px] flex justify-between mt-[20px]">
                        <button className='w-[24px] h-[24px] bg-white cursor-pointer rounded-full flex justify-center items-center'>
                          <GrFormSubtract />
                        </button>
                        <p>{item.Qty}</p>
                        <button onClick={() => handleAddqty(item.id)} className='w-[24px] h-[24px] bg-white rounded-full cursor-pointer flex justify-center items-center'>
                          <MdAdd />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='PRICE text-left sm:text-center'>
                    <p className='text-[16px] font-semibold font-praymary text-second mt-[10px] sm:mt-[31px]'>{item.price}$</p>
                  </div>
                </div>
              ))}

              <span className='w-full bg-[#E5E7EB] h-[1px] inline-block mt-[24px]'></span>

              <div className='flex justify-between items-center mt-[24px]'>
                <p className='text-[16px] font-normal font-praymary text-second '>Subtotal</p>
                <p className='text-[16px] font-normal font-praymary text-second '>{total} $</p>
              </div>

              <div className='flex justify-between items-center mt-[8px]'>
                <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>Shipping estimate</p>
                <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>5.00$</p>
              </div>

              <div className='flex justify-between items-center mt-[8px]'>
                <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>Tax estimate</p>
                <p className='text-[16px] font-normal font-praymary text-[#4B5563] '>24.90$</p>
              </div>

              <div className='flex justify-between items-center mt-[24px]'>
                <p className='text-[16px] font-semibold font-praymary text-second '>Order total</p>
                <p className='text-[16px] font-semibold font-praymary text-second '>{5 + 24.90 + total}$</p>
              </div>

              <div className='mt-[24px]'>
                <button className='w-full h-[52px] cursor-pointer bg-second rounded-full text-[16px] hover:bg-amber-300 hover:scale-110 hover:text-black duration-300 text-white font-medium font-praymary'>
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CheckOutPage
