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
      // Generate subtle moving particles with professional blue colors
      const newParticles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        color: ['#3b82f6', '#60a5fa', '#2563eb', '#1e40af'][Math.floor(Math.random() * 4)],
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * Math.PI * 2,
      }));
      setParticles(newParticles);

      // Animate particles with slower, more professional movement
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

      const interval = setInterval(animateParticles, 60);
      return () => clearInterval(interval);
    }
  }, []);

  // Professional geometric shapes
  const geometricShapes = [
    { left: '10%', top: '20%', width: '35px', height: '35px', rotation: '45deg', delay: '0s', duration: '6s' },
    { left: '80%', top: '15%', width: '28px', height: '28px', rotation: '120deg', delay: '1.5s', duration: '7s' },
    { left: '30%', top: '70%', width: '40px', height: '40px', rotation: '180deg', delay: '3s', duration: '8s' },
    { left: '70%', top: '80%', width: '32px', height: '32px', rotation: '270deg', delay: '1s', duration: '6.5s' },
    { left: '50%', top: '40%', width: '22px', height: '22px', rotation: '90deg', delay: '2s', duration: '7.5s' },
    { left: '20%', top: '60%', width: '38px', height: '38px', rotation: '225deg', delay: '3.5s', duration: '9s' },
  ];

  // Subtle floating lines
  const floatingLines = [
    { x1: '0%', y1: '30%', x2: '100%', y2: '32%', delay: '0s' },
    { x1: '0%', y1: '65%', x2: '100%', y2: '63%', delay: '3s' },
  ];

  return (
    <>
      {/* Main animated professional background */}
      <div className="tech-bg" />
      
      {/* Subtle animated particles - only on client side */}
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
                boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
                opacity: 0.4,
                animation: `pulse 4s ease-in-out infinite ${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Subtle circuit lines */}
      <div className="fixed inset-0 pointer-events-none z-[-8] overflow-hidden">
        <svg className="w-full h-full opacity-15">
          <defs>
            <linearGradient id="professionalCircuit1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0}} />
              <stop offset="50%" style={{stopColor: '#3b82f6', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: 0}} />
            </linearGradient>
            <linearGradient id="professionalCircuit2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 0}} />
              <stop offset="50%" style={{stopColor: '#60a5fa', stopOpacity: 0.6}} />
              <stop offset="100%" style={{stopColor: '#93c5fd', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          
          {/* Subtle horizontal lines */}
          {floatingLines.map((line, i) => (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={i % 2 === 0 ? "url(#professionalCircuit1)" : "url(#professionalCircuit2)"}
              strokeWidth="1.5"
              className="animate-pulse"
              style={{ 
                animationDelay: line.delay,
                animationDuration: '5s'
              }}
            />
          ))}
          
          {/* Subtle curved paths */}
          <path
            d="M0,100 Q200,70 400,100 T800,100"
            stroke="url(#professionalCircuit1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          <path
            d="M0,300 Q250,250 500,300 T1000,300"
            stroke="url(#professionalCircuit2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '3s', animationDuration: '7s' }}
          />
        </svg>
      </div>

      {/* Professional geometric shapes with subtle animations */}
      <div className="fixed inset-0 pointer-events-none z-[-6]">
        {geometricShapes.map((shape, i) => (
          <div
            key={i}
            className="absolute border border-blue-500 opacity-10"
            style={{
              left: shape.left,
              top: shape.top,
              width: shape.width,
              height: shape.height,
              transform: `rotate(${shape.rotation})`,
              animation: `floatRotate ${shape.duration} ease-in-out infinite ${shape.delay}, 
                         professionalGlow 5s ease-in-out infinite ${shape.delay}`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-7] opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Subtle floating orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-4]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-900/10 to-indigo-900/10"
            style={{
              left: `${15 + i * 18}%`,
              top: `${25 + (i % 3) * 20}%`,
              width: `${50 + i * 15}px`,
              height: `${50 + i * 15}px`,
              animation: `floatUp 8s ease-in-out infinite ${i * 0.8}s, 
                         pulse 6s ease-in-out infinite ${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

