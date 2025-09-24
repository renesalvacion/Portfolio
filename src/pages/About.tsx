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

        

        
        
        <div className="1scol flex justify-center" style={{alignItems:'center', gap:'2rem'}}>

       <div
       data-aos="fade-up"
  className="relative  w-full bg-center bg-cover rounded-lg shadow p-4 flex flex-col   text-center hover:shadow-lg transition"
  style={{
    width: '32rem',
    height: '32rem',
    backgroundImage: `url(${ImageUrl})`,
    
  }}
>

  {/* Transparent overlay behind text */}
  <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg z-0" style={{opacity:'60%'}}></div>

  {/* Text above overlay */}
  <div className="relative z-10 flex flex-col w-full" data-aos="fade-up">
    <h1 className="text-5xl font-bold text-white drop-shadow ">HELLO MY NAME</h1>
    <h1 className="text-5xl font-bold text-red-500 drop-shadow" style={{letterSpacing:'1rem'}}>IS RENE!</h1>
  </div>

  <div className="btn z-10 flex justify-around items-center h-full">

     <button
    className="cursor-pointer px-6 py-2 rounded border border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 transition duration-300"
  >
    SEND ME A MESSAGE
  </button>

  <button
    className="cursor-pointer px-6 py-2 rounded border border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 transition duration-300"
  onClick={viewResume}
  >
    VIEW MY RESUME
  </button>
  </div>
</div>





            <div className="introT p-1 about_card" data-aos="fade-left" style={{ width:'42rem', height:'32rem'}}>
              <h1 className="font-extrabold text-3xl text-center p-3">Introduction</h1>

              <div className="abo p-2" style={{width:'100%', height:'12rem'}}>
                <h1 className="font-bold" data-aos="fade-up">A Software Developer Based In Philippines</h1>
                  <p data-aos="fade-up"> 
                    I'm a Computer Science graduate and a passionate Full Stack
                    Developer with a strong foundation in both front-end and back-end
                    technologies. I enjoy building scalable, responsive web
                    applications and solving real-world problems through clean,
                    efficient code. With experience in modern frameworks, databases,
                    and development tools, I strive to create seamless user
                    experiences and robust system architectures. I'm always eager to
                    learn, grow, and contribute to impactful projects.
                  </p>
              </div>


<h1 className="font-bold text-2xl " data-aos="fade-up">Get In Touch</h1>
              <div className="getIn flex justify-around gap-3 pt-4 " data-aos="fade-up" style={{  width:'100%', height:'12rem'}}>
                
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <div className="email icon-card rounded-2xl flex items-center justify-center" style={{border:'2px solid black', width:'8rem', height:'8rem'}}>
                    <span><InstagramIcon style={{fontSize:"4rem"}}/></span>
                  </div>
                </a>
                

                <a href="http://" target="_blank">
                    <div className="linkind icon-card rounded-2xl flex items-center justify-center" style={{border:'2px solid black', width:'8rem', height:'8rem'}}>
                      <span><FacebookIcon style={{fontSize:"4rem"}}/></span>
                    </div>
                </a>

                <a href="http://" target="_blank">
                  <div className="igsds icon-card rounded-2xl flex items-center justify-center" style={{border:'2px solid black' , width:'8rem', height:'8rem'}}>
                    <span><LinkedInIcon style={{fontSize:"4rem"}}/></span>
                  </div>
                </a>

                <a href="http://"  target="_blank">
                  <div className="igsds icon-card rounded-2xl flex items-center justify-center" style={{border:'2px solid black' , width:'8rem', height:'8rem'}}>
                    <span><GitHubIcon style={{fontSize:"4rem"}}/></span>
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
    backgroundImage: `url(${SchoolUrl})`,
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
