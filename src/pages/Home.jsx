
import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/Service'
import Expolre from '../components/Expolre'
import ResExpolre from '../components/ResExpolre'
import Recomandation from '../components/Recomandation'
import BestSeller from '../components/BestSeller'
import AddToCart from '../components/AddToCart'
import BottomBanner from '../components/BottomBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
  
    <Banner />
    <Service/>
    <Expolre/>
    <Recomandation/>
    {/* <BestSeller/> */}
  <BottomBanner/>

    </>
  )
}

export default Home