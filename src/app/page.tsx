'use client';
import { useEffect, useState } from 'react';
import "./globals.css";
import { Inter, Roboto_Mono, Orbitron, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import TechBackground from "./components/TechBackground";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Trigger entrance animations
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    { number: "25+", label: "Active Members" },
    { number: "40+", label: "Events Conducted" },
    { number: "5+", label: "Years Active" },
    { number: "500+", label: "Students Trained" }
  ];

  const offerings = [
    {
      title: "Technical Workshops",
      description: "Industry-standard training programs and certification courses",
      color: "from-blue-600/20 to-blue-800/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Competitive Events",
      description: "Hackathons, coding competitions, and technical challenges",
      color: "from-indigo-600/20 to-indigo-800/20",
      borderColor: "border-indigo-500/30"
    },
    {
      title: "Industry Connect",
      description: "Networking opportunities with tech professionals and alumni",
      color: "from-slate-600/20 to-slate-800/20",
      borderColor: "border-slate-500/30"
    },
    {
      title: "Skill Enhancement",
      description: "Mentorship programs and project development support",
      color: "from-gray-600/20 to-gray-800/20",
      borderColor: "border-gray-500/30"
    }
  ];

  return (
    <div className={`${inter.className} min-h-screen text-white relative`}>
      <TechBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`text-center max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Logo and Title */}
          <div className="mb-12">
            <div className="relative inline-block mb-8">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 via-slate-500/20 to-gray-500/20 p-1 professional-glow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-black overflow-hidden flex items-center justify-center border border-blue-400/20">
                  <Image
                    src="/techsaavy.svg"
                    alt="TechSaavy Logo"
                    width={140}
                    height={140}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <h1 className={`${orbitron.className} text-5xl md:text-7xl font-black mb-6 professional-text tracking-wider`}>
              TECHSAAVY
            </h1>
            <div className="space-y-2 mb-8">
              <p className={`${spaceGrotesk.className} text-xl md:text-2xl text-blue-200 font-medium tracking-wide`}>
                Department of Information Technology
              </p>
              <p className={`${spaceGrotesk.className} text-lg md:text-xl text-neutral-300 font-light tracking-wide`}>
                Easwari Engineering College
              </p>
            </div>
            
            {/* Divider */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="professional-card p-6 rounded-lg text-center group transition-all duration-500"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-40"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-neutral-300 font-light tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Mission Summary */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className={`${spaceGrotesk.className} text-xl md:text-3xl text-blue-100 font-bold mb-6 tracking-tight leading-tight`}>
              “We empower students to build real solutions, not just learn theory.”
            </p>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              Bridging the gap between academic curriculum and industry readiness through peer-driven innovation and hands-on technical excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button 
              onClick={() => document.getElementById('offerings')?.scrollIntoView({ behavior: 'smooth' })}
              className="professional-button-secondary px-8 py-4 rounded-lg font-medium tracking-wide"
            >
              Our Offerings
            </button>
          </div>
        </div>
      </section>


      {/* What We Offer */}
      <section id="offerings" className="py-24 px-4 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className={`${orbitron.className} text-2xl md:text-4xl font-black mb-4 professional-text tracking-wide`}>
              WHAT WE OFFER
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`professional-card p-6 rounded-lg text-center group hover:scale-105 transition-all duration-300`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`w-12 h-12 mx-auto mb-6 rounded bg-gradient-to-br ${offering.color} border ${offering.borderColor} flex items-center justify-center relative`}>
                  <div className="w-3 h-3 bg-blue-400 rotate-45"></div>
                  <div className="absolute inset-0 bg-blue-500/5 animate-pulse rounded"></div>
                </div>
                <h4 className={`${spaceGrotesk.className} text-lg font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors`}>
                  {offering.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Page;

