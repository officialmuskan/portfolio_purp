import './time.css'
import { Chrono } from "react-chrono";
import React, { useState } from "react";
export default function Timeline(props) {
    const items = [{
        title: "2019",
        cardTitle: "Class 10",
        cardSubtitle:(
            <>
              <span>School:</span> <p className={`para  ${props.mode === 'dark' ? '' : 'light-mode'}`}>Shiva Shiksha Sadan</p>
              <br />
              <span>Percentage:</span> 92.8
            </>
          )
                                     ,      
      },{
        title: "2021",
        cardTitle: "Class 12",
        cardSubtitle:(
            <>
                
              <span>School: </span> <p className={`para  ${props.mode === 'dark' ? '' : 'light-mode'}`}>Shiva Shiksha Sadan</p>
              <br />
              <span>Percentage: </span> 95.2
            </>
          ),      
      },
      {
        title: "2025",
        cardTitle: "BTECH CSE - Graduated",
        cardSubtitle:(
            <>
              <span>College: </span> <p className={`para  ${props.mode === 'dark' ? '' : 'light-mode'}`} > Panipat Institute of Engg. & Tech</p>
              <br />
              <span>CGPA: </span>7.7
            </>
          ), 
          cardDetailedText:(
            <>
              <span>Awards</span>
              <li>Secured 1st in Blind C competition organised by PIET Panipat Institute of Engineering and Technology. <a href="https://www.linkedin.com/posts/muskan-chhabra-661052227_secured-1st-in-blind-c-competition-organised-activity-7060967666315837441-j1M3?utm_source=share&utm_medium=member_desktop"><span>View Certificate</span></a></li>
              <br />
              <li>Secured 2nd in CODE CLASH at PIET Panipat Institute of Engineering and Technology. <a href="https://www.linkedin.com/posts/muskan-chhabra-661052227_certificate-activity-7186710327445590016-67j5?utm_source=share&utm_medium=member_desktop"><span>View Certificate</span></a> </li>       
                </>
          )     
      } ];
    return(
        <>
            <div id='about' className="max-width2">
                
            <h2 className={`${props.mode === 'dark' ? '' : 'light-mode'}`}>About Me </h2>
            <div className="contentin"> 
                
                <Chrono disableToolbar="true" classNames={{card: props.mode === 'dark' ? 'mycard':'cardlight' , cardSubTitle: 'my-card-subtitle'}} items={items} mode="VERTICAL_ALTERNATING" cardHeight="100vw"
                theme={{primary: '#462037',
                    secondary: '#683A46',
                    cardBgColor:props.mode === 'dark' ? "transparent":'white',
                    titleColor: '#462037',
                    titleColorActive: '#fff',}} enableBreakPoint="true" responsiveBreakPoint="600"/>
                
            </div>
                </div>
                
               

            
        </>
    );
}
