"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "../globals.css";
import TechBackground from "../components/TechBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

const hierarchicalMembers = [
  {
    name: 'Dr. N. Ananthi',
    position: 'Head of Department',
    quote: 'TechSaavy is a beacon for young innovators, driving the future of technology.',
    imageSrc: '/hod.png',
    level: '★★★★★',
    type: 'Leadership',
    skills: ['Strategic Planning', 'Academic Excellence', 'Innovation Leadership']
  },
  {
    name: 'Dr. K. Sundar',
    position: 'Staff Coordinator',
    quote: 'Fostering collaboration and continuous learning at TechSaavy.',
    imageSrc: '/sundar.png',
    level: '★★★★★',
    type: 'Coordinator',
    skills: ['Team Management', 'Technical Guidance', 'Student Mentoring']
  },
  {
    name: 'Mr. Sanjay R',
    position: 'Founder',
    quote: 'Bridging the gap between theory and practice in the tech field.',
    imageSrc: '/sanjay.png',
    level: '★★★★★',
    type: 'Visionary',
    skills: ['Club Foundation', 'Vision Setting', 'Innovation Drive']
  },
  {
    name: 'Mr. Cyril Jude Victor V',
    position: 'President',
    quote: 'Leading TechSaavy to new heights with passion and innovation.',
    imageSrc: '/cyril.png',
    level: '★★★★★',
    type: 'Executive',
    skills: ['Leadership', 'Event Management', 'Student Coordination']
  },
];

const clubMembers = [
  {
    name: 'Mr. Manoj Kanna K',
    position: 'Executive President',
    imageSrc: '/manoj.jpg',
    level: '★★★★',
    type: 'Executive',
    skills: ['Project Management', 'Team Leadership', 'Strategic Planning'],
    quote: 'Leading innovation and collaboration within TechSaavy community.'
  },
  {
    name: 'Ms. Padma Suruthi S',
    position: 'Operations Manager',
    imageSrc: '/padma.jpg',
    level: '★★★★',
    type: 'Technical',
    skills: ['Full Stack Development', 'System Architecture', 'Code Review'],
    quote: 'Building robust technical solutions and mentoring developers.'
  },
  {
    name: 'Mr. Pradeep P',
    position: 'General Secretary',
    imageSrc: '/pradeep.jpg',
    level: '★★★★',
    type: 'Operations',
    skills: ['Event Planning', 'Workshop Management', 'Community Building'],
    quote: 'Creating engaging tech experiences for all members.'
  },
  {
    name: 'Ms. Nandheetha V',
    position: 'Project Head',
    imageSrc: '/nandheetha.jpg',
    level: '★★★★',
    type: 'Marketing',
    skills: ['Social Media', 'Brand Management', 'Content Strategy'],
    quote: 'Amplifying TechSaavy\'s reach in the tech ecosystem.'
  },
  {
    name: 'Mr. Krishna Kumar E',
    position: 'Treasurer',
    imageSrc: '/krishna.jpg',
    level: '★★★★',
    type: 'Finance',
    skills: ['Budget Management', 'Financial Planning', 'Resource Allocation'],
    quote: 'Ensuring financial stability and growth for club initiatives.'
  },
  {
    name: 'Mr. Pravin B H',
    position: 'Editorial Head',
    imageSrc: '/pravin.jpg',
    level: '★★★★',
    type: 'Technical',
    skills: ['React.js', 'Node.js', 'UI/UX Design'],
    quote: 'Crafting beautiful web experiences for TechSaavy projects.'
  },
  {
    name: 'Mr. Gowtham M',
    position: 'Vice President',
    imageSrc: '/gowtham.jpg',
    level: '★★★',
    type: 'Creative',
    skills: ['Technical Writing', 'Video Production', 'Documentation'],
    quote: 'Creating compelling content to share our tech journey.'
  },
  {
    name: 'Mr. Lingesh J',
    position: 'Tech Lead',
    imageSrc: '/lingesh.jpg',
    level: '★★★',
    type: 'Technical',
    skills: ['Machine Learning', 'Python', 'Data Analysis'],
    quote: 'Exploring AI frontiers and implementing smart solutions.'
  },
  {
    name: 'Mr. Pavithran A G',
    position: 'Operation Lead',
    imageSrc: '/pavithran.jpg',
    level: '★★★',
    type: 'Design',
    skills: ['User Experience', 'Prototyping', 'Design Systems'],
    quote: 'Designing intuitive interfaces for better user experiences.'
  },
  {
    name: 'Ms. Ananya G',
    position: 'Event Head',
    imageSrc: '/ananya.jpg',
    level: '★★★',
    type: 'Security',
    skills: ['Cybersecurity', 'Penetration Testing', 'Risk Assessment'],
    quote: 'Protecting our digital assets and educating on security.'
  },
  {
    name: 'Ms. Charu S M',
    position: 'Design Head',
    imageSrc: '/charu.jpg',
    level: '★★★',
    type: 'Analytics',
    skills: ['Data Mining', 'Statistical Analysis', 'Visualization'],
    quote: 'Turning data into actionable insights for club growth.'
  },
  {
    name: 'Mr. Madhu Ram Prakash C',
    position: 'Brand Manager',
    imageSrc: '/maddy.jpg',
    level: '★★★',
    type: 'Technical',
    skills: ['React Native', 'Flutter', 'iOS/Android'],
    quote: 'Building mobile apps that connect our community.'
  },
  {
    name: 'Mr. Sajjad Ahmed T A',
    position: 'Treasury Associate',
    imageSrc: '/sajjad.jpg',
    level: '★★★',
    type: 'Operations',
    skills: ['Community Building', 'Social Engagement', 'Member Relations'],
    quote: 'Fostering connections and building our tech family.'
  },
  {
    name: 'Mr. Varun Muthu Akash B',
    position: 'Secretary',
    imageSrc: '/varun.jpg',
    level: '★★',
    type: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Cloud Platforms'],
    quote: 'Streamlining development and deployment processes.'
  },
  {
    name: 'Ms. Raagavi S',
    position: 'Event Lead',
    imageSrc: '/raagavi.jpg',
    level: '★★',
    type: 'Quality',
    skills: ['Test Automation', 'Quality Assurance', 'Bug Tracking'],
    quote: 'Ensuring excellence in every project we deliver.'
  },
  {
    name: 'Ms. Hasna Fahima',
    position: 'Development Lead',
    imageSrc: '/hasna.jpg',
    level: '★★',
    type: 'Technical',
    skills: ['Node.js', 'Database Design', 'API Development'],
    quote: 'Building scalable server-side solutions.'
  },
  {
    name: 'Mr. Anirudhram G',
    position: 'Ideation Specialist',
    imageSrc: '/anirudh.jpg',
    level: '★★',
    type: 'Research',
    skills: ['Technical Research', 'Innovation', 'Paper Writing'],
    quote: 'Exploring emerging technologies and research opportunities.'
  },
  {
    name: 'Mr. T S Shanmukh Vashtav',
    position: 'Project Analyst',
    imageSrc: '/vashtav.jpg',
    level: '★★',
    type: 'Education',
    skills: ['Technical Training', 'Curriculum Design', 'Mentoring'],
    quote: 'Empowering members through hands-on learning experiences.'
  },
  {
    name: 'Ms. Bhavya Shree G',
    position: 'Design Lead',
    imageSrc: '/bhavya.jpg',
    level: '★★',
    type: 'Product',
    skills: ['Product Strategy', 'Project Management', 'User Research'],
    quote: 'Driving product vision and ensuring user-centric solutions.'
  },
  {
    name: 'Mr. Sundaresan S',
    position: 'Content Creator',
    imageSrc: '/sundaresan.jpg',
    level: '★★',
    type: 'Blockchain',
    skills: ['Smart Contracts', 'Web3', 'Cryptocurrency'],
    quote: 'Exploring decentralized technologies and blockchain applications.'
  },
  {
    name: 'Ms. Radhika M',
    position: 'Public Relation Associate',
    imageSrc: '/radhika.jpg',
    level: '★★',
    type: 'AI',
    skills: ['Artificial Intelligence', 'Deep Learning', 'Neural Networks'],
    quote: 'Pushing the boundaries of AI and machine intelligence.'
  },
  {
    name: 'Mr. Mimith Fredderik R',
    position: 'Treasury Lead',
    imageSrc: '/mimith.jpg',
    level: '★★',
    type: 'Gaming',
    skills: ['Unity', 'C#', 'Game Design'],
    quote: 'Creating immersive gaming experiences and interactive applications.'
  }
];

const getTypeColor = (type: string) => {
  const colors = {
    'Leadership': 'from-yellow-400 to-yellow-600',
    'Executive': 'from-purple-400 to-purple-600',
    'Technical': 'from-blue-400 to-blue-600',
    'Operations': 'from-green-400 to-green-600',
    'Marketing': 'from-pink-400 to-pink-600',
    'Finance': 'from-red-400 to-red-600',
    'Coordinator': 'from-cyan-400 to-cyan-600',
    'Visionary': 'from-orange-400 to-orange-600',
    'Creative': 'from-indigo-400 to-indigo-600',
    'Design': 'from-rose-400 to-rose-600',
    'Security': 'from-slate-400 to-slate-600',
    'Analytics': 'from-emerald-400 to-emerald-600',
    'Infrastructure': 'from-amber-400 to-amber-600',
    'Quality': 'from-lime-400 to-lime-600',
    'Research': 'from-violet-400 to-violet-600',
    'Education': 'from-sky-400 to-sky-600',
    'Product': 'from-teal-400 to-teal-600',
    'Blockchain': 'from-fuchsia-400 to-fuchsia-600',
    'AI': 'from-cyan-600 to-blue-600',
    'Gaming': 'from-purple-600 to-pink-600'
  };
  return colors[type as keyof typeof colors] || 'from-gray-400 to-gray-600';
};

