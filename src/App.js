import React from 'react'
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Pricing from './components/pricing/Pricing'
// import ParticlesComponent from './components/home/praticles';

const App= () => {
  return (
    <>
        <Sidebar />
        <main className='main'>
          {/* <ParticlesComponent id="particles"/> */}
          <Home/>
          <About />
          <Services/>
          <Resume />
          <Portfolio />
          <Pricing />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
    </>
  )
}

export default App
