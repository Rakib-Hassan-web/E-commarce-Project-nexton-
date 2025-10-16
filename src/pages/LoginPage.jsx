import React, { useState } from 'react'
import { Form, Link } from 'react-router'

const LoginPage = () => {
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState('')

  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState('')

  const [passAgain, setPassAgain] = useState('')
  const [againError, setAgainError] = useState('')

  const handleSubmit = (behave) => {}

  return (
    <>
      <div className='border-[#E5E7EB] mb-[40px] border-t-1'></div>

      <section id='registationPage' className='py-[40px]'>
        <div className='container px-4 sm:px-6 md:px-0'>
          <div className='flex justify-center items-center min-h-[70vh]'>
            <Form
              onSubmit={handleSubmit}
              className='w-full max-w-[440px] text-center bg-white p-6 sm:p-8 rounded-[16px] shadow-md'
            >
              {/* -------Header-------- */}
              <div>
                <h2 className='text-[28px] sm:text-[36px] font-semibold text-second font-praymary mb-[40px] sm:mb-[60px]'>
                  Login
                </h2>
              </div>

              {/* -------Input Box-------- */}
              <div className='flex flex-col gap-[20px] sm:gap-[24px]'>
                {/* -----Email  */}
                <div>
                  <p className='text-sm sm:text-base font-semibold text-left font-praymary text-second'>
                    Email
                  </p>
                  <p className='text-red-600 font-poppins text-sm'>{emailError}</p>
                  <input
                    className='w-full border border-[#E5E7EB] font-praymary text-[14px] rounded-[12px] h-[43px] px-4 outline-none mt-2'
                    placeholder='example@example.com'
                    type='email'
                  />
                </div>

                {/* -----Password  */}
                <div>
                  <p className='text-sm sm:text-base font-semibold text-left font-praymary text-second'>
                    Password
                  </p>
                  <p className='text-red-600 font-poppins text-sm'>{passError}</p>
                  <input
                    className='w-full border border-[#E5E7EB] font-praymary text-[14px] rounded-[12px] h-[43px] px-4 outline-none mt-2'
                    type='password'
                  />
                </div>
              </div>

              {/* ------Submit Button------ */}
            count
                    </Link>
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage
