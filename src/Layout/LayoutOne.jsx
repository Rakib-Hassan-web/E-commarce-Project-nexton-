import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ResNavbar from '../components/ResNavbar'
import Banner from '../components/Banner'
import ResExpolre from '../components/ResExpolre'
import Footer from '../components/Footer'

const LayoutOne = () => {
return (
<>


    <Navbar />


<ResNavbar/>


    <Outlet />
    <ResExpolre/>
    <Footer/>
</>
)
}

export default LayoutOne