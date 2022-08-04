import React from "react";
import foto from "./img/me.jpeg";
function About() {
  return (
    <div id="about">
      <h2>
        <span className="font-primary">A</span>bout
      </h2>
      <div className="fotoback">
        <img src={foto} alt="None" />
      </div>
      <div className="name">Oscar Daniel</div>
      <div className="vocation">Full Stack Web Developer</div>
      <div className="skills">
        Html / CSS / JavaScript / Redux / Python / Express.Js / AWS(Basic)
      </div>
      <p>Looking job for front-end developer</p>
      <div className="email"> Email : dan.ny.98.od@gmail.com</div>
      <div className="icons">
        <a href="https://github.com/Danielt3000">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/oscar-g-daniel-366218133/">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
