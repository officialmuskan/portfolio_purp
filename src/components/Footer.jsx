import "./foot.css";
import happySvg from '../assets/happy.jpg.svg';
import { FaMailBulk, FaInstagram, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import React, { useState } from "react";
export default function Footer(props) {
    return(
        <>
            <div id="contact" className={`max-width1 ${props.mode === 'dark' ? '' : 'light-mode'}` }>
                <div className="content">
                <h2>Reach out to me</h2>
                
                <div className="iconsfoot">
                    <a href="https://github.com/officialmuskan"><FaGithub/></a>
                    <a href="mailto:muskanchhabra.0806@gmail.com"><FaMailBulk/></a>
                    <a href=""><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/muskan-chhabra-661052227/"><FaLinkedin/></a>

                </div>
                <h4>Made with <FaHeart color="red" size={13} /> by Muskan</h4>
                </div>
                <div className="svg">
                    <img src = {happySvg} height={150} width={400}/>
                </div>

            </div>
        </>
    );
}