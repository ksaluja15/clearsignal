"use client";
//gets data from /data/posts.ts and does the webpages
import BrainParticleAnimation from '@/app/BrainParticleAnimation';
import { useEffect, useState } from 'react';

function FullScreenBackground() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <BrainParticleAnimation 
        width={dimensions.width}
        height={dimensions.height}
        particleCount={50}
        connectionDistance={300}
        backgroundColor="rgba(0, 0, 0, 0.5)"
        particleColor="#FFFFFF"
        connectionColor="#FF0000"
      />
    </div>
  );
}

export default FullScreenBackground;