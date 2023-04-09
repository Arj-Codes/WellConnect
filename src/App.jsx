import React, { useEffect } from 'react'
import Web3modal from './Components/Web3modal'
import Signupform from './Components/Signupform'
import Hero from './Components/Hero'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Doctors from './Components/Doctors'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


const App = () => {
    useEffect(() => {
      document.title = "WellConnect- Health above all";
    }, []);
  return (
    <div className="App flex flex-col">
      {/* <Web3modal /> */}
      {/* <Signupform /> */}
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default App
