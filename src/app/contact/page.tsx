"use client";

import { Orbitron, Space_Grotesk } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white">
      <main className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className={`${orbitron.className} text-4xl md:text-6xl font-black mb-4 professional-text tracking-wide`}>
              CONNECT WITH US
            </h1>
            <p className={`${spaceGrotesk.className} text-slate-400 text-lg uppercase tracking-widest`}>Let's build the future together</p>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className={`${orbitron.className} text-2xl text-blue-300 mb-6 uppercase tracking-widest`}>Get In Touch</h2>
                <p className={`${spaceGrotesk.className} text-slate-300 leading-relaxed font-light text-lg mb-8`}>
                  Have questions about our events, membership, or collaborations? We're here to help you solve real-world problems.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 rounded-xl border border-blue-500/30 flex items-center justify-center text-blue-400 bg-blue-500/5 group-hover:border-blue-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Official Email</p>
                      <p className="text-lg text-blue-200 font-medium">techsaavyiteec@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 group">
                    <div className="w-14 h-14 rounded-xl border border-blue-500/30 flex items-center justify-center text-blue-400 bg-blue-500/5 group-hover:border-blue-500 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="text-lg text-blue-200 font-medium">IT Block, Easwari Engineering College</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-blue-500/10">
                <p className="text-sm text-slate-500 italic">"Technology is best when it brings people together."</p>
              </div>
            </div>

            <div className="professional-card p-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 shadow-[0_0_50px_rgba(59,130,246,0.05)]">
              <h3 className={`${spaceGrotesk.className} text-xl font-bold mb-8 text-blue-300 uppercase tracking-widest`}>Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="bg-black/50 border border-blue-500/20 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="bg-black/50 border border-blue-500/20 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Subject</label>
                  <input type="text" placeholder="Collaboration / Membership / Inquiry" className="bg-black/50 border border-blue-500/20 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-1">Your Message</label>
                  <textarea placeholder="Tell us how we can help..." rows={5} className="bg-black/50 border border-blue-500/20 rounded-xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors w-full resize-none"></textarea>
                </div>
                <button type="button" className="professional-button w-full py-4 rounded-xl font-black tracking-[0.2em] uppercase text-xs shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  Dispatch Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
