import React, { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { Form, Link } from 'react-router'


const RegisterPage = () => {
    // ----------------email state---------------
    const[email,setEmail] = useState('')
   const [emailError,setEmailError] = useState('')


//    ------------password state-=-----------------

    const [pass,setPass] =useState ('')
    const[passError,setPassError]=useState('')

    // ------------------user name state---------------
        const [username,setusername] =useState ('')
    const[usernameError,setusernameError]=useState('')

// -------again pass---------------------------------
    const [passAgain,setPassAgain]=useState('')
    const [againError,setAgainError] = useState('')

    // -----------show pass --------------

    const [showpass ,setshowpass] =useState(false)


// ----------------handle button--------------------------
    const handleSubmit = (mail)=>{
        
          if(!email){
            setEmailError('Enter Your Email')
        }
          if(!username){
            setusernameError('Enter Your full Name')
        }
        else if(!pass){
            setPassError('Please enter your password')
        }
    
        if(!passAgain ){
            setAgainError('Password does not be Empty')
        }
        else if(passAgain != pass){
            setAgainError('Password does not match')

        }
        else{


            
        }
        }
     
       
  return (
    <>
    
        <div className='       border-[#E5E7EB]      mb-[40px]  border-t-1'></div>
       
    <section id='registationPage' >
        <div className="container ">
            <div className='flex justify-center items-center'>
               <Form onSubmit={handleSubmit} className='w-[440px] text-center'>
                {/* -------Header-------- */}
                <div><h2 className='text-[36px] font-semibold text-second text-center mb-[60px]'>Register</h2></div>

                {/* -------Input Box-------- */}
                <div className='flex flex-col gap-[24px]'>


{/* -----------username------------ */}
 <div>
                        <p className='text-base font-semibold text-second text-left'>User Name</p>
                        <p className='text-red-600 font-poppins'>{usernameError}</p>
                        <input onChange={(e)=>{setusername(e.target.value),setusernameError('')}} className='w-full border border-[#E5E7EB] rounded-[12px] h-[43px] px-5 outline-none mt-2' placeholder='Enter Your Full Name' type="email" />
                    </div>


                    {/* -----Email  */}
                    <div>
                        <p className='text-base font-semibold text-second text-left'>Email</p>
                        <p className='text-red-600 font-poppins'>{emailError}</p>
                        <input onChange={(e)=>{setEmail(e.target.value),setEmailError('')}} className='w-full border border-[#E5E7EB] outline-none  rounded-[12px] h-[43px] px-5  mt-2' placeholder='example@example.com' type="email" />
                    </div>
                    {/* -----Password  */}
                    <div className=' relative'>
                        <p className='text-base font-semibold text-second text-left'>Password</p>
                        <p className='text-red-600 font-poppins'>{passError}</p>
                        <input onChange={(e)=>{setPass(e.target.value),setPassError('')}}  className='w-full border border-[#E5E7EB] rounded-[12px] h-[43px] px-5 outline-none mt-2' type={showpass? 'text' : 'password'} />


                        {
                            showpass?

                            <LuEyeOff  className='text-2xl cursor-pointer absolute top-11 right-5' onClick={()=>setshowpass(!showpass)}  />
                            :
                            <LuEye className='text-2xl cursor-pointer absolute top-11 right-5' onClick={()=>setshowpass(!showpass)}  />
                        }

                    </div>
                    {/* -----Password again */}
                    <div>
                        <p className='text-base font-semibold text-second text-left'>Password (Again)</p>
                        <p className='text-red-600 font-poppins'>{againError}</p>
                        <input  onChange={(e)=>{setPassAgain(e.target.value),setAgainError('')}}  className='w-full border border-[#E5E7EB] rounded-[12px] h-[43px] px-5 outline-none mt-2'type="password" />
                    </div>
                </div>

                {/* ------Submit Button------ */}
                <div className='mt-[24px] flex flex-col gap-[24px]'>
                    <button className='w-full bg-second rounded-full text-white py-[14px] cursor-pointer'>Continue</button>
                    <p className='text-Primary font-medium text-[14px] text-center'>OR</p>
                    <div>
                        <p className='text-Primary text-base font-normal text-center'>Already a member? <Link className='text-[#0EA5E9]' to={'/LoginPage'}>Login</Link></p>
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