import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="bg-stone-300 w-full mt-20 py-8">
      <div className="flex justify-center gap-6 mb-4 flex-wrap">

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <div className="rounded-2xl flex items-center justify-center border-2 border-black w-16 h-16 hover:bg-stone-400 transition">
            <InstagramIcon style={{ fontSize: "2rem" }} />
          </div>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <div className="rounded-2xl flex items-center justify-center border-2 border-black w-16 h-16 hover:bg-stone-400 transition">
            <FacebookIcon style={{ fontSize: "2rem" }} />
          </div>
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <div className="rounded-2xl flex items-center justify-center border-2 border-black w-16 h-16 hover:bg-stone-400 transition">
            <LinkedInIcon style={{ fontSize: "2rem" }} />
          </div>
        </a>

        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <div className="rounded-2xl flex items-center justify-center border-2 border-black w-16 h-16 hover:bg-stone-400 transition">
            <GitHubIcon style={{ fontSize: "2rem" }} />
          </div>
        </a>
      </div>

      <p className="text-center text-gray-700 font-semibold">
        © 2025 • This portfolio was made by <span className="font-bold">Rene Salvacion</span>
      </p>
    </footer>
  );
}
