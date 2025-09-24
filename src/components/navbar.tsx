import React, { useEffect, useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import pdf from '../../public/Salvacion_Resume.pdf'

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down — hide navbar
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up — show navbar
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full z-50 p-4 bg-white shadow transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <a href="#" id="logo" className="parisienne-regular text-xl font-bold">
          RS
        </a>

        <ul className="flex space-x-6 font-medium">
          <li><a href="#header">Header</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href='../../public/Salvacion_Resume.pdf'
          id="resume"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
          download
        >
          <DownloadIcon /> Resume
        </a>
      </div>
    </nav>
  );
}
