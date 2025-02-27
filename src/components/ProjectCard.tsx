
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  index,
}) => {
  const delay = `${index * 0.1}s`;

  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group animate-scale-in"
      style={{ animationDelay: delay }}
    >
      <div className="aspect-video w-full overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-primary/5 flex items-center justify-center">
            <span className="text-primary/40 font-mono text-lg">No Image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span>Source</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
