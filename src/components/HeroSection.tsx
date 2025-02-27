
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const professions = ["Full Stack Developer", "Web3 Enthusiast", "Finance Expert"];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let textElement = textRef.current;
    
    const type = () => {
      const currentText = professions[currentIndex];
      
      if (isDeleting) {
        if (textElement) {
          textElement.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
      } else {
        if (textElement) {
          textElement.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 1500);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % professions.length;
      }
      
      const typingSpeed = isDeleting ? 50 : 100;
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center">
              <div className="inline-block px-3 py-1 bg-accent dark:bg-accent/50 rounded-full text-sm font-medium text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Welcome to my portfolio
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="animate-slide-right" style={{ animationDelay: '0.4s', display: 'block' }}>Hi, I'm Krishna Chaitanya</span>
              <div className="h-1.5 mt-4 mb-2"></div>
              <span className="text-primary animate-slide-right" style={{ animationDelay: '0.6s', display: 'inline-block' }}>
                <span ref={textRef}></span>
                <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse"></span>
              </span>
            </h1>
            
            <p className="text-lg text-foreground/70 max-w-2xl animate-slide-right" style={{ animationDelay: '0.8s' }}>
              Passionate about building seamless digital experiences with modern technologies.
              Specialized in full-stack development with expertise in Web3 and Finance applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-right" style={{ animationDelay: '1s' }}>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-primary px-6 py-3 rounded-lg font-medium transition-colors hover:bg-accent/70 dark:bg-accent/30 dark:hover:bg-accent/50"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm animate-float"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-6xl md:text-7xl text-primary/90">
                KC
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
