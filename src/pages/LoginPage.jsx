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
              
             </div>
             <Link></Link>


        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default LoginPage