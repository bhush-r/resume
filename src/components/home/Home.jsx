import React from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import ParticlesComponent from "./ParticlesComponent";

const Home = () => {
  return (
    <div>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Bhushan Lilhare</h1>
          <span className="home__education">I'm a Java developer</span>

          <HeaderSocials />
          <a href="#contact" className="btn">Hire Me</a>
          <ScrollDown />
        </div>
      </section>
      <div className="particles-wrapper">
          <ParticlesComponent id="tsparticles" />
        </div>
    </div>
  );
};

export default Home;
