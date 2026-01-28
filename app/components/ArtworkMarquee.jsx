import React, { useEffect, useRef } from 'react';

const ArtworkMarquee = () => {
  const imgRefs = useRef([]);
  
  const images = [
    "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/head11.jpg?v=1769614906",
    "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/head10.jpg?v=1769614748",
    "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/head07.jpg?v=1769613075",
    "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/head05.jpg?v=1769614823", 
    "https://cdn.shopify.com/s/files/1/0626/2253/1645/files/head04.jpg?v=1769613103",
  ];

  const displayImages = [...images, ...images];

  useEffect(() => {
    const rotations = images.map(() => Math.floor(Math.random() * 7) - 3);
    
    imgRefs.current.forEach((img, index) => {
      if (img) {
        const rotation = rotations[index % images.length];
        img.style.transform = `rotate(${rotation}deg)`;
      }
    });
  }, [images.length]);

  return (
    <section>
      <article className="section-header article-section">
        <h3 className="section-heading">Portraits</h3>
      </article>
      <div className="marquee-container">
        <div className="photo-banner">
          {displayImages.map((src, index) => (
            <a 
              key={index} 
              href={src} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                ref={el => imgRefs.current[index] = el}
                className="slider-box"
                src={src}
                alt={`portrait-${index}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworkMarquee;