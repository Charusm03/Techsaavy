"use client";

import { Orbitron, Space_Grotesk } from "next/font/google";
import Image from "next/image";
const orbitron = Orbitron({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function GalleryPage() {
  return (
    <div className="min-h-screen text-white">
      <main className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`${orbitron.className} text-4xl md:text-6xl font-black mb-4 professional-text tracking-wide`}>
              EVENTS SHOWCASE
            </h1>
            <p className={`${spaceGrotesk.className} text-slate-400 text-lg uppercase tracking-widest`}>A legacy of innovation and leadership</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "AI/ML Workshop Series",
                description: "Hands-on workshop on Machine Learning fundamentals and practical implementations",
                category: "Workshop",
                date: "Dec 15, 2024",
                venue: "Hi-Tech Hall-1, IT Block",
                image: "/ev1.png"
              },
              {
                title: "TechSaavy CodeSprint",
                description: "24-hour coding marathon with real-world problem statements and industry mentorship",
                category: "Competition",
                date: "Dec 20-21, 2024",
                venue: "Computer Lab Complex",
                image: "/ev2.png"
              },
              {
                title: "Web Development Bootcamp",
                description: "Intensive bootcamp covering modern full-stack development using the MERN stack",
                category: "Bootcamp",
                date: "Ongoing",
                venue: "Online + Lab Sessions",
                image: "/ev3.png"
              },
              {
                title: "Tech Talk: Industry Insights",
                description: "Guest speakers from top tech companies sharing modern industry trends and career advice",
                category: "Seminar",
                date: "Jan 10, 2025",
                venue: "TRP Auditorium",
                image: "/ev4.png"
              },
              {
                title: "Dev Arena Hackathon",
                description: "Our flagship 24-hour national-level hackathon solving industrial challenges",
                category: "Competition",
                date: "Annual Event",
                venue: "Innovation Lab",
                image: "/devarena.jpg"
              },
              {
                title: "UI/UX Design Session",
                description: "Exploring modern design principles and user experience research methodologies",
                category: "Workshop",
                date: "Feb 05, 2024",
                venue: "Design Studio",
                image: "/ev5.png"
              }
            ].map((event, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden professional-card border border-blue-500/10 flex flex-col h-full hover:border-blue-500/40 transition-all duration-500 bg-[#0a0f1d]">
                <div className="aspect-video relative overflow-hidden flex items-center justify-center">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 group-hover:scale-110 transition-transform z-10">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] text-blue-400 font-bold uppercase tracking-widest backdrop-blur-sm">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col relative">
                  <h4 className={`${spaceGrotesk.className} text-blue-300 font-bold text-xl mb-4 group-hover:text-white transition-colors`}>{event.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-light mb-8 flex-grow">
                    {event.description}
                  </p>
                  
                  <div className="pt-6 border-t border-blue-500/10 flex justify-between items-center text-[10px] uppercase tracking-[0.1em] text-slate-500 font-black">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500/30 rounded-full mr-2"></span>
                      {event.venue}
                    </span>
                    <span className="text-blue-400">{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-12 border-t border-blue-500/10">
            <p className={`${spaceGrotesk.className} text-slate-500 text-sm italic`}>
              More exciting events and technical visuals coming soon...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