const PokemonCard = ({ member, index, isActive, onClick, zIndex }: {
  member: any;
  index: number;
  isActive: boolean;
  onClick: () => void;
  zIndex: number;
}) => {
  const getTransform = () => {
    if (isActive) return { x: 0, y: 0, rotate: 0, scale: 1.05, opacity: 1 };
    
    const offset = index * 2;
    return {
      x: offset * 0.3,
      y: offset * 0.2,
      rotate: (index - 11) * 0.5,
      scale: 1 - (index * 0.008),
      opacity: 0.95 - (index * 0.03)
    };
  };

  const transform = getTransform();

  return (
    <div
      className="absolute w-80 h-[500px] cursor-pointer"
      style={{
        zIndex,
        transform: `translateX(${transform.x}px) translateY(${transform.y}px) rotate(${transform.rotate}deg) scale(${transform.scale})`,
        opacity: transform.opacity,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transformOrigin: 'center center',
      }}
      onClick={onClick}
    >
      <div className={`relative w-full h-full bg-gradient-to-br ${getTypeColor(member.type)} p-1 rounded-2xl shadow-2xl`}>
        <div className="w-full h-full bg-gray-900 rounded-2xl p-6 flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-white font-bold text-xl">{member.name}</h3>
              <p className="text-cyan-400 text-sm">{member.position}</p>
            </div>
            <div className="text-right">
              <p className="text-yellow-400 text-lg">{member.level}</p>
              <span className={`px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${getTypeColor(member.type)} text-white`}>
                {member.type}
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center mb-4">
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={156}
                height={156}
                className="rounded-full object-cover w-full h-full bg-black"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-avatar.png';
                }}
              />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-cyan-400 font-semibold text-sm mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-1">
              {member.skills.map((skill: string, i: number) => (
                <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-cyan-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 border border-cyan-500/30">
            <p className="text-gray-300 text-sm italic leading-relaxed">
              "{member.quote}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardStack = ({ members }: { members: any[] }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      if (!isAnimating) {
        setActiveCard(prev => (prev + 1) % members.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating, members.length]);

  const handleCardClick = (index: number) => {
    if (isAnimating || index === activeCard) return;
    setIsAnimating(true);
    setActiveCard(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  if (!mounted) {
    return (
      <div className="relative h-[800px] flex items-center justify-center">
        <div className="w-80 h-[500px] bg-gray-800/20 rounded-2xl animate-pulse flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[800px] flex flex-col items-center justify-center">
      <div className="relative w-80 h-[500px] mb-20">
        {members.map((member, index) => (
          <PokemonCard
            key={index}
            member={member}
            index={index}
            isActive={activeCard === index}
            onClick={() => handleCardClick(index)}
            zIndex={activeCard === index ? 100 : members.length - index}
          />
        ))}
      </div>
      
      <div className="flex items-center justify-center space-x-12 mt-12">
        <button
          className="px-6 py-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg"
          onClick={() => handleCardClick((activeCard - 1 + members.length) % members.length)}
          disabled={isAnimating}
        >
          <span className="text-xl">← Previous</span>
        </button>

        <button
          className="px-6 py-4 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg"
          onClick={() => handleCardClick((activeCard + 1) % members.length)}
          disabled={isAnimating}
        >
          <span className="text-xl">Next →</span>
        </button>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm mb-2">
          {activeCard + 1} of {members.length}
        </p>
        <p className="text-cyan-400 font-semibold text-lg">
          {members[activeCard]?.name}
        </p>
        <p className="text-purple-400 text-sm">
          {members[activeCard]?.position}
        </p>
      </div>
    </div>
  );
};

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className={`${inter.className} min-h-screen text-white relative`}>
      <TechBackground />
      
      <div className="relative z-10 min-h-screen py-12 px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tech-text">
            About TechSaavy
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 max-w-4xl mx-auto">
            Empowering the next generation of technologists through innovation, collaboration, and excellence
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="cyber-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To bridge the gap between academic learning and industry requirements by providing 
                hands-on experience in cutting-edge technologies, fostering innovation, and building 
                a community of passionate tech enthusiasts.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We strive to create an environment where students can explore, learn, and contribute 
                to the ever-evolving world of technology.
              </p>
            </div>
            
            <div className="cyber-card p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                To be the leading technical club that shapes future technology leaders and innovators, 
                contributing significantly to the advancement of the IT industry.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a community where creativity meets technology, and every member becomes 
                a catalyst for positive change in the digital world.
              </p>
            </div>
          </div>
        </div>

        {/* College Info Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="cyber-card p-10 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-8 tech-text">
              Easwari Engineering College
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="cyber-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Established</h3>
                <p className="text-3xl font-bold text-white">1996</p>
                <p className="text-gray-400 mt-2">Years of Excellence</p>
              </div>
              <div className="cyber-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">IT Department</h3>
                <p className="text-3xl font-bold text-white">600+</p>
                <p className="text-gray-400 mt-2">Students Enrolled</p>
              </div>
              <div className="cyber-card p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Faculty</h3>
                <p className="text-3xl font-bold text-white">40+</p>
                <p className="text-gray-400 mt-2">Expert Professors</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Located in Chennai, Easwari Engineering College stands as a premier institution for technical education. 
              The Information Technology Department has been at the forefront of innovation, 
              nurturing talented individuals who go on to make significant contributions to the tech industry.
            </p>
          </div>
        </div>

        {/* Leadership Section - Pokemon Cards */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 tech-text">
            Meet Our Leaders
          </h2>
          
          <div className="flex justify-center">
            <CardStack members={hierarchicalMembers} />
          </div>
        </div>

        {/* Club Members Section - Pokemon Cards (22 members) */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 tech-text">
            Our Club Members
          </h2>
          <p className="text-center text-gray-300 mb-8 text-lg">
            Meet our diverse team of 22 talented individuals driving innovation across various tech domains
          </p>
          
          <div className="flex justify-center">
            <CardStack members={clubMembers} />
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 tech-text">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Innovation</h3>
              <p className="text-gray-300">
                We foster creative thinking and encourage breakthrough solutions to real-world problems.
              </p>
            </div>
            <div className="cyber-card p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork and collective intelligence to achieve excellence.
              </p>
            </div>
            <div className="cyber-card p-8 rounded-lg text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Learning</h3>
              <p className="text-gray-300">
                We promote continuous learning and adaptation to stay ahead in the rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}