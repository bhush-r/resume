import React from 'react';
import "./about.css";
import Image from "../../assets/photo_imresizer.jpg";
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <section className="about container section" id="about">
           <Fade direction="up" cascade damping={0.1} triggerOnce>
      
      {/* Updated H2 Tag */}
      <h2 
        className="section__title wow fadeInUp" 
        style={{ visibility: 'visible', animationName: 'fadeInUp' }}
      >
        About Me
      </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            I am a student currently pursuing Bachelor of Technology in Computer Science Engineering 
            from G.H Raisoni College of Engineering, Nagpur (Affilated to RTMNU). I'm a Tech enthusiast 
            with an aspiration to build things. I currently work with native Android App Development with 
            Java and Kotlin. I also have some experience with C++, HTML/CSS and Python. I love developing 
            products and research UX Development. Apart from programing I have good experience in working 
            with Arduino and other IoT devices.
            </p>
            <a href="#contact" className="btn">
              Download Resume
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Android Development</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage android_development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage java"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Kotlin</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage kotlin"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">C++</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage oops"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </section>
    )
}

export default About;