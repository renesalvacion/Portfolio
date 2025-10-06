import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer
      className={`w-full mt-20 py-8 transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-gray-200" : "bg-fuchsia-50 text-gray-700"
      }`}
    >
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 flex-wrap">
        {[
          { href: "https://instagram.com", Icon: InstagramIcon },
          { href: "https://facebook.com", Icon: FacebookIcon },
          { href: "https://linkedin.com", Icon: LinkedInIcon },
          { href: "https://github.com", Icon: GitHubIcon },
        ].map(({ href, Icon }, i) => (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer">
            <div
              className={`rounded-2xl flex items-center justify-center w-16 h-16 border-2 transition-all duration-300
                ${
                  isDark
                    ? "border-gray-200 hover:bg-gray-800 hover:border-amber-400"
                    : "border-black hover:bg-fuchsia-100"
                }`}
            >
              <Icon
                style={{
                  fontSize: "2rem",
                  color: isDark ? "#f5f5f5" : "#111",
                }}
              />
            </div>
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p
        className={`text-center font-semibold ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        © 2025 • This portfolio was made by{" "}
        <span
          className={`font-bold ${
            isDark ? "text-amber-400" : "text-fuchsia-800"
          }`}
        >
          Rene Salvacion
        </span>
      </p>
    </footer>
  );
}
