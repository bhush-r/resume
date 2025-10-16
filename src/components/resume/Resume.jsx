import React, { useRef, useEffect } from 'react';
import "./resume.css";
import Data from "./Data";
import Card from './Card';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timelines = container.current.querySelectorAll('.timeline');
    
    // Animate each timeline column separately
    timelines.forEach(timeline => {
      // Select all cards within this timeline for the animation
      const cards = timeline.querySelectorAll('.resume__item');
      
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2, // Animate each card 0.2s after the previous one
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timeline, // Start the animation when the timeline is in view
          start: 'top 80%', // Start when the top of the timeline hits 80% of the viewport height
          toggleActions: 'play none none none',
        }
      });
    });

  }, { scope: container, revertOnUpdate: true }); // revertOnUpdate is good practice for hot reloading

  return (
    <section className="resume container section" id="resume" ref={container}>
      <h2 className="section__title">Experience</h2>

      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
            return null;
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  link={val.link}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume;
