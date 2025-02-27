
import React from 'react';
import { ArrowDownToLine, ArrowRight, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const skills = [
    "JavaScript/TypeScript", "React.js", "Next.js", "Node.js", 
    "Solidity", "Web3.js/Ethers.js", "Blockchain Development",
    "Smart Contracts", "DeFi", "NFTs", "Tailwind CSS", "MongoDB",
    "PostgreSQL", "GraphQL", "REST APIs", "AWS", "Docker"
  ];

  const experiences = [
    {
      title: "Senior Blockchain Developer",
      company: "DeFi Labs",
      period: "2021 - Present",
      description: "Developing and auditing smart contracts for DeFi protocols. Building user interfaces for decentralized applications with React and Web3 libraries."
    },
    {
      title: "Full Stack Developer",
      company: "FinTech Solutions",
      period: "2018 - 2021",
      description: "Designed and implemented financial applications with React, Node.js, and SQL databases. Integrated with financial APIs and payment gateways."
    },
    {
      title: "Frontend Developer",
      company: "Web Innovators",
      period: "2016 - 2018",
      description: "Created responsive and accessible user interfaces using modern JavaScript frameworks and CSS preprocessors."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2016",
      description: "Specialized in Distributed Systems and Advanced Algorithms."
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Engineering College",
      year: "2014",
      description: "Graduated with honors. Focus on software engineering and data structures."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary mb-4 animate-fade-in">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Krishna Chaitanya Kattoju
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Full Stack Developer specializing in Web3 and Finance
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg leading-relaxed mb-5">
              I'm a passionate full stack developer with extensive experience in modern web technologies and a focus on blockchain applications and financial systems. With a strong foundation in both frontend and backend development, I create robust, user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My journey in web3 began several years ago when I recognized the transformative potential of blockchain technology. Since then, I've been building decentralized applications, smart contracts, and bridges between traditional finance and the emerging DeFi ecosystem.
            </p>
            <div className="flex justify-center mt-8">
              <a
                href="/resume.pdf"
                download="Krishna_Chaitanya_Resume.pdf"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <ArrowDownToLine size={18} />
                <span>Download My Resume</span>
              </a>
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
          
          {/* Experience Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase size={22} className="text-primary" />
              <span>Work Experience</span>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm font-medium bg-accent px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Education Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap size={22} className="text-primary" />
              <span>Education</span>
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm font-medium bg-accent px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-primary mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Certifications Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award size={22} className="text-primary" />
              <span>Certifications</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-5">
                <p className="font-medium">Certified Blockchain Developer</p>
                <p className="text-sm text-muted-foreground">Blockchain Council</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <p className="font-medium">AWS Certified Developer</p>
                <p className="text-sm text-muted-foreground">Amazon Web Services</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <p className="font-medium">Smart Contract Security Auditor</p>
                <p className="text-sm text-muted-foreground">Blockchain Security Alliance</p>
              </div>
              <div className="glass-card rounded-xl p-5">
                <p className="font-medium">Full Stack Web Development</p>
                <p className="text-sm text-muted-foreground">Tech Academy</p>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating on a project? I'd love to hear from you!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
