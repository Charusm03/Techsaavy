'use client';
import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-black border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">TechSaavy</h3>
          <p className="text-gray-300 mb-4">
            Empowering the next generation of technologists
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.instagram.com/techsaavyiteec?igsh=MXR1MWRwcGszbDVqNQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <FaInstagram className={`text-${isMobile ? '2xl' : '3xl'}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/techsaavy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-300 flex items-center mx-4"
            >
              <FaLinkedin className={`text-${isMobile ? '2xl' : '3xl'}`} />
            </a>
          </div>
          <div className="flex flex-col items-center text-center mb-4">
            <div className="flex items-center justify-center mb-2">
              <FaMapMarkerAlt className={`text-${isMobile ? 'xl' : '3xl'} mr-2`} />
              <p className={`mb-0 ${isMobile ? "text-xs max-w-xs" : "text-base"}`}>
                Department of Information Technology
              </p>
            </div>
            <p className={`mb-0 text-justify${isMobile ? "text-xs max-w-xs" : "text-base"}`}>
              Main Block,2nd Floor,SRM Easwari Engineering College,<br/>
              Ramapuram, Chennai-89
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
