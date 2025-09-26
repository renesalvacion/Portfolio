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
      <div  style={{ position: "relative", zIndex: 10, display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
        <div className="hone flex" style={{alignItems:'center'}}>
          <h1 data-aos="fade-right" className="rubik-storm-regular">
            PORT <br /> FOLIO
          </h1>

          <div className="imh" data-aos="zoom-in-up">
            <img className="hel" src="./message.png" alt="" />
            <img
            className="car"
            src="./cat.jpg"
            
            alt=""
            style={{
              height: '17rem',
              borderRadius: '50%',
              boxShadow: `
                0 0 10px #ffe4e1,
                0 0 20px #f8e1e7,
                0 0 30px #fff0f5,
                0 0 40px #ffd6dc
              `,
              transition: 'box-shadow 0.3s ease-in-out',
            }}
          />

          </div>

          

        </div>

        <div className="htwo" style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
          <div
            className="name flex flex-col align-middle justify-around "
            data-aos="fade-up"
            style={{}}
          >
            <h2 className="text-4xl font-extrabold"
            style={{
              textShadow: "1px 1px 2px rgba(255, 255, 255, 0.6)", 
              letterSpacing: "1px",
            }}>RENE O. SALVACION JR.</h2>
            
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
          <h1 data-aos="fade-left" className="rubik-storm-regular secondh">
            PORT <br /> FOLIO
          </h1>

          <Email modalActive={isOpen} onClose={() => setOpenModal(false)}>
  <form action="" className="flex flex-col gap-6 p-4">
    
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
