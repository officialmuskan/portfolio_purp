import "./skills.css";

import ProgressBar from "@ramonak/react-progress-bar";
import { IoMdDownload, IoMdPhonePortrait } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import React, { useState } from "react";
import { PiFileCpp } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHtml5, } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
// import { faHtml5} from '@fortawesome/free-solid-svg-icons';
import { FaReact } from "react-icons/fa";
// import { faHtml5 } from "react-icons/fa";
export default function Skills(props) {
  return (
    <>
      <div id="skill" className="tools">
        <div className="one">
          <h2 className={` ${props.mode === 'dark' ? '' : 'light-mode'}`} >Skills and Proficiency </h2>

          <div className={`skills ${props.mode === 'dark' ? '' : 'light-mode'}`}>
          <div className="skill">
            <div className="skill-title">
              <h3>HTML</h3>
            </div>
              <ProgressBar barContainerClassName="skill-container" completedClassName="progressbar progressbarhtml" completed={95} customLabelClass="label" animateOnRender={true} />
            </div>
            <div className="skill">
              <div className="skill-title">
                <h3>CSS</h3>
            
              </div>
              <ProgressBar barContainerClassName="skill-container" completedClassName="progressbar progressbarcss" completed={80} animateOnRender={true} />
             
            </div>
            <div className="skill">
              <div className="skill-title">
                <h3>JAVASCRIPT</h3>
            
              </div>
              <ProgressBar barContainerClassName="skill-container" completedClassName="progressbar progressbarjs" completed={80} animateOnRender={true} />
             
            </div>
            <div className="skill">
              <div className="skill-title">
                <h3>REACT</h3>
            
              </div>
              <ProgressBar barContainerClassName="skill-container" completedClassName="progressbar progressbarreact" completed={75} animateOnRender={true} />
             
            </div>
            <div className="skill">
              <div className="skill-title">
                <h3>MONGODB</h3>
            
              </div>
              <ProgressBar barContainerClassName="skill-container" completedClassName="progressbar progressbarmongo" completed={65} animateOnRender={true} />
             
            </div>
            <div className="skill">
              <div className="skill-title">
                <h3>C++</h3>
                
              </div>
              <ProgressBar barContainerClassName="skill-container" completedClassName="progressbar progressbarc" completed={90} animateOnRender={true} />
             
            </div>
          </div>
        </div>
        <div className="second">
        
          <div className="icon">
            
            <div className="iconsbs">
              <a className="" style={{ "--i": 1 }}>
                <FaHtml5 />
              </a>
            </div>
            <div className="iconsbs">
              <a className="" style={{ "--i": 2 }}>
                <IoLogoCss3 />
              </a>
            </div>
            <div className="iconsbs">
              <a className="" style={{ "--i": 3 }}>
                <IoLogoJavascript />
              </a>
            </div>
            <div className="iconsbs">
              <a className="" style={{ "--i": 4 }}>
                <PiFileCpp />
              </a>
            </div>
            <div className="iconsbs">
              <a className="" style={{ "--i": 5 }}>
                <FaReact />
              </a>
            </div>
            <div className="iconsbs">
              <a className="" style={{ "--i": 6 }}>
                <SiMongodb />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
