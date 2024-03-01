import { useState ,useEffect} from "react"

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';




export const NavBar=() =>{

const{activeLink,setActiveLink} =useState('home');
// const{scrolled,setScrolled}=useState(false);

// useEffect(()=>{
//   const onScroll= ()=>{
//       if (window.scrollY >50){
//           setScrolled(true);
  
//       }else{
//           setScrolled(false);
//       }
//   }
//   window.addEventListener("scroll",onScroll);
//   return () => window.removeEventListener("scroll", onScroll);
//   },[])
  
  const onUpdateActiveLink = (value) => {
    console.log(value)
    // setActiveLink(value);
    }




    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#home"><img src={logo} alt="Logo" /></a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</a>
                <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>

                

              </li>
              </ul>
              <span className="navbar-text">
                        <div className="social-icon">
                            <a href="www.facbook.com"> <img src={navIcon1} alt=""/> </a>
                            <a href="#"> <img src={navIcon2} alt=""/> </a>
                            <a href="#"> <img src={navIcon3} alt=""/> </a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
              
              
            
           
          </div>
        </div>
      </nav>



</>
    )
}

