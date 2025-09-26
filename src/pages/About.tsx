import React, { useState } from "react";

import Skills from "../components/aboutArray";
import DryLeaves from "../components/Dryleaves";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Aos from "../components/aos";
export default function About() {

  const [isActive, setActive] = useState(false)
  const ImageUrl = "../../public/me.jpg"
  const SchoolUrl = "../../public/schold.jpg"

  Aos()

  const viewResume = () => {
    if(!isActive){
      setActive(true)
    }else{
      setActive(false)
    }
  }

  return (
    <div className="relative pt-16 min-h-screen overflow-hidden">
      
      {/* Falling leaves in the background */}
      <DryLeaves />

      {!!isActive && 
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg z-1150 overflow-auto" style={{opacity:'90%'}} onClick={() => setActive(false)}>
  <div className="w-full h-full flex justify-center items-center">
    <img
      src="/resume_img.jpg"  // ✅ Use public path if using Vite/React
      alt="Resume"
      className="object-contain max-w-full max-h-full cursor-zoom-in transition-transform duration-300 hover:scale-110"
    />
  </div>
</div>
      }



      {/* Main content above leaves */}
      <div className="relative z-10">

        

        
 <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 p-4">
  {/* Profile Card */}
  <div
    data-aos="fade-up"
    className="relative w-full max-w-md md:max-w-lg lg:max-w-xl aspect-square bg-center bg-cover rounded-lg shadow flex flex-col text-center hover:shadow-lg transition"
    style={{
      backgroundImage: "url('/me.jpg')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-lg"></div>

    {/* Text */}
    <div className="relative z-10 flex flex-col w-full mt-6 px-4" data-aos="fade-up">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow">
        HELLO MY NAME
      </h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-500 drop-shadow tracking-widest">
        IS RENE!
      </h1>
    </div>

    {/* Buttons */}
    <div className="btn relative z-10 flex flex-col sm:flex-row justify-center items-center gap-4 mt-auto mb-6 px-4">
      <button className="cursor-pointer w-full sm:w-auto px-6 py-2 rounded border border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 transition">
        SEND ME A MESSAGE
      </button>

      <button
        className="cursor-pointer w-full sm:w-auto px-6 py-2 rounded border border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 transition"
        onClick={viewResume}
      >
        VIEW MY RESUME
      </button>
    </div>
  </div>

  {/* Intro Card */}
  <div
    className="introT w-full max-w-3xl bg-white rounded-lg shadow p-6 md:p-8 flex flex-col"
    data-aos="fade-left"
  >
    {/* Title */}
    <h1 className="font-extrabold text-5xl sm:text-2xl md:text-5xl text-center mb-4">
      Introduction
    </h1>

    {/* Intro text */}
    <div className="abo space-y-3">
      <h2 className="font-bold text-xl sm:text-base md:text-lg" data-aos="fade-up">
        A Software Developer Based In Philippines
      </h2>
      <p
        className="text-xs sm:text-sm md:text-base lg:text-1xl font-semibold leading-relaxed text-gray-700"
        data-aos="fade-up"
      >
        I'm a Computer Science graduate and a passionate Full Stack Developer with
        a strong foundation in both front-end and back-end technologies. I enjoy
        building scalable, responsive web applications and solving real-world
        problems through clean, efficient code. With experience in modern
        frameworks, databases, and development tools, I strive to create seamless
        user experiences and robust system architectures. I'm always eager to
        learn, grow, and contribute to impactful projects.
      </p>
    </div>

    {/* Get in touch title */}
    <h2
      className="font-bold text-lg sm:text-xl md:text-2xl text-center mt-8"
      data-aos="fade-up"
    >
      Get In Touch
    </h2>

{/* Icons */}
<div
  className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 w-full max-w-4xl mx-auto"
  data-aos="fade-up"
>
  <a href="http://" target="_blank" rel="noopener noreferrer" className="flex justify-center">
    <div className="icon-card w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center border-2 border-black hover:bg-gray-100 transition">
      <InstagramIcon className="text-2xl sm:text-3xl md:text-4xl" />
    </div>
  </a>

  <a href="http://" target="_blank" rel="noopener noreferrer" className="flex justify-center">
    <div className="icon-card w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center border-2 border-black hover:bg-gray-100 transition">
      <FacebookIcon className="text-2xl sm:text-3xl md:text-4xl" />
    </div>
  </a>

  <a href="http://" target="_blank" rel="noopener noreferrer" className="flex justify-center">
    <div className="icon-card w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center border-2 border-black hover:bg-gray-100 transition">
      <LinkedInIcon className="text-2xl sm:text-3xl md:text-4xl" />
    </div>
  </a>

  <a href="http://" target="_blank" rel="noopener noreferrer" className="flex justify-center">
    <div className="icon-card w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center border-2 border-black hover:bg-gray-100 transition">
      <GitHubIcon className="text-2xl sm:text-3xl md:text-4xl" />
    </div>
  </a>
</div>




  </div>
</div>


      
      
      </div>

      <br />
      <br />

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

          <div className="rounded-3xl h-80 p-4  shadow-lg about_card" data-aos="fade-right">
            <h1 className="font-bold text-2xl text-center underline text-gray-800">EXPERIENCE</h1>

            <div className="pt-6 space-y-6">
              <ul className="text-center space-y-1">
                <li className="font-bold text-xl sm:text-2xl text-gray-700">
                  Bacoor National High School
                </li>
                <li className="text-xs text-gray-500 font-medium">July 2024 - September 2024</li>
                <li className="text-sm font-semibold text-gray-600">Web Developer</li>
              </ul>

              <ul className="text-center space-y-1">
                <li className="font-bold text-xl sm:text-2xl text-gray-700">
                  Cloud StartUp Company
                </li>
                <li className="text-xs text-gray-500 font-medium">March 2023 - August 2023</li>
                <li className="text-sm font-semibold text-gray-600">Full Stack Developer</li>
              </ul>
            </div>
          </div>



          <div className=" rounded-4xl about_card" style={{padding:'1rem'}} data-aos="fade-up">
            <h1 className="font-bold text-2xl text-center">Expertise</h1>

            <Skills/>
          </div>

         <div
  className="relative rounded-4xl h-80 w-full about_card overflow-hidden"
  data-aos="fade-left"
  style={{
    backgroundImage: "url('../../public/schold.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black opacity-40 z-0" style={{opacity:"70%"}}></div>

  {/* Content */}
  <div className="relative z-10 text-white flex flex-col justify-center items-center h-full px-6">
    <h1 className="font-bold text-2xl text-center shadow-2xs">Education</h1>

    <div className="pt-6 space-y-6">
      <ul className="text-center space-y-1">
        <li className="font-bold text-xl sm:text-2xl shadow-2xl">
          Cavite State University
        </li>
        <li className="text-xs font-medium shadow-2xl">September 2021 - September 2025</li>
        <li className="text-sm font-bold">Bachelor of Science In Computer Science</li>
      </ul>

      <ul className="text-center space-y-1">
        <li className="font-bold text-xl sm:text-2xl shadow-2xl">
          South East Asian Institute of Trade and Technology
        </li>
        <li className="text-xs font-medium">June 2019 - March 2021</li>
        <li className="text-sm font-bold">STEM</li>
      </ul>
    </div>
  </div>
</div>



      </div>

    </div>
  );
}
