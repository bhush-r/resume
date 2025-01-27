import React, { useEffect } from "react";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import ParticlesComponent from "./ParticlesComponent";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".txt-rotate");
    elements.forEach((el) => {
      const toRotate = JSON.parse(el.getAttribute("data-rotate"));
      const period = parseInt(el.getAttribute("data-period"), 10) || 2000;
      let loopNum = 0;
      let isDeleting = false;
      let txt = "";

      const tick = () => {
        const i = loopNum % toRotate.length;
        const fullTxt = toRotate[i];

        txt = isDeleting
          ? fullTxt.substring(0, txt.length - 1)
          : fullTxt.substring(0, txt.length + 1);

        el.innerHTML = `<span class="wrap">${txt}</span>`;

        let delta = isDeleting ? 100 : 200;

        if (!isDeleting && txt === fullTxt) {
          delta = period;
          isDeleting = true;
        } else if (isDeleting && txt === "") {
          isDeleting = false;
          loopNum++;
          delta = 500;
        }

        setTimeout(tick, delta);
      };

      tick();
    });
  }, []);

  return (
    <section className="home container" id="home">
      <ParticlesComponent id="tsparticles" />
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Bhushan Lilhare</h1>
        <span
          className="txt-rotate"
          data-period="1000"
          data-rotate='[ "Product", "Android Developer", "iOS Developer", "A Tech Enthusiast" ]'
        ></span>
        <HeaderSocials />
        {/* <a href="#contact" className="btn">
          Hire Me
        </a> */}
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;


// import React from "react";
// import "./home.css";
// import Me from "../../assets/avatar-1.svg";
// import HeaderSocials from "./HeaderSocials";
// import ScrollDown from "./ScrollDown";
// import ParticlesComponent from "./ParticlesComponent";

// const Home = () => {
//   return (
//     <section className="home container" id="home">
//       <ParticlesComponent id="tsparticles" />
//       <div className="intro">
//         <img src={Me} alt="" className="home__img" />
//         <h1 className="home__name">Bhushan Lilhare</h1>
//         <span className="home__education">I'm a Java developer</span>

//         <HeaderSocials />
//         <a href="#contact" className="btn">
//           Hire Me
//         </a>
//         <ScrollDown />
//       </div>
//     </section>
//   );
// };

// export default Home;
