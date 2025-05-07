import './time.css'
import { Chrono } from "react-chrono";
import React, { useState } from "react";
export default function Timeline(props) {
    const items = [{
        title: "2019",
        cardTitle: "Class 10",
        cardSubtitle:(
            <>
              <span>School:</span> <p className={`para  ${props.mode === 'dark' ? '' : 'light-mode'}`}>Arya Girls Public School</p>
              <br />
              
            </>
          )
                                     ,      
      },{
        title: "2021",
        cardTitle: "Class 12",
        cardSubtitle:(
            <>
                
              <span>School: </span> <p className={`para  ${props.mode === 'dark' ? '' : 'light-mode'}`}>Arya Girls Public School</p>
              <br />
              
            </>
          ),      
      },
      {
        title: "2024",
        cardTitle: "BTECH CSE - Final Year",
        cardSubtitle:(
            <>
              <span>College: </span> <p className={`para  ${props.mode === 'dark' ? '' : 'light-mode'}`} > Panipat Institute of Engg. & Tech</p>
              <br />
              
            </>
          ), 
              
      } ];
    return(
        <>
            <div id='about' className="max-width2">
                
            <h2><mark class='pink-highlight'>About Me</mark> </h2>
            <div className="contentin"> 
                
                <Chrono disableToolbar="true" classNames={{card: props.mode === 'dark' ? 'mycard':'cardlight' , cardSubTitle: 'my-card-subtitle'}} items={items} mode="VERTICAL_ALTERNATING" cardHeight="100vw"
                theme={{primary: '#33CCFF',
                    secondary: '#252746',
                    cardBgColor:props.mode === 'dark' ? "#464866":'white',
                    titleColor: '#33CCFF',
                    titleColorActive: '#33CCFF',}} enableBreakPoint="true" responsiveBreakPoint="600"/>
                
            </div>
                </div>
                
               

            
        </>
    );
}
