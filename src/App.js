import React, { useEffect } from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
// Removed imports for empty/commented out components: Testimonials, Pricing, CustomCursor

const App = () => {
  // ✨ UPDATED PRELOADER LOGIC ✨
  useEffect(() => {
    const preloader = document.getElementById('preloader');

    if (preloader) {
      // Hide the preloader as soon as the main App component has mounted.
      // This is generally a good time, as the initial render is complete.
      preloader.classList.add('loaded');
      
      // Remove the preloader from the DOM after the fade-out animation
      setTimeout(() => {
        if (preloader.parentNode) {
          preloader.parentNode.removeChild(preloader);
        }
      }, 1000); // Match this to your CSS transition duration in public/index.html
    }
  }, []); // The empty array ensures this runs only once after mount

  return (
    <>
      <Topbar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        {/* Pricing and Testimonials components removed for a cleaner focus */}
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default App;
