import React,{useEffect, useState} from "react";
import { projects } from "./data";
import './project.css'
import { FaGithub, } from "react-icons/fa6";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { FreeMode, Pagination } from "swiper/modules";
import $ from "jquery"

export default function Project(props){
    return(
        <>
        
        <div id="projects" className="max-width">
        
            <h2><mark class='pink-highlight'>My Projects</mark> </h2>
            
            <div className="carousel owl-carousel">
            <Swiper slidesPerView={1} spaceBetween={30}  pagination={{
            clickable:true,
        }} breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
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
                        <img src={project.image} alt="" />
                    </div>
                    <div className={`text ${props.mode === 'dark' ? '' : 'light-mode'}`}>

                        <h2 className="title">{project.title}</h2>
                        <h3 className="text-muted">Tech Stack&nbsp;&nbsp;{project.subtitle}</h3>
                        <p>{project.description}</p>
                        <button href="#" class="down"><i class="downlogo"><FaGithub/></i> Github</button>
                    </div>
               </div> </SwiperSlide>
            ))}
            </Swiper> 
               
            </div>
            
              
        </div>
        
        
            </>
    )
}