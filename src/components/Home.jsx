import "./home.css";
import { NavLink } from 'react-router-dom'
import { IoMdDownload, IoMdPhonePortrait } from "react-icons/io";
import React, { useState } from "react";
export default function Home(props) {
    const fileUrl = 'https://drive.google.com/file/d/1MhLUZXpAIgac451qABZWBr4OZN4l7VR8/view?usp=sharing';

    return(
        <>
        <div className="container1">
            <div className={`main ${props.mode === 'dark' ? '' : 'light-mode'}`}>
                
                <h1>Hi there! I'm Vinky
</h1>
                <p className={`ptag ${props.mode === 'dark' ? '' : 'light-mode'}`}> A &nbsp;<mark class='pink-highlight'>Web developer</mark> &nbsp; with a passion for creating websites. Dive into my world of code where every project is a new adventure, and every website is a story waiting to be told.
</p>
                <div className="buttons">
                    <a  className="downlogo" href={fileUrl}><button className="down "><IoMdDownload/>Download Resume</button>
                    </a>
                    <NavLink to="/#contact" onClick={()=>handleClick('/contactme')}>
                    <button className={`cont ${props.mode === 'dark' ? '' : 'light-mode'}`}><a className="contlogo "><IoMdPhonePortrait/></a>Contact Me</button>
                    </NavLink>
                </div>
            </div>
            
        </div>

        
        
        </>
    );
}