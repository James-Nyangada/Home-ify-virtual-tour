import React from 'react'
import NavBar from './Navbar'
import HeroTwo from './HeroTwo'
import About from './About'
import Features from './Features'
import Story from './Story'
import Contact from './Contact'
import Footer from './Footer'


const AboutPage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-[#dfdff0]">
        <NavBar/>
        <HeroTwo/>
        <About/>
        <Features/>
        <Story/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default AboutPage