import React, { useState } from 'react'
import { Form, Link } from 'react-router'

const LoginPage = () => {
     const [emailError,setEmailError] = useState('')
        const[email,setEmail] = useState('')
    
        const [pass,setPass] =useState ('')
        const[passError,setPassError]=useState('')
    
        const [passAgain,setPassAgain]=useState('')
        const [againError,setAgainError] = useState('')
    
        const handleSubmit = (behave)=>{
            
            }
  return (
    <>
    
    
    
    
       <div className='       border-[#E5E7EB]      mb-[40px]  border-t-1'></div>
       
    <section id='registationPage' >
        <div className="container ">
            <div className='flex justify-center items-center'>
               <Form onSubmit={handleSubmit} className='w-[440px] text-center'>
                {/* -------Header-------- */}
                <div><h2 className='text-[36px] font-semibold text-second font-praymary mb-[60px]'>Login</h2></div>

                {/* -------Input Box-------- */}
                <div className='flex flex-col gap-[24px]'>
                    {/* -----Email  */}
                    <div>
                        <p className='text-base font-semibold text-left font-praymary text-second'>Email</p>
                        <p className='text-red-600 font-poppins'>{emailError}</p>
                        <input  className='w-full border border-[#E5E7EB] font-praymary text-[14px] rounded-[12px] h-[43px] px-5 outline-none mt-2' placeholder='example@example.com' type="email" />
                    </div>
                    {/* -----Password  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Password</p>
                        <p className='text-red-600 font-poppins'>{passError}</p>
                        <input className='w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2' type="password" />
                    </div>
                 
                </div>

                {/* ------Submit Button------ */}
                <div className='mt-[24px] flex flex-col gap-[24px]'>
                    <button className='w-full bg-second rounded-full text-white py-[14px] cursor-pointer'>Continue</button>
                    <p className='text-Primary font-medium text-[14px] text-center'>OR</p>
                    <div>
                        <p className='text-Primary text-base font-normal text-center'>New user? <Link className='text-[#0EA5E9]' to={'/RegisterPage'}>Create an account </Link></p>
                    </div>
                </div>
            </Form>
             </div>
             <Link></Link>


        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default LoginPage