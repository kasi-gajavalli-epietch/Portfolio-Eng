import React from 'react';
import './portfolio.css';
import Menu from './Menu'; 
import { useState } from 'react';

const Portfolio = () => {
  const [items,setItems]=useState(Menu);
  const filterItem=(categoryItem)=>{
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }
  return (
    <section className="work container section" id="projects">
      <h2 className="section__title">Recent  works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem("Application")}>Application</span>
        <span className="work__item" onClick={() => filterItem("Frontend")}>Frontend</span>
        <span className="work__item" onClick={() => filterItem("Marketing")}>Marketing</span>
        <span className="work__item" onClick={() => filterItem("Python/AI/Data")}>Python/AI/Data</span>
        <span className="work__item" onClick={() => filterItem("Research/Modeling")}>Research/Modeling</span>
      </div>

      <div className="work__container  grid">
        {/* eslint-disable-next-line*/}
        {items.map((elem)=> {
          const{id, image, title, category,github,demo,Techno,desc}=elem;
          return(
            <div className="test">
            <div className="work__card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="work_image" className="work__img" />
                <div className="project-content">
                  <div className="project-links">
                    <a href={github} className="github-links">Github</a>
                    <a href={demo} className="demo-links">Demo</a>
                  </div>
                  <div className="others">
                    <h4 className="techno">{Techno}</h4>
                    <p className="description_project">{desc}</p>
                  </div>
                </div>
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={demo} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Portfolio