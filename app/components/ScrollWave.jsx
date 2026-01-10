import React, { useState, useEffect } from 'react';
import './ScrollWave.css';

export function ScrollWave() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      
      if (scrollHeight > 0) {
        const percentage = (currentScroll / scrollHeight) * 100;
        setScrollPercent(percentage);
      }
    };

    // Add scroll listener on mount
    window.addEventListener("scroll", handleScroll);
    
    // Initial calculation in case page is already scrolled
    handleScroll();

    // Clean up listener on unmount to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="circle-container">
      <div className="circle">
        <div className="wave"></div>
        {/* Dynamic top position controlled by React state */}
        <div 
          className="wave-empty" 
          style={{ top: `${50 - scrollPercent}%` }}
        ></div>
      </div>
    </div>
  );
};