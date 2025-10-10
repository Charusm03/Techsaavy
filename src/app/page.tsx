'use client'; // This is a client component
import { useEffect, useState } from 'react';
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import TechBackground from "./components/TechBackground";

const inter = Inter({ subsets: ["latin"] });

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof upcomingEvents)[0]>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const upcomingEvents = [
    {
      imgSrc: "/upcoming-event1.png",
      title: "AI/ML Workshop Series",
      description: "Hands-on workshop on Machine Learning fundamentals and practical implementations",
      participants: "1-2",
      amount: "₹150/person",
      prize: "Certificates and project showcase opportunity",
      venue: "Hi-Tech Hall-1, IT Block",
      date: "December 15, 2024",
      time: "2:00 PM - 5:00 PM",
      registrationLink: "https://forms.google.com/ai-ml-workshop",
      isClosed: false,
      status: "Registration Open",
      category: "Workshop"
    },
    {
      imgSrc: "/upcoming-event2.png",
      title: "TechSaavy CodeSprint 2024",
      description: "24-hour coding marathon with real-world problem statements",
      participants: "2-4",
      amount: "₹200/team",
      prize: "₹10,000 cash prize + internship opportunities",
      venue: "Computer Lab Complex",
      date: "December 20-21, 2024",
      time: "9:00 AM onwards",
      registrationLink: "https://forms.google.com/codesprint-2024",
      isClosed: false,
      status: "Early Bird Discount",
      category: "Competition"
    },
    {
      imgSrc: "/ongoing-event1.png",
      title: "Web Development Bootcamp",
      description: "Intensive 4-week bootcamp covering MERN stack development",
      participants: "Individual",
      amount: "₹500",
      prize: "Industry recognized certificate",
      venue: "Online + Lab Sessions",
      date: "Ongoing until Dec 30, 2024",
      time: "Flexible timing",
      registrationLink: "https://forms.google.com/web-bootcamp",
      isClosed: false,
      status: "Ongoing - Join Anytime",
      category: "Bootcamp"
    },
    {
      imgSrc: "/upcoming-event3.png",
      title: "Tech Talk: Industry Insights",
      description: "Guest speakers from top tech companies sharing industry trends",
      participants: "Open to all",
      amount: "Free",
      prize: "Networking opportunities + swag",
      venue: "TRP Auditorium",
      date: "January 10, 2025",
      time: "3:00 PM - 6:00 PM",
      registrationLink: "https://forms.google.com/tech-talk",
      isClosed: false,
      status: "Free Registration",
      category: "Seminar"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Events Conducted" },
    { number: "25+", label: "Industry Partners" },
    { number: "100+", label: "Projects Completed" }
  ];

  return (
    <div className={`${inter.className} min-h-screen text-white relative`}>
      <TechBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto animate-fadeInUp">
          <div className="mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 animate-glow">
                <div className="w-full h-full rounded-full bg-black overflow-hidden flex items-center justify-center">
                  <Image
                    src="/techsaavy.svg"
                    alt="TechSaavy Logo"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tech-text animate-slideInLeft">
              TechSaavy
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-2 animate-slideInRight">
              Information Technology Department
            </p>
            <p className="text-lg md:text-xl text-purple-400 mb-8 animate-fadeInUp">
              Easwari Engineering College
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="cyber-card p-4 rounded-lg text-center animate-scaleIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 animate-fadeInUp">
            Empowering future technologists through innovation, collaboration, and cutting-edge learning experiences. 
            Join us in shaping the digital tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link href="/events">
              <button className="cyber-button rounded-lg">
                Explore Events
              </button>
            </Link>
            <Link href="/about">
              <button className="cyber-button rounded-lg" style={{borderColor: '#ff00ff', color: '#ff00ff'}}>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 tech-text animate-fadeInUp">About TechSaavy</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                TechSaavy is the premier technical club of the Information Technology Department at 
                Easwari Engineering College. We bridge the gap between academic learning and 
                industry requirements through hands-on workshops, competitions, and collaborative projects.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our community of passionate students and faculty work together to explore emerging 
                technologies, develop innovative solutions, and prepare for successful careers in tech.
              </p>
            </div>
            
            <div className="animate-slideInRight">
              <div className="cyber-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">
                  Easwari Engineering College - IT Department
                </h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Established</h4>
                    <p className="text-gray-300">1996</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Students</h4>
                    <p className="text-gray-300">600+</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Faculty</h4>
                    <p className="text-gray-300">40+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 tech-text animate-fadeInUp">
            Upcoming & Ongoing Events
          </h2>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="cyber-card rounded-lg overflow-hidden cursor-pointer group animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Event Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.category === 'Workshop' ? 'bg-blue-600 text-white' :
                    event.category === 'Competition' ? 'bg-green-600 text-white' :
                    event.category === 'Bootcamp' ? 'bg-purple-600 text-white' :
                    'bg-orange-600 text-white'
                  }`}>
                    {event.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    event.status.includes('Ongoing') ? 'bg-yellow-600 text-white' :
                    event.status.includes('Free') ? 'bg-green-600 text-white' :
                    'bg-red-600 text-white'
                  } animate-pulse`}>
                    {event.status}
                  </span>
                </div>

                <div className="aspect-[4/5] matrix-bg flex items-center justify-center relative">
                  <div className="text-6xl opacity-30 group-hover:opacity-60 transition-all duration-300">
                    {event.category === 'Workshop' ? '🛠️' :
                     event.category === 'Competition' ? '🏆' :
                     event.category === 'Bootcamp' ? '💻' : '🎤'}
                  </div>
                  
                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-cyan-400 mb-2 line-clamp-2 group-hover:text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-1 text-xs text-gray-400 mb-4">
                    <p>📅 {event.date}</p>
                    <p>⏰ {event.time}</p>
                    <p>💰 {event.amount}</p>
                  </div>

                  <button className="w-full cyber-button text-sm rounded">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4 tech-text">Ready to Join TechSaavy?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Become part of our vibrant community and accelerate your tech journey with like-minded peers and industry experts.
            </p>
            <div className="space-x-4">
              <button className="cyber-button rounded-lg">
                Join Now
              </button>
              <button className="cyber-button rounded-lg" style={{borderColor: '#ff00ff', color: '#ff00ff'}}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 p-4 z-50 backdrop-blur-sm">
          <div className="cyber-card p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block ${
                  selectedEvent.category === 'Workshop' ? 'bg-blue-600 text-white' :
                  selectedEvent.category === 'Competition' ? 'bg-green-600 text-white' :
                  selectedEvent.category === 'Bootcamp' ? 'bg-purple-600 text-white' :
                  'bg-orange-600 text-white'
                }`}>
                  {selectedEvent.category}
                </span>
                <h2 className="tech-text text-2xl font-bold">{selectedEvent.title}</h2>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            <p className="text-gray-300 mb-6">{selectedEvent.description}</p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
              <div className="space-y-3">
                <p><strong className="text-cyan-400">📅 Date:</strong> {selectedEvent.date}</p>
                <p><strong className="text-cyan-400">⏰ Time:</strong> {selectedEvent.time}</p>
                <p><strong className="text-cyan-400">👥 Participants:</strong> {selectedEvent.participants}</p>
              </div>
              <div className="space-y-3">
                <p><strong className="text-cyan-400">💰 Fee:</strong> {selectedEvent.amount}</p>
                <p><strong className="text-cyan-400">🏆 Rewards:</strong> {selectedEvent.prize}</p>
                <p><strong className="text-cyan-400">📍 Venue:</strong> {selectedEvent.venue}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                className="flex-1 px-4 py-3 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-all"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
              <a 
                href={selectedEvent.registrationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full cyber-button rounded-lg">
                  Register Now
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
