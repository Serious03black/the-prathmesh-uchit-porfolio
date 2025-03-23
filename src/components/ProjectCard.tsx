
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  videoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  liveUrl,
  codeUrl,
  videoUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative overflow-hidden h-[400px] rounded-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-70 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.9 : 0.5,
        }}
      />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-300">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-accent/20 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-2 transform transition-transform duration-300"
          style={{
            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p
          className="text-sm text-gray-300 mb-4 line-clamp-2 transform transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0.8,
            transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
            maxHeight: isHovered ? '100px' : '50px',
          }}
        >
          {description}
        </p>
        
        {/* Links */}
        <div
          className="flex gap-3 transform transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-accent/90 hover:bg-accent text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-secondary/80 hover:bg-secondary text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              <Code className="w-4 h-4" /> Code
            </a>
          )}
          
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-mystic/80 hover:bg-mystic text-white px-3 py-2 rounded-md text-sm transition-colors duration-200"
            >
              <Play className="w-4 h-4" /> Video
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
