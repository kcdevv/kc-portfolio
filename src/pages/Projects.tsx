
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Projects: React.FC = () => {
  // Sample projects - replace with real projects
  const projects: Project[] = [
    {
      id: 1,
      title: "DeFi Staking Platform",
      description: "A decentralized finance platform for staking crypto assets and earning rewards with an intuitive UI.",
      technologies: ["React", "Solidity", "Ethers.js", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2940&auto=format&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "A fully-featured NFT marketplace with collection browsing, minting, and trading capabilities.",
      technologies: ["Next.js", "TypeScript", "IPFS", "Web3.js"],
      imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2974&auto=format&fit=crop", 
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Interactive dashboard for financial data visualization with real-time market data integration.",
      technologies: ["React", "D3.js", "Node.js", "Express"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Smart Contract Audit Tool",
      description: "Automated tool for analyzing Solidity smart contracts for security vulnerabilities and best practices.",
      technologies: ["Python", "Solidity", "JavaScript", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=3132&auto=format&fit=crop",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Crypto Portfolio Tracker",
      description: "Web application to track cryptocurrency investments, performance analytics, and tax reporting.",
      technologies: ["Vue.js", "Firebase", "CoinGecko API", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?q=80&w=3072&auto=format&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: 6,
      title: "AI-Powered Trading Bot",
      description: "Algorithmic trading bot using machine learning to execute trades on cryptocurrency markets.",
      technologies: ["Python", "TensorFlow", "FastAPI", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?q=80&w=2940&auto=format&fit=crop",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary mb-4 animate-fade-in">
            Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore my work in web development, blockchain, and financial technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
