import React from 'react';
import './skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Skills = () => {
  return (

    <section className="skills-container section" id="skills">
      <h2 className="section__title">Skills</h2>
      <div className="container skills__container" id="skills">
        <div className="skills__frontend">
          <h3>Front-end Development</h3>
          <div className="skills__content">
          <article className="skills__details">
          <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Bootstarp</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="experience__details-icon" />              <h4>Bulma</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Vue.js</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React.js</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Angular</h4>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3>Back-end Development</h3>
          <div className="skills__content">
            <article className="skills__details">
            <i className="fa-regular fa-badge-check"></i>
              <h4>Laravel</h4>
            </article>
            <article className="skills__details">
            <i className="fa-regular fa-badge-check"></i>
              <h4>Mysql</h4>
            </article>
            <article className="skills__details">
            <i className="fa-regular fa-badge-check"></i>
              <h4>Mongodb</h4>
            </article>
            <article className="skills__details">
            <i className="fa-regular fa-badge-check"></i>
              <h4>Next.js</h4>
            </article>
            <article className="skills__details">
            <i className="fa-regular fa-badge-check"></i>
              <h4>Nest.js</h4>
            </article>
            <article className="skills__details">
            <i className="fa-regular fa-badge-check"></i>
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;