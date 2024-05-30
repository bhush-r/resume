// src/components/home/Home.jsx
import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import ParticlesComponent from "./ParticlesComponent"; // Correct import path

const Home = () => {
  return (
    <section className="home container" id="home">
      <ParticlesComponent id="tsparticles" /> {/* Place ParticlesComponent outside the intro div */}
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Bhushan Lilhare</h1>
        <span className="home__education">I'm a Java developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
