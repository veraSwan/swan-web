import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectCard = ({ image, title, description, onClick }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`group cursor-pointer flex flex-col gap-5 h-full scroll-animate hover-premium-card ${isVisible ? 'is-visible' : ''}`} 
      onClick={onClick}
    >
      <div className="overflow-hidden bg-[#1A1C20]/40 rounded-2xl relative aspect-[4/3] w-full">
        <img 
          src={image}
          alt={`${title} - ${description}`}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0E0F12]/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>
      <div className="space-y-1.5 pl-1 flex-grow">
        <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#C05775] transition-colors duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {title}
        </h3>
        <p className="text-[#E5E7EB]/60 font-light tracking-wide text-sm md:text-base transition-colors group-hover:text-[#E5E7EB]/90" style={{ fontFamily: 'Inter, sans-serif' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;