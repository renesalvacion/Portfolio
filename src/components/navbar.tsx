import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsHidden(true); // hide on scroll down
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false); // show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 bg-white shadow transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          id="logo"
          className="parisienne-regular text-xl font-bold hover:scale-110 hover:text-amber-600 transition-transform duration-300"
        >
          RS
        </a>

        {/* Nav Links */}
        <ul className="flex space-x-6 font-medium">
          {["Header", "About", "Project", "Contact"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {/* Link text */}
                <span className="transition-colors duration-300 group-hover:text-amber-600">
                  {item}
                </span>

                {/* Underline animation */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-amber-600 transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/Salvacion_Resume.pdf"
          id="resume"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded transition-all duration-300 hover:bg-amber-600 hover:scale-105 cursor-pointer"
          download
        >
          <DownloadIcon /> Resume
        </a>
      </div>
    </nav>
  );
}
