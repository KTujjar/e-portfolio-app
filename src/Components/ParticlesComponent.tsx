// src/components/ParticlesComponent.tsx
import React, { useEffect } from 'react';

// Import the JavaScript function
import { initParticles } from './particles';

const ParticlesComponent: React.FC = () => {
  useEffect(() => {
    // Initialize particles on component mount
    initParticles('particlesCanvas');
  }, []);

  return (
    <div className="particles-container">
      <canvas id="particlesCanvas" className="particles-canvas"></canvas>
    </div>
  );
};

export default ParticlesComponent;