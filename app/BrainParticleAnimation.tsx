"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  pulsing: number;
  pulseSpeed: number;
  connections: Connection[];
}

interface Connection {
  particle: Particle;
  strength: number;
  alpha: number;
  pulsing: number;
}

interface BrainParticleAnimationProps {
  width?: number;
  height?: number;
  particleCount?: number;
  connectionDistance?: number;
  backgroundColor?: string;
  particleColor?: string;
  connectionColor?: string;
  speed?: number;
  pulseSpeed?: number;
  maxConnections?: number;
  className?: string;
}

const BrainParticleAnimation: React.FC<BrainParticleAnimationProps> = ({
  width = 1000,
  height = 1000,
  particleCount = 80,
  connectionDistance = 120,
  backgroundColor = 'rgba(5, 15, 35, 1)',
  particleColor = '#00d4ff',
  connectionColor = '#0099cc',
  speed = 0.5,
  pulseSpeed = 0.02,
  maxConnections = 5,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  // Initialize particles with brain-like distribution
  const initParticles = useCallback(() => {
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      // Create clusters to simulate brain regions
      const clusterX = Math.random() * width;
      const clusterY = Math.random() * height;

      // Add some randomness around cluster centers
      const offsetX = (Math.random() - 0.5) * 100;
      const offsetY = (Math.random() - 0.5) * 100;

      const particle: Particle = {
        x: Math.max(20, Math.min(width - 20, clusterX + offsetX)),
        y: Math.max(20, Math.min(height - 20, clusterY + offsetY)),
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 3 + 1,
        alpha: Math.random() * 0.8 + 0.2,
        pulsing: Math.random() * Math.PI * 2,
        pulseSpeed: pulseSpeed + Math.random() * 0.01,
        connections: []
      };

      particles.push(particle);
    }

    return particles;
  }, [width, height, particleCount, speed, pulseSpeed]);

  // Calculate distance between two particles
  const getDistance = (p1: Particle, p2: Particle): number => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Update particle connections (neural network style)
  const updateConnections = (particles: Particle[]) => {
    particles.forEach(particle => {
      particle.connections = [];
    });

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      let connectionCount = 0;

      for (let j = i + 1; j < particles.length && connectionCount < maxConnections; j++) {
        const otherParticle = particles[j];
        const distance = getDistance(particle, otherParticle);

        if (distance < connectionDistance) {
          const strength = 1 - (distance / connectionDistance);
          const connection: Connection = {
            particle: otherParticle,
            strength,
            alpha: strength * 0.6,
            pulsing: 0
          };

          particle.connections.push(connection);
          connectionCount++;
        }
      }
    }
  };

  // Update particle positions and properties
  const updateParticles = (particles: Particle[]) => {
    particles.forEach(particle => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Bounce off walls
      if (particle.x <= particle.radius || particle.x >= width - particle.radius) {
        particle.vx *= -1;
      }
      if (particle.y <= particle.radius || particle.y >= height - particle.radius) {
        particle.vy *= -1;
      }

      // Keep within bounds
      particle.x = Math.max(particle.radius, Math.min(width - particle.radius, particle.x));
      particle.y = Math.max(particle.radius, Math.min(height - particle.radius, particle.y));

      // Update pulsing animation
      particle.pulsing += particle.pulseSpeed;

      // Update connection pulsing
      particle.connections.forEach(connection => {
        connection.pulsing += 0.03;
      });
    });
  };

  function safeRadius(r: number, min: number = 0.1) {
    return Math.max(min, r);
  }

  // Draw particles
  const drawParticles = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    particles.forEach(particle => {
      const pulseAlpha = Math.sin(particle.pulsing) * 0.3 + 0.7;
      const glowRadius = particle.radius + Math.sin(particle.pulsing) * 2;

    

      // Draw glow effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, safeRadius(glowRadius * 2)
      );
      gradient.addColorStop(0, `${particleColor}${Math.floor(pulseAlpha * particle.alpha * 255).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(0.5, `${particleColor}${Math.floor(pulseAlpha * particle.alpha * 100).toString(16).padStart(2, '0')}`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, safeRadius(glowRadius * 2), 0, Math.PI * 2);
      ctx.fill();

      // Draw core particle
      ctx.fillStyle = `${particleColor}${Math.floor(pulseAlpha * particle.alpha * 255).toString(16).padStart(2, '0')}`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Draw connections between particles
  const drawConnections = (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    particles.forEach(particle => {
      particle.connections.forEach(connection => {
        const pulseAlpha = Math.sin(connection.pulsing) * 0.4 + 0.6;
        const alpha = connection.alpha * pulseAlpha;

        // Create gradient for connection line
        const gradient = ctx.createLinearGradient(
          particle.x, particle.y,
          connection.particle.x, connection.particle.y
        );

        const colorWithAlpha = `${connectionColor}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        gradient.addColorStop(0, colorWithAlpha);
        gradient.addColorStop(0.5, `${connectionColor}${Math.floor(alpha * 180).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, colorWithAlpha);

        // Draw connection line with varying thickness
        const thickness = connection.strength * 2 + 0.5;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(connection.particle.x, connection.particle.y);
        ctx.stroke();

        // Add neural pulse effect
        if (Math.sin(connection.pulsing) > 0.8) {
          const midX = (particle.x + connection.particle.x) / 2;
          const midY = (particle.y + connection.particle.y) / 2;

          ctx.fillStyle = `${particleColor}aa`;
          ctx.beginPath();
          ctx.arc(midX, midY, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    });
  };

  // Main animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isAnimating) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with fade effect for trails
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const particles = particlesRef.current;

    // Update particle system
    updateParticles(particles);
    updateConnections(particles);

    // Draw everything
    drawConnections(ctx, particles);
    drawParticles(ctx, particles);

    animationRef.current = requestAnimationFrame(animate);
  }, [width, height, backgroundColor, isAnimating, connectionDistance, maxConnections, particleColor, connectionColor]);

  // Handle mouse interaction
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Add attraction/repulsion effect to nearby particles
    particlesRef.current.forEach(particle => {
      const dx = mouseX - particle.x;
      const dy = mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        const force = (100 - distance) * 0.0001;
        particle.vx += dx * force;
        particle.vy += dy * force;
      }
    });
  }, []);

  // Initialize and start animation
  useEffect(() => {
    particlesRef.current = initParticles();
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, animate]);

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      onMouseMove={handleMouseMove}
      style={{
        display: 'block',
        background: backgroundColor,
        borderRadius: '4px'
      }}
    />
  );
};

export default BrainParticleAnimation;

// Usage example:
// <BrainParticleAnimation
//   width={window.innerWidth}
//   height={window.innerHeight}
//   particleCount={100}
//   connectionDistance={150}
//   className="brain-animation"
// />
