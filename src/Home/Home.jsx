import React from 'react'
import Navbars from '../components/navbar'
import HeroSection from '../components/Herosection'
import Body from '../components/Body'
import Youtube from '../components/Youtube'
import Howitworks from '../components/Howitworks'
import Footer from '../components/Footer'
import "../App.css";

const Home = () => {
  return (
    <div>
        <div className="Navbar">
        <Navbars></Navbars>
        
      </div>
      <div className="Herosection">
        <HeroSection></HeroSection>
      </div>
      <div> 
        <Body></Body>
      </div>
      <div>
        <Youtube></Youtube>
      </div>
      <div>
        <Howitworks></Howitworks>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home