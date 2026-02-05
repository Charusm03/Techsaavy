"use client";

import { Orbitron, Space_Grotesk } from "next/font/google";
import Image from "next/image";
const orbitron = Orbitron({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function AchievementsPage() {
  return (
    <div className="min-h-screen text-white">
      <main className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`${orbitron.className} text-4xl md:text-6xl font-black mb-4 professional-text tracking-wide`}>
              OUR ACHIEVEMENTS
            </h1>
            <p className={`${spaceGrotesk.className} text-slate-400 text-lg uppercase tracking-widest`}>Milestones of Excellence</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>

          <div className="max-w-4xl mx-auto mb-24 space-y-12">
            {/* Flagship Event 1: Dev Arena */}
            <div className="professional-card rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image 
                    src="/devarena.jpg" 
                    alt="Dev Arena Hackathon" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-600/10"></div>
                </div>
                <div className="p-8 md:p-12">
                  <span className={`${spaceGrotesk.className} text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block`}>Flagship Event</span>
                  <h3 className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-white`}>Dev Arena Hackathon</h3>
                  <div className="space-y-4 text-slate-300 font-light leading-relaxed mb-8 text-lg">
                    <p>
                      Our annual 24-hour national-level hackathon that brings together the brightest minds to solve real-world industrial problems.
                    </p>
                    <p className="text-sm border-l border-blue-500/30 pl-4 py-1 italic text-blue-200">
                      Successfully completed with 500+ participants and innovative solutions presented to industry leaders.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-black/40 rounded-lg border border-blue-500/10">
                      <div className="text-3xl font-bold text-blue-400">100+</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-tighter">Teams</div>
                    </div>
                    <div className="text-center p-6 bg-black/40 rounded-lg border border-blue-500/10">
                      <div className="text-3xl font-bold text-blue-400">₹1L+</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-tighter">Prize Pool</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flagship Event 2: Ignite */}
            <div className="professional-card rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-600/5 to-transparent overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 order-2 md:order-1">
                  <span className={`${spaceGrotesk.className} text-purple-400 font-bold tracking-widest text-xs uppercase mb-4 block`}>Flagship Week</span>
                  <h3 className={`${orbitron.className} text-2xl md:text-4xl font-bold mb-6 text-white`}>IGNITE 2024</h3>
                  <div className="space-y-4 text-slate-300 font-light leading-relaxed mb-8 text-lg">
                    <p>
                      A massive week-long tech extravaganza featuring a diverse set of events that push the boundaries of technical skill and creativity.
                    </p>
                    <p className="text-sm border-l border-purple-500/30 pl-4 py-1 italic text-purple-200">
                      7 Days. 15+ Events. Unlimited Thrill. The ultimate celebration of technology and talent.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-black/40 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold text-purple-400">7</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-tighter">Days</div>
                    </div>
                    <div className="text-center p-6 bg-black/40 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold text-purple-400">15+</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-tighter">Events</div>
                    </div>
                    <div className="text-center p-6 bg-black/40 rounded-lg border border-purple-500/10">
                      <div className="text-3xl font-bold text-purple-400">1000+</div>
                      <div className="text-xs text-neutral-500 uppercase tracking-tighter">Footfall</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden order-1 md:order-2">
                  <Image 
                    src="/ev4.jpg" 
                    alt="Ignite Event" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-purple-600/10"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className={`${orbitron.className} text-2xl md:text-4xl font-bold text-blue-100 mb-4`}>WEEKLY CODING CHALLENGES</h2>
            <p className={`${spaceGrotesk.className} text-slate-400 text-sm uppercase tracking-widest`}>Consistent Learning • Continuous Progress</p>
          </div>

          <div className="max-w-5xl mx-auto mb-24 grid md:grid-cols-2 gap-8">
            {/* Weekly Coding Challenge 1 */}
            <div className="professional-card rounded-xl border border-blue-500/20 bg-slate-900/40 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/Weekly_contest.jpeg" 
                  alt="Weekly Coding Contest" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`${spaceGrotesk.className} text-blue-400 font-bold tracking-widest text-[10px] uppercase mb-2 block`}>Foundation Track</span>
                    <h3 className={`${orbitron.className} text-xl font-bold text-white`}>Contest 1.0</h3>
                  </div>
                  <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] text-blue-300 font-black">1ST YEAR IT</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  Focused on building strong logic and problem-solving skills for 1st year IT students to kickstart their technical journey.
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-blue-300/60 font-bold pt-4 border-t border-blue-500/10">
                  <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    Fri - Sun
                  </div>
                  <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Results on Mon
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Coding Challenge 2 */}
            <div className="professional-card rounded-xl border border-blue-500/20 bg-slate-900/40 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/Weekly_contest2.0.jpeg" 
                  alt="Weekly Coding Contest 2.0" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`${spaceGrotesk.className} text-blue-400 font-bold tracking-widest text-[10px] uppercase mb-2 block`}>Advanced Track</span>
                    <h3 className={`${orbitron.className} text-xl font-bold text-white`}>Contest 2.0</h3>
                  </div>
                  <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] text-blue-300 font-black">2ND YEAR IT</div>
                </div>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  Advanced challenges tailored for 2nd year students to master competitive programming and prepare for technical excellence.
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-blue-300/60 font-bold pt-4 border-t border-blue-500/10">
                  <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    Fri - Sun
                  </div>
                  <div className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    Results on Mon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-20 pt-12 border-t border-blue-500/10">
            <h4 className={`${orbitron.className} text-2xl text-center text-blue-300 mb-16 tracking-widest`}>CLUB TIMELINE</h4>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -translate-y-1/2 -z-10"></div>
              {[
                { year: "2022", event: "Foundation", desc: "The club's journey began with a vision for tech excellence." },
                { year: "2024", event: "Ignite Event", desc: "A major milestone that sparked technical innovation." },
                { year: "2025", event: "Dev Arena", desc: "Our flagship national-level 24h hackathon success." },
                { year: "2026", event: "The Future", desc: "Scaling impact and bridging industry-academic gaps." }
              ].map((milestone, i) => (
                <div key={i} className="flex md:flex-col items-center md:text-center w-full md:w-auto px-8 group">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xl mb-4 group-hover:border-blue-400 group-hover:scale-110 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    {milestone.year}
                  </div>
                  <p className={`${spaceGrotesk.className} text-sm text-blue-300 font-bold uppercase tracking-widest mb-2`}>{milestone.event}</p>
                  <p className="text-xs text-slate-500 max-w-[150px] leading-relaxed">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
