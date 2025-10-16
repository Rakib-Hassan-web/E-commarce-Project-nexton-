import axios from 'axios'
import React, { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { Form, Link } from 'react-router'
import { Bounce, toast } from 'react-toastify'

const RegisterPage = () => {
  // ----------------email state---------------
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  // ------------password state---------------
  const [pass, setPass] = useState('')
  const [passError, setPassError] = useState('')

  // ------------------user name state---------------
  const [username, setusername] = useState('')
  const [usernameError, setusernameError] = useState('')

  // -------again pass---------------------------------
  const [passAgain, setPassAgain] = useState('')
  const [againError, setAgainError] = useState('')

  // -----------show pass --------------
  const [showpass, setshowpass] = useState(false)

  // --------loading---------
  const [loading, setloading] = useState(false)

  // ----------------handle button--------------------------
  const handleSubmit = (mail) => {
    if (!email) {
      setEmailError('Enter Your Email')
    }
    if (!username) {
      setusernameError('Enter Your full Name')
    } else if (!pass) {
      setPassError('Please enter your password')
    }

    if (!passAgain) {
      setAgainError('Password does not be Empty')
    } else if (passAgain != pass) {
      setAgainError('Password does not match')
    } else {
      setloading(true)
      axios
        .post('https://api.escuelajs.co/api/v1/users/', {
          name: username,
          email,
          password: pass,
          avatar: 'https://picsum.photos/800',
        })
        .then((res) => {
          console.log(res)
          toast.success('Register Success', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
            transition: Bounce,
          })
          setloading(false)
        })
        .catch((err) => {
          console.log(err)
          setloading(false)
        })
    }
  }

  return (
    <>
      <div className='border-[#E5E7EB] mb-[40px] border-t-1'></div>

      <section id='registationPage' className='py-[40px]'>
        <div className='container px-4 sm:px-6 md:px-0'>
          <div className='flex justify-center items-center min-h-[80vh]'>
            <Form
              onSubmit={handleSubmit}
              className='w-full max-w-[440px] text-center bg-white p-6 sm:p-8 rounded-[16px] shadow-md'
            >
              {/* -------Header-------- */}
              <div>
                <h2 className='text-[28px] sm:text-[36px] font-semibold text-second font-praymary text-center mb-[40px] sm:mb-[60px]'>
                  Register
                </h2>
              </div>

              {/* -------Input Box-------- */}
              <div className='flex flex-col gap-[20px] sm:gap-[24px]'>
                {/* -----------username------------ */}
                <div>
                  <p className='text-sm sm:text-base font-semibold text-second font-praymary text-left'>
                    User Name
                  </p>
                  <p className='text-red-600 font-praymary text-sm'>{usernameError}</p>
                  <input
                    onChange={(e) => {
                      setusername(e.target.value), setusernameError('')
                    }}
                    className='w-full border border-[#E5E7EB] rounded-[12px] h-[43px] px-4 outline-none mt-2'
                    placeholder='Enter Your Full Name'
                    type='text'
                  />
                </div>

                {/* -----Email  */}
                <div>
                  <p className='text-sm sm:text-base font-semibold text-second font-praymary text-left'>
                    Email
                  </p>
                  <p className='text-red-600 font-praymary text-sm'>{emailError}</p>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value), setEmailError('')
                    }}
                    className='w-full border border-[#E5E7EB] outline-none rounded-[12px] h-[43px] px-4 mt-2'
                    placeholder='example@example.com'
                    type='email'
                  />
                </div>

                {/* -----Password  */}
                <div className='relative'>
                  <p className='text-sm sm:text-base font-semibold font-praymary text-second text-left'>
                    Password
                  </p>
                  <p className='text-red-600 font-praymary text-sm'>{passError}</p>
                  <input
                    onChange={(e) => {
                      setPass(e.target.value), setPassError('')
                    }}
                    className='w-full border border-[#E5E7EB] rounded-[12px] h-[43px] px-4 outline-none mt-2'
                    type={showpass ? 'text' : 'password'}
                  />

                  {showpass ? (
                    <LuEyeOff
                      className='text-2xl cursor-pointer absolute top-10 right-5 sm:top-11'
                      onClick={() => setshowpass(!showpass)}
                    />
                  ) : (
                    <LuEye
                      className='text-2xl cursor-pointer absolute top-10 right-5 sm:top-11'
                      onClick={() => setshowpass(!showpass)}
                    />
                  )}
                </div>

                {/* -----Password again */}
                <div>
                  <p className='text-sm sm:text-base font-semibold font-praymary text-second text-left'>
                    Password (Again)
                  </p>
                  <p className='text-red-600 font-praymary text-sm'>{againError}</p>
                  <input
                    onChange={(e) => {
                      setPassAgain(e.target.value), setAgainError('')
                    }}
                    className='w-full border border-[#E5E7EB] rounded-[12px] h-[43px] px-4 outline-none mt-2'
                    type='password'
                  />
                </div>
              </div>

              {/* ------Submit Button------ */}
          font-medium text-[14px] text-center'>OR</p>
                <div>
                  <p className='text-Primary text-[14px] sm:text-base font-normal text-center'>
                    Already a member?{' '}
                    <Link
                      className='text-[#0EA5E9] hover:underline'
                      to={'/LoginPage'}
                    >
                      Login
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

export default RegisterPage
