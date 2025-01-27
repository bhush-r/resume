import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Topbar from './components/topbar/Topbar';
import Topbar from './components/topbar/Topbar';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Pricing from './components/pricing/Pricing';
// import ParticlesComponent from './components/home/ParticlesComponent'; // Import ParticlesComponent

const App = () => {
  return (
    <>
      <Topbar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default App;
