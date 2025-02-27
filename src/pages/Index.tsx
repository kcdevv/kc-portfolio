
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { ArrowRight, Code, BriefcaseBusiness, Shield, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  // Sample tech stack
  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'NextJS', icon: '▲' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Blockchain', icon: '🔗' },
    { name: 'Solidity', icon: '💎' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'EthersJS', icon: '🔷' },
  ];

  return (
    <>
      <HeroSection />
      
      {/* Skills Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">What I Do</h2>
            <p className="text-lg text-muted-foreground">
              Crafting exceptional digital experiences with cutting-edge technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Building responsive, performant web applications with modern frameworks and best practices.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web3 & Blockchain</h3>
              <p className="text-muted-foreground">
                Developing decentralized applications and smart contracts for the next generation of the web.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <BriefcaseBusiness className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">FinTech Solutions</h3>
              <p className="text-muted-foreground">
                Creating secure and efficient financial applications with deep domain expertise.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">My Tech Stack</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="glass-card px-5 py-3 rounded-lg flex items-center gap-2 animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Some of my recent work in web development, blockchain, and fintech
              </p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 group"
            >
              View All Projects
              <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Placeholder for projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div 
                key={index}
                className="glass-card rounded-xl h-64 flex items-center justify-center animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <p className="text-muted-foreground">Project Preview {index}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to help bring your ideas to life with clean code and beautiful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-medium transition-colors hover:bg-accent/70"
              >
                <span>See My Work</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
