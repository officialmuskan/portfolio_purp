import "./foot.css";
import happySvg from '../assets/happy.jpg.svg';
import { FaMailBulk, FaInstagram, FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import React, { useState } from "react";
export default function Footer(props) {
    return(
        <>
            <div id="contact" className={`max-width1 ${props.mode === 'dark' ? '' : 'light-mode'}` }>
                <div className="content">
                <div className="div">
                    <h2>Reach out to me</h2>
                <p className="subhead">Available for collaboration, questions, or just a quick chat.</p>
                
                </div>
                <div className="div">
                    <h2>Phone No</h2>
                    <p className="subhead">+91-8053123188</p>
                </div>
                <div className="div">
                    <h2>Email</h2>
                    <p className="subhead"><a href="mailto:muskanchhabra.0806@gmail.com">muskanchhabra.0806@gmail.com</a>
                    </p>
                </div>
                <div className="div">
                    <h2>Connect with me</h2>
                    <div className="footericon">
                    <a href="https://github.com/officialmuskan"><FaGithub/></a>
                    <a href=""><FaInstagram/></a>
                    <a href="https://www.linkedin.com/in/muskan-chhabra-661052227/"><FaLinkedin/></a>

                </div>
                </div>
                
                </div>
                <hr className="hr" style={{background:"red"}}/>
                
                <p className="subhead last">Made with <FaHeart color="red" size={13} /> by Muskan</p>
                
               

            </div>
        </>
    );
}