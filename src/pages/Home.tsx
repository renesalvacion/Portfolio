import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import SakuraBackground from "../components/Particles"; // <- the CSS-based sakura we built
import Email from "../components/Modal";

export default function Home() {
  const [isOpen, setOpenModal] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* 🌸 Sakura petals in the background */}
      <SakuraBackground count={30} />

      {/* Your page content on top */}
      <div  style={{ position: "relative", zIndex: 10, display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
        <div className="hone flex" style={{alignItems:'center'}}>
          <h1 data-aos="fade-right" className="rubik-storm-regular">
            PORT <br /> FOLIO
          </h1>

          <div className="imh">
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
          <h1 data-aos="fade-left" className="rubik-storm-regular">
            PORT <br /> FOLIO
          </h1>

          <Email modalActive={isOpen} onClose={() => setOpenModal(false)}>
            <form action="" className="flex flex-col">
              <input type="text" placeholder="Email..." />
              <input type="text" placeholder="Subject..." />
              <input type="text" placeholder="Name...." />
              <input type="text" placeholder="Message....." />
              <button>Submit</button>
            </form>
          </Email>
        </div>

        
      </div>
    </div>
  );
}
