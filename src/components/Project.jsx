import React,{useEffect, useState} from "react";
import { projects } from "./data";
import './project.css'
import {GoArrowUpRight} from "react-icons/go";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {BsArrowUpRightCircleFill } from "react-icons/bs";
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from "swiper/modules";
import $ from "jquery"


export default function Project(props){
    return(
        <>
        
        <div id="projects" className={`max-width ${props.mode === 'dark' ? '' : 'light-mode'}`}>
        
            <h2>My Projects</h2>
            
            <div className="carousel owl-carousel">
            <Swiper spaceBetween={100}  pagination={{
            clickable:true,
        }} breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            500:{
                slidesPerView: 2,
              spaceBetween: 30,
            },
            868: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }} modules={[ Pagination]} className="mySwiper">
            
            {projects.map((project)=>(
                <SwiperSlide>
                   <div key={project.title} className={`card ${props.mode === 'dark' ? '' : 'light-mode'}`}>
                    <div className="image">
                        <img src={project.image} style={{borderRadius:"0px"}}alt="" />
                    </div>
                    <div className={`text ${props.mode === 'dark' ? '' : 'light-mode'}`}>
                        
                        <h2 style={{textAlign:"left"}} className="title">
                          {project.title}</h2>
                        <p style={{textAlign:"left", opacity:0.7}}>{project.description}</p>
                        <div style={{marginTop:"0px", display:'flex', justifyContent:'space-between', alignItems:'centert', textAlign:'center'}}>
                          <button style={{textAlign:"left"}} className="text-muted">{project.subtitle} Stack</button>
                            <a href={project.link} className="github"><BsArrowUpRightCircleFill className="github" size={23}/></a>
                    
                        </div>
                        </div>
               </div> </SwiperSlide>
            ))}
            </Swiper> 
               
            </div>
            
              
        </div>
        
        
            </>
    )
}