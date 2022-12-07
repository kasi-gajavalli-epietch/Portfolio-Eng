import {React,useState} from 'react';
import "./sidebar.css";

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <>
     <nav>
        <div className="navbar-main">
            <a href="#education" onClick={()=> setActiveNav('#education')} className={activeNav === '#education' ? '' : ''}><i className="icon-graduation"></i></a>
            <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? '' : ''}><i className="icon-briefcase"></i></a>
            <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? '' : ''}><i className="fa-solid fa-user-gear"></i></a>
            <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? '' : ''}><i className="icon-layers"></i></a>
            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? '' : ''}><i className="icon-bubble"></i></a>
            
        </div>
        <div className="top">
          <div className="navbar-right">
              <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? '' : ''}><i className="icon-user-following"></i></a>
          </div>
          <div className="navbar-left">
              <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? '' : ''}><i className="icon-home"></i></a>
          </div>
        </div>
      

      
    </nav>
    </>

    
  )
}

export default Sidebar