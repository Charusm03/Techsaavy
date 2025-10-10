"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../globals.css";
import TechBackground from "../components/TechBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Events() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof events)[0]>(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    {
      imgSrc: "/ev1.png",
      title: "AI/ML Workshop Series",
      description:
        "Hands-on workshop on Machine Learning fundamentals and practical implementations",
      participants: "1-2",
      amount: "₹150/person",
      prize: "Certificates and project showcase opportunity",
      venue: "Hi-Tech Hall-1, IT Block",
      date: "December 15, 2024",
      time: "2:00 PM - 5:00 PM",
      registrationLink: "https://forms.google.com/ai-ml-workshop",
      isClosed: false,
      status: "Registration Open",
      category: "Workshop",
      type: "upcoming",
    },
    {
      imgSrc: "/ev2.png",
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
      category: "Competition",
      type: "upcoming",
    },
    {
      imgSrc: "/ev3.png",
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
      category: "Bootcamp",
      type: "ongoing",
    },
    {
      imgSrc: "/ev4.png",
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
      category: "Seminar",
      type: "upcoming",
    },
    {
      imgSrc: "/ev5.png",
      title: "Hackathon 2024",
      description: "Build innovative solutions in 48 hours",
      participants: "2-4",
      amount: "₹300/team",
      prize: "₹25,000 total prize pool",
      venue: "Innovation Lab",
      date: "March 15-17, 2024",
      time: "48 hours",
      registrationLink: null,
      isClosed: true,
      status: "Completed",
      category: "Competition",
      type: "past",
    },
  ];

  const categories = [
    "all",
    "Workshop",
    "Competition",
    "Bootcamp",
    "Seminar",
  ];

  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  const stats = [
    { number: "50+", label: "Events Conducted", icon: "📅" },
    { number: "2000+", label: "Participants", icon: "👥" },
    { number: "₹1L+", label: "Prize Money", icon: "🏆" },
    { number: "25+", label: "Industry Partners", icon: "🤝" },
  ];

  return (
    <div className={`${inter.className} min-h-screen text-white relative`}>
      <TechBackground />

      <div className="relative z-10 min-h-screen py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tech-text">
            Events & Showcase
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto mb-8">
            Discover our exciting workshops, competitions, and tech talks that shape
            the future
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="cyber-card p-4 rounded-lg text-center animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-6xl mx-auto mb-12 animate-fadeInUp">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`cyber-button rounded-lg text-sm ${
                  filter === category ? "bg-cyan-600 border-cyan-400" : ""
                }`}
              >
                {category === "all" ? "All Events" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="cyber-card rounded-lg overflow-hidden cursor-pointer group animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Event Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      event.category === "Workshop"
                        ? "bg-blue-600 text-white"
                        : event.category === "Competition"
                        ? "bg-green-600 text-white"
                        : event.category === "Bootcamp"
                        ? "bg-purple-600 text-white"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    {event.category}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      event.type === "ongoing"
                        ? "bg-yellow-600 text-white"
                        : event.type === "upcoming" && !event.isClosed
                        ? "bg-green-600 text-white"
                        : event.type === "past"
                        ? "bg-gray-600 text-white"
                        : "bg-red-600 text-white"
                    } ${event.type === "ongoing" ? "animate-pulse" : ""}`}
                  >
                    {event.status}
                  </span>
                </div>

                {/* Event Image/Icon */}
                <div className="aspect-[4/5] matrix-bg flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={event.imgSrc}
                    alt={event.title}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />

                  {/* Animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-cyan-400 mb-2 line-clamp-2 group-hover:text-white transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-xs text-gray-400 mb-4">
                    <p>📅 {event.date}</p>
                    <p>⏰ {event.time}</p>
                    <p>💰 {event.amount}</p>
                  </div>

                  <button
                    className={`w-full text-sm rounded py-2 px-4 transition-all ${
                      event.isClosed
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "cyber-button"
                    }`}
                    disabled={event.isClosed}
                  >
                    {event.isClosed ? "Event Completed" : "View Details"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fadeInUp">
          <div className="cyber-card p-12 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 tech-text">
              Join Our Next Event
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Be part of our vibrant tech community and enhance your skills through
              hands-on learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button rounded-lg">
                Register for Events
              </button>
              <button
                className="cyber-button rounded-lg"
                style={{ borderColor: "#ff00ff", color: "#ff00ff" }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 p-4 z-50 backdrop-blur-sm">
          <div className="cyber-card p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block ${
                    selectedEvent.category === "Workshop"
                      ? "bg-blue-600 text-white"
                      : selectedEvent.category === "Competition"
                      ? "bg-green-600 text-white"
                      : selectedEvent.category === "Bootcamp"
                      ? "bg-purple-600 text-white"
                      : "bg-orange-600 text-white"
                  }`}
                >
                  {selectedEvent.category}
                </span>
                <h2 className="tech-text text-2xl font-bold">
                  {selectedEvent.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors"
              >
                ×
              </button>
            </div>

            {/* Event Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src={selectedEvent.imgSrc}
                alt={selectedEvent.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
            </div>

            <p className="text-gray-300 mb-6">{selectedEvent.description}</p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
              <div className="space-y-3">
                <p>
                  <strong className="text-cyan-400">📅 Date:</strong>{" "}
                  {selectedEvent.date}
                </p>
                <p>
                  <strong className="text-cyan-400">⏰ Time:</strong>{" "}
                  {selectedEvent.time}
                </p>
                <p>
                  <strong className="text-cyan-400">👥 Participants:</strong>{" "}
                  {selectedEvent.participants}
                </p>
              </div>
              <div className="space-y-3">
                <p>
                  <strong className="text-cyan-400">💰 Fee:</strong>{" "}
                  {selectedEvent.amount}
                </p>
                <p>
                  <strong className="text-cyan-400">🏆 Rewards:</strong>{" "}
                  {selectedEvent.prize}
                </p>
                <p>
                  <strong className="text-cyan-400">📍 Venue:</strong>{" "}
                  {selectedEvent.venue}
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                className="flex-1 px-4 py-3 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-all"
                onClick={() => setSelectedEvent(null)}
              >
                Close
              </button>
              {selectedEvent.registrationLink && !selectedEvent.isClosed && (
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
