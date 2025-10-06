import React, { useEffect, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ isDark }: { isDark: boolean }) {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hamActive, setHam] = useState(false);

  const hamButton = () => setHam(!hamActive);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 shadow transition-all duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"}`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          id="logo"
          className={`parisienne-regular text-xl font-bold transition-transform duration-300 hover:scale-110 ${
            isDark ? "hover:text-amber-400" : "hover:text-amber-600"
          }`}
        >
          RS
        </a>

        {/* Nav Links */}
        <div
          className="nav_anim flex justify-around w-full"
          style={{
            top: hamActive ? "8rem" : "-22rem",
            transition: ".5s ease-in-out",
          }}
        >
          <div className="nav_anims flex justify-around w-full">
            <ul className="flex space-x-6 font-medium">
              {["Header", "About", "Project", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative group"
                  >
                    <span
                      className={`transition-colors duration-300 group-hover:${
                        isDark ? "text-amber-400" : "text-amber-600"
                      }`}
                    >
                      {item}
                    </span>
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-[2px] ${
                        isDark ? "bg-amber-400" : "bg-amber-600"
                      } transition-all duration-300 group-hover:w-full`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume Button */}
          <a
            href="/Salvacion_Resume.pdf"
            id="resume"
            className={`flex items-center gap-2 px-4 py-2 rounded transition-all duration-300 hover:scale-105 cursor-pointer ${
              isDark
                ? "bg-amber-500 text-black hover:bg-amber-400"
                : "bg-black text-white hover:bg-amber-600"
            }`}
            download
          >
            <DownloadIcon /> Resume
          </a>
        </div>

        {/* Hamburger Button */}
        <button className="ham" onClick={hamButton}>
          <MenuIcon
            className={`text-5xl transition-colors duration-300 ${
              isDark ? "text-gray-100 hover:text-amber-400" : "text-black hover:text-amber-600"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
