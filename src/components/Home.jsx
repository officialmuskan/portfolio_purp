import "./home.css";
import { NavLink } from 'react-router-dom'
import { IoMdDownload, IoMdArrowDown
 } from "react-icons/io";
 import {BsArrowDownCircle} from "react-icons/bs";
import React, { useState } from "react";
export default function Home(props) {
    const fileUrl = 'https://drive.google.com/file/d/1E4232-xLg-udLDlWgivpI0XONcXM-PQE/view?usp=sharing';

    return(
        <>
        <div className="container1">
            <div className={`main ${props.mode === 'dark' ? '' : 'light-mode'}`}>
                
                <h1>Hi there! I'm Muskan
</h1>
                <p className={`ptag ${props.mode === 'dark' ? '' : 'light-mode'}`}> A &nbsp;<marker class='pink-highlight'>Web developer</marker> with a passion for creating websites. Dive into my world of code where every project is a new adventure, and every website is a story waiting to be told.
</p>
                <div className="buttons">
                    <a  className="downlogo" href={fileUrl}><button className="down">Download CV<button className="down2logo"><BsArrowDownCircle className="down2logo"/></button></button>
                    </a>
                    <NavLink to="/#contact" onClick={()=>handleClick('/contactme')}>
                    <button className={`cont ${props.mode === 'dark' ? '' : 'light-mode'}`}>Contact Me <a className="contlogo"><BsArrowDownCircle  className="contlogo"/></a></button>
                    </NavLink>
                </div>
            </div>
            
        </div>

        
        
        </>
    );
}