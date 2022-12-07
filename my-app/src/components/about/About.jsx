import React from 'react';
import './about.css'
import Image from "../../assests/profile-5.jpg";
import AboutBox from './AboutBox';
import CV from "../../assests/Kasi_GAJAVALLI_CV.pdf";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Kasi GAJAVALLI, web developer from Marseille, France. 
            I have a initial experience in web development and also worked as a developer during my work years as a research engineer.
            In the recent past, I also built websites for small enterprises.</p>
            {/*eslint-disable-next-line*/}
            <a href={CV} className="btn">Download CV</a>
          </div>
         {/*<div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titiles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">70%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titiles">
                <h3 className="skills__name">Backend</h3>
                <span className="skills__number">60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage backend"></span>
              </div>
            </div>
         </div>*/}
        </div>
      </div>

      <AboutBox />

    </section>
  )
}

export default About