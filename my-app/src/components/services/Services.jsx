import React from 'react';
import "./services.css";
import Image1 from "../../assests/service-1.svg";
import Image2 from "../../assests/service-2.svg";
import Image3 from "../../assests/service-3.svg";

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Build interactive, animated and userfriendly interfaces for your application and websites",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Market your products and services through web. Can also also the analytics for site, services and products ",
    },
    {
      id: 3,
      image: Image3,
      title: "App Development",
      description:
        "Can build applications based on clients inputs that can manage and handle tasks with ease.",
    },
  ];

  const Services =() => {
    return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

       <div className="services__container grid">
        {data.map(({id,image,title,description})=>{
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
       </div>
    </section>
    );
  };

export default Services