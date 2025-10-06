import React, { useState, useEffect } from "react";


import Aos from "../components/aos";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import SakuraBackground from "../components/Particles"; // <- the CSS-based sakura we built
import Email from "../components/Modal";

export default function Home() {
  const [isOpen, setOpenModal] = useState(false);

  Aos()

  

  return (
    <div style={{ position: "relative"}}>
      {/* 🌸 Sakura petals in the background */}
      <SakuraBackground count={70} />

      {/* Your page content on top */}
      <div className=".con"  style={{ position: "relative", zIndex: 10, display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', gap:'2rem'}}>
        <div className="hone flex " style={{alignItems:'center', gap:'2rem'}}>
          <h1 data-aos="fade-right" className=" mb rubik-storm-regular lg:text-8xl md:text-2xl sm:text-7xl">
            PORT<br className="mobile-hide"/>FOLIO
          </h1>

          <div className="imh" data-aos="zoom-in-up">
            <img className="hel" src="./message.png" alt="" />
            <img
            className="car"
            src="./cat.jpg"
            
            alt=""
            
          />

          </div>

          

        </div>

        <div className="htwo" style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
          <div
            className="name flex flex-col align-middle justify-around "
            data-aos="fade-up"
            style={{}}
          >
            <h2
            className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center"
            style={{
              textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)",
              letterSpacing: "1px",
            }}
          >
            RENE O. SALVACION JR.
          </h2>

            
            <h5  style={{
                textAlign: "center",
                fontWeight: "500",
                color: "#2c2c2c", // deep charcoal, readable but soft
                textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)", // subtle glow
                letterSpacing: "1px", // optional, more elegant spacing
              }}>
              SOFTWARE DEVELOPER
            </h5>

            <br />

            <button className="btn_mess" onClick={() => setOpenModal(true)}>
              Get In Touch
            </button>

            <div
                className="socia flex justify-center gap-9"
                style={{ position: "relative", top: "1rem" }}
                data-aos="fade-up"
              >
                <a href="" className="ig">
                  <InstagramIcon />
                </a>
                <a href="" className="fb">
                  <FacebookIcon />
                </a>
                <a href="" className="li">
                  <LinkedInIcon />
                </a>
                <a href="" className="gh">
                  <GitHubIcon />
                </a>
            </div>


          </div>
          <h1 data-aos="fade-left" className="rubik-storm-regular secondh lg:text-8xl md:text-2xl sm:text-7xl">
            PORT <br /> FOLIO
          </h1>

          <Email modalActive={isOpen} onClose={() => setOpenModal(false)}>
  <form
  action=""
  className="flex flex-col gap-3 sm:gap-6 p-3 sm:p-4"
>

    
    {/* Email + Subject Row */}
    <div className="flex flex-col md:flex-row gap-4">
      {/* Email Field */}
      <div className="flex flex-col flex-1">
        <label htmlFor="email" className="font-medium text-sm text-gray-700 mb-1">Email</label>
        <input
          id="email"
          className="bg-fuchsia-50 shadow p-2 rounded w-full"
          type="email"
          placeholder="Email..."
        />
      </div>

      {/* Subject Field */}
      <div className="flex flex-col flex-1">
        <label htmlFor="subject" className="font-medium text-sm text-gray-700 mb-1">Subject</label>
        <input
          id="subject"
          className="bg-fuchsia-50 shadow p-2 rounded w-full"
          type="text"
          placeholder="Subject..."
        />
      </div>
    </div>

    {/* Name Field */}
    <div className="flex flex-col">
      <label htmlFor="name" className="font-medium text-sm text-gray-700 mb-1">Name</label>
      <input
        id="name"
        className="bg-fuchsia-50 shadow p-2 rounded w-full"
        type="text"
        placeholder="Name..."
      />
    </div>

    {/* Message Field */}
    <div className="flex flex-col">
      <label htmlFor="message" className="font-medium text-sm text-gray-700 mb-1">Message</label>
      <textarea
        id="message"
        className="bg-fuchsia-50 shadow p-2 rounded resize-y min-h-[12rem] w-full"
        placeholder="Message..."
      />
    </div>

    {/* Submit Button */}
    <button className="bg-fuchsia-50 hover:bg-fuchsia-100 transition p-2 font-bold cursor-pointer w-full rounded">
      Submit
    </button>
  </form>
</Email>

        </div>

        
      </div>
    </div>
  );
}
