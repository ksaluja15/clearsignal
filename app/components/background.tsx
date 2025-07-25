"use client";
//gets data from /data/posts.ts and does the webpages
import BrainParticleAnimation from '@/app/components/BrainParticleAnimation';
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
        particleCount={100}
        connectionDistance={150}
        backgroundColor="rgba(0, 0, 0, 1)"
        particleColor="#0e7fff"
        connectionColor="#FFFFFF"
      />
    </div>
  );
}

export default FullScreenBackground;