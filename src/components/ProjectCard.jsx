import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function ProjectCard({ title, description, image }) {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { rotationY: 180, duration: 0.5, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotationY: 0, duration: 0.5, ease: 'power2.out' });
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-64 h-80 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg perspective-1000"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Front Face */}
      <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
      </div>
      {/* Back Face */}
      <div
        className="absolute w-full h-full backface-hidden bg-white bg-opacity-20 backdrop-blur-md rounded-xl flex flex-col items-center justify-center p-4"
        style={{ transform: 'rotateY(180deg)' }}
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-white mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
