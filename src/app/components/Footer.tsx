'use client';
import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { Orbitron, Space_Grotesk } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-[#050a14] border-t border-blue-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className={`${orbitron.className} text-2xl font-bold professional-text mb-6`}>TECHSAAVY</h3>
            <p className={`${spaceGrotesk.className} text-gray-400 text-sm leading-relaxed mb-6`}>
              Empowering students to build real solutions, not just learn theory. Bridging the gap between classroom and industry.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/techsaavyiteec" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/techsaavy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className={`${orbitron.className} text-blue-300 font-semibold mb-6 text-sm tracking-widest`}>QUICK LINKS</h4>
            <ul className={`${spaceGrotesk.className} space-y-4 text-gray-400 text-sm`}>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/achievements" className="hover:text-blue-400 transition-colors cursor-pointer">Achievements</Link></li>
              <li><Link href="/gallery" className="hover:text-blue-400 transition-colors cursor-pointer">Events</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className={`${orbitron.className} text-blue-300 font-semibold mb-6 text-sm tracking-widest`}>CONTACT US</h4>
            <div className={`${spaceGrotesk.className} space-y-4 text-gray-400 text-sm`}>
              <div className="flex items-start justify-center md:justify-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <p>Department of IT, Main Block, 2nd Floor, Easwari Engineering College, Ramapuram, Chennai-89</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="text-blue-500 mr-3 flex-shrink-0" />
                <p>techsaavyiteec@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/10 pt-8 mt-12 text-center">
          <p className={`${spaceGrotesk.className} text-gray-500 text-xs tracking-widest`}>
            &copy; {new Date().getFullYear()} TECHSAAVY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
