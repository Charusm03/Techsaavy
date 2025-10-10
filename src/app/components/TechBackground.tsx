'use client';

import { useEffect, useState } from 'react';

export default function TechBackground() {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    speed: number;
    direction: number;
  }>>([]);

  useEffect(() => {
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      // Generate moving particles
      const newParticles = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        color: ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080'][Math.floor(Math.random() * 5)],
        speed: Math.random() * 1.5 + 0.5,
        direction: Math.random() * Math.PI * 2,
      }));
      setParticles(newParticles);

      // Animate particles
      const animateParticles = () => {
        setParticles(prev => prev.map(particle => {
          let newX = particle.x + Math.cos(particle.direction) * particle.speed;
          let newY = particle.y + Math.sin(particle.direction) * particle.speed;
          
          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth) {
            particle.direction = Math.PI - particle.direction;
            newX = Math.max(0, Math.min(window.innerWidth, newX));
          }
          if (newY <= 0 || newY >= window.innerHeight) {
            particle.direction = -particle.direction;
            newY = Math.max(0, Math.min(window.innerHeight, newY));
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        }));
      };

      const interval = setInterval(animateParticles, 50);
      return () => clearInterval(interval);
    }
  }, []);

  // Static geometric shapes for server-side rendering
  const geometricShapes = [
    { left: '10%', top: '20%', width: '40px', height: '40px', rotation: '45deg', delay: '0s', duration: '4s' },
    { left: '80%', top: '15%', width: '30px', height: '30px', rotation: '120deg', delay: '1s', duration: '5s' },
    { left: '30%', top: '70%', width: '50px', height: '50px', rotation: '180deg', delay: '2s', duration: '6s' },
    { left: '70%', top: '80%', width: '35px', height: '35px', rotation: '270deg', delay: '0.5s', duration: '4.5s' },
    { left: '50%', top: '40%', width: '25px', height: '25px', rotation: '90deg', delay: '1.5s', duration: '5.5s' },
    { left: '20%', top: '60%', width: '45px', height: '45px', rotation: '225deg', delay: '2.5s', duration: '7s' },
    { left: '90%', top: '30%', width: '28px', height: '28px', rotation: '315deg', delay: '0.8s', duration: '4.2s' },
    { left: '15%', top: '85%', width: '38px', height: '38px', rotation: '135deg', delay: '1.8s', duration: '5.8s' },
  ];

  // Floating lines data
  const floatingLines = [
    { x1: '0%', y1: '25%', x2: '100%', y2: '30%', delay: '0s' },
    { x1: '0%', y1: '60%', x2: '100%', y2: '55%', delay: '2s' },
    { x1: '0%', y1: '85%', x2: '100%', y2: '80%', delay: '4s' },
  ];

  return (
    <>
      {/* Main animated tech background */}
      <div className="tech-bg" />
      
      {/* Animated particles - only on client side */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
                opacity: 0.8,
                animation: `pulse 2s ease-in-out infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Animated circuit lines */}
      <div className="fixed inset-0 pointer-events-none z-[-8] overflow-hidden">
        <svg className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="circuit1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#00ffff', stopOpacity: 0}} />
              <stop offset="50%" style={{stopColor: '#00ffff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ff00ff', stopOpacity: 0}} />
            </linearGradient>
            <linearGradient id="circuit2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#ff00ff', stopOpacity: 0}} />
              <stop offset="50%" style={{stopColor: '#ff00ff', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: '#ffff00', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          
          {/* Moving horizontal lines */}
          {floatingLines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={i % 2 === 0 ? "url(#circuit1)" : "url(#circuit2)"}
              strokeWidth="2"
              className="animate-pulse"
              style={{ 
                animationDelay: line.delay,
                animationDuration: '3s'
              }}
            />
          ))}
          
          {/* Animated circuit paths */}
          <path
            d="M0,100 Q200,50 400,100 T800,100"
            stroke="url(#circuit1)"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          <path
            d="M0,300 Q250,200 500,300 T1000,300"
            stroke="url(#circuit2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '5s' }}
          />
        </svg>
      </div>

      {/* Floating geometric shapes with enhanced animations */}
      <div className="fixed inset-0 pointer-events-none z-[-6]">
        {geometricShapes.map((shape, i) => (
          <div
            key={i}
            className="absolute border-2 border-cyan-400 opacity-20"
            style={{
              left: shape.left,
              top: shape.top,
              width: shape.width,
              height: shape.height,
              transform: `rotate(${shape.rotation})`,
              animation: `floatRotate ${shape.duration} ease-in-out infinite ${shape.delay}, 
                         glow 3s ease-in-out infinite ${shape.delay}`,
            }}
          />
        ))}
      </div>

      {/* Moving grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-7] opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 15s linear infinite',
        }}
      />

      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-4]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
              animation: `floatUp 6s ease-in-out infinite ${i * 0.5}s, 
                         pulse 4s ease-in-out infinite ${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}