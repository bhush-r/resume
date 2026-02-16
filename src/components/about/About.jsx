import React, { useRef } from "react";
import "./about.css";
import Image from "../../assets/photo_imresizer.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Android Development", value: 85, class: "android" },
  { name: "Java", value: 80, class: "java" },
  { name: "Kotlin", value: 85, class: "kotlin" },
  { name: "C++", value: 85, class: "cpp" },
  { name: "Python", value: 75, class: "python" },
];

const About = () => {
  const container = useRef();

  useGSAP(() => {

    /* ===== Skill Bar Animation ===== */
    gsap.utils.toArray(".skills__percentage").forEach((bar) => {
      const width = bar.getAttribute("data-skill");

      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: width,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
          },
        }
      );
    });

    /* ===== Percentage Counter ===== */
    gsap.utils.toArray(".skills__number").forEach((num) => {
      const finalVal = parseInt(num.innerText);

      gsap.fromTo(
        num,
        { innerText: 0 },
        {
          innerText: finalVal,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
          scrollTrigger: {
            trigger: num,
            start: "top 90%",
          },
        }
      );
    });

    /* ===== Floating Image ===== */
    gsap.to(".about__img", {
      y: 12,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });

  }, { scope: container });

  return (
    <section className="about container section" id="about" ref={container}>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="profile" className="about__img" />

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
            {skills.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>

                  <span className="skills__percent">
                    <span className="skills__number">{skill.value}</span>%
                  </span>
                </div>

                <div className="skills__bar">
                  <span
                    className={`skills__percentage ${skill.class}`}
                    data-skill={`${skill.value}%`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
