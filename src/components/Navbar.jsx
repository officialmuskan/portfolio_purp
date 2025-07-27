import "./nav.css";
import pic from "../assets/profile-pic (3).png"
import React, { useState } from "react";
import { IoMdSunny, IoMdMoon, IoMdMenu } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
// import "./NavbarMobile.css";
// import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink,useLocation } from "react-router-dom";
export default function Navbar(props) {
  let location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "850px" });
  const toggleMenu = () => {
    console.log(isMenuOpen)
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen)
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const icon = ()=>{
    if (props.mode === 'dark') {
        return <IoMdSunny/>
    }
    else{
        return <IoMdMoon />
    }
    
  }

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = `nav__link ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`;
    return (
      <ul className={listClassName}>
        <li className="nav__item">
          <NavLink to="/#skill" className={linkClassName} onClick={closeMobileMenu}>
            Skills
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/#projects" className={linkClassName} onClick={closeMobileMenu}>
            Project
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/#about" className={linkClassName} onClick={closeMobileMenu}>
            About Me
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/#contact" className={linkClassName} onClick={closeMobileMenu}>
            Contact Me
          </NavLink>
        </li>
        <li className="nav__item">
          <a className={` ${props.mode === 'dark' ?'nav__sun' : 'nav__moon'}`} onClick={props.toggleStyle}>
            
            {icon()}
          </a>
        </li>
        
      </ul>
    );
  };

  return (
    <>
      <header className="header">
        <nav className="nav container " style={{backgroundColor: props.mode === 'dark'? '#252746' : '#E0E0E1', color: props.mode === 'dark'? '#E0E0E1' : '252746'}}>
          <NavLink to="/" className={"nav__logo"}>
            <div className="box">
              <div className="circle"><img className="circle" src={pic} alt="" /></div>
              
              Muskan
            </div>
          </NavLink>
          {isMobile && (
          <div className={`nav__toggle ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`} id="nav-toggle" onClick={toggleMenu}>
            <IoMdMenu />
          </div>
        )}
        {isMobile ? (
          <div
            className={`nav__menu ${isMenuOpen ? "show-menu" : ""} ${props.mode === 'dark' ? '' : 'light-mode'}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div className={`nav__close ${props.mode === 'dark' ? 'dark-mode' : 'light-mode'}`} id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
    </>
  )
}
  
