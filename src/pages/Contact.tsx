import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Sprinkle from '../components/Sprinkle';
import Aos from '../components/aos';

export default function Contact({isDark} : {isDark:boolean}) {
  Aos();

  return (
    <div className="relative  p-10" style={{
    background: isDark
      ? "linear-gradient(to bottom right, #111, #333, #000)"
      : "linear-gradient(to bottom right, #ffe4e6, #eff6ff, #f3e8ff)",
  }}>
      {/* Sprinkle background */}
       {/* Sprinkle animation behind everything */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Sprinkle />
  </div>

      {/* Header */}
      <div
        className="c flex justify-center align-middle flex-col"
        data-aos="fade-up"
        style={{ width: '100%', height: '30vh' }}
      >
        <h1 className="text-4xl font-bold text-center text-purple-800 pt-2">
          Get In Touch With Me
        </h1>
        <p className="font-medium text-center text-purple-700 pt-3 leading-relaxed max-w-4xl mx-auto">
          I wholeheartedly encourage you to reach out and connect with me at your earliest convenience.
          Whether you have questions, ideas, or simply wish to engage in a meaningful conversation, I am
          always eager to hear from you and look forward to the opportunity to communicate and collaborate.
        </p>
      </div>

      {/* Form & Newsletter Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-10 pt-14">
        {/* Form */}
        <div className="w-full max-w-xl bg-white/70 backdrop-blur-md p-8 rounded-lg shadow-md" data-aos="zoom-in-up">
          <form className="flex flex-col gap-6">
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex flex-col flex-1">
                <label htmlFor="email" className="text-sm font-medium text-purple-800 mb-1">Email</label>
                <input
                  id="email"
                  className="bg-white/60 shadow p-2 rounded border border-purple-200 focus:outline-none"
                  type="email"
                  placeholder="Email..."
                />
              </div>

              <div className="flex flex-col flex-1">
                <label htmlFor="subject" className="text-sm font-medium text-purple-800 mb-1">Subject</label>
                <input
                  id="subject"
                  className="bg-white/60 shadow p-2 rounded border border-purple-200 focus:outline-none"
                  type="text"
                  placeholder="Subject..."
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-purple-800 mb-1">Name</label>
              <input
                id="name"
                className="bg-white/60 shadow p-2 rounded border border-purple-200 focus:outline-none"
                type="text"
                placeholder="Name..."
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm font-medium text-purple-800 mb-1">Message</label>
              <textarea
                id="message"
                className="bg-white/60 shadow p-2 rounded border border-purple-200 resize-y min-h-[10rem] focus:outline-none"
                placeholder="Your message..."
              />
            </div>

            <button className="bg-pink-50 hover:bg-pink-100 transition text-purple-900 font-bold py-2 rounded shadow-md">
              Submit
            </button>
          </form>
        </div>

        {/* Newsletter / Social Section */}
        <div
          className="w-full max-w-xl bg-cover bg-center rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden"
          data-aos="zoom-in-up"
          style={{ backgroundImage: "url('../../public/dev.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 z-0 backdrop-blur-sm" style={{opacity:'70%'}}></div>

          <h5 className="text-3xl font-bold text-purple-50 z-10 drop-shadow-md" data-aos="fade-up">
            Our NewsLetters
          </h5>

          <p className="text-purple-50 z-10 mt-4 text-sm sm:text-base px-4" data-aos="fade-up">
            Stay up to date with my latest projects, updates, and web development tips. Sign up and never miss out!
          </p>

          <p className="text-purple-50 z-10 mt-2 text-sm sm:text-base px-4" data-aos="fade-up">
            Let's stay connected! Drop your email and I’ll keep you posted on my latest dev work and passion projects.
          </p>

          <div className="z-10 pt-8">
            <h4 className="font-semibold text-purple-50" data-aos="fade-up">
              You can reach out on my social media:
            </h4>
            <div className="flex justify-center gap-6 mt-4" data-aos="fade-up">
              <a href="#" className="hover:scale-110 transition-transform">
                <InstagramIcon className="text-purple-50" style={{ fontSize: '2rem' }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <FacebookIcon className="text-purple-50" style={{ fontSize: '2rem' }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <LinkedInIcon className="text-purple-50" style={{ fontSize: '2rem' }} />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <GitHubIcon className="text-purple-50" style={{ fontSize: '2rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="pt-14">
        <h1 className="text-center  text-purple-600 text-lg font-bold" data-aos="fade-up">GET MY INFO:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-7 max-w-5xl mx-auto" data-aos="fade-up">
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md text-center">
            <PhoneIcon className="text-purple-800 mb-2" style={{ fontSize: '2.5rem' }} />
            <p className="text-purple-700 font-semibold">(+63) 985-953-7769</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md text-center">
            <AttachEmailIcon className="text-purple-800 mb-2" style={{ fontSize: '2.5rem' }} />
            <p className="text-purple-700 font-semibold">renesalvacion26@gmail.com</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md text-center">
            <AddLocationIcon className="text-purple-800 mb-2" style={{ fontSize: '2.5rem' }} />
            <p className="text-purple-700 font-semibold">Las Piñas City, NCR</p>
          </div>
        </div>
      </div>
    </div>
  );
}
