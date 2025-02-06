import React from 'react'
import Navbar from './pages/Navbar'
import MainSection from './pages/MainSection'
import Benefits from './pages/Benefits'
import TestimonialSlider from './pages/Testimonials'
import SubscriptionPlans from './pages/SubscriptionPlans'
import AboutUs from './pages/AboutUs'
import Footer from './pages/Footer'


const App = () => {
  return (
    <>
      <div >
        <Navbar />
        <MainSection />
        <Benefits />
        <TestimonialSlider />
        <SubscriptionPlans />
        <AboutUs />
        <Footer />
      </div>
    </>
  )
}

export default App
