import React from "react";
import ProjectCard from "@/components/ProjectCard";

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
  const projects: Project[] = [
    {
      id: 1,
      title: "DocNest",
      description:
        "A secure document storage platform with Razorpay integration for premium features.",
      technologies: ["MERN", "Razorpay", "AWS S3"],
      githubUrl: "https://github.com/kcdevv/docnest-server"
    },
    {
      id: 2,
      title: "KCDev URL Shortener",
      description:
        "A fast and efficient URL shortener built with Next.js and Prisma (PostgreSQL).",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/kcdevv/url-shortener",
      liveUrl: "https://url.kcdev.tech",
    },
    {
      id: 3,
      title: "TKR Results Bot",
      description:
        "A Telegram bot that fetches student academic results using Node.js and web scraping.",
      technologies: ["Node.js", "Python", "BeautifulSoup", "Telegram API"],
      githubUrl: "https://github.com/kcdevv/tkr-results-bot",
      liveUrl: "https://t.me/kcresultsbot",
    },
    {
      id: 4,
      title: "Realtime Code Collaborator",
      description:
        "A real-time collaborative code editor for developers to work together.",
      technologies: ["React", "Node.js", "WebSockets", "CodeMirror"],
      githubUrl: "https://github.com/kcdevv/editor",
    },
    {
      id: 5,
      title: "KCDev MERN CLI",
      description:
        "A CLI tool for quickly setting up a MERN stack project with best practices.",
      technologies: ["Node.js", "Commander.js", "ESLint", "Prettier"],
      githubUrl: "https://github.com/kcdevv/kcmern-cli",
      liveUrl: "https://www.npmjs.com/package/kcmern-cli",
    },
    {
      id: 6,
      title: "Realtime Chat App",
      description:
        "A MERN-based chat application using WebSockets for instant messaging.",
      technologies: ["MERN", "WebSockets", "WS Package"],
      githubUrl: "https://github.com/kcdevv/chatapp-ws",
    },
    {
      id: 7,
      title: "Solana Faucet",
      description:
        "A faucet for airdropping SOL with wallet integrations like Phantom and Backpack.",
      technologies: ["Solana", "Express", "Web3.js", "Phantom Wallet"],
      githubUrl: "https://github.com/kcdevv/solana-faucet",
      liveUrl: "https://faucet.kcdev.tech",
    },
    {
      id: 8,
      title: "TKRHUB",
      description: "A platform where users share their interview experiences.",
      technologies: ["Node.js", "EJS", "MongoDB"],
      githubUrl: "https://github.com/kcdevv/TKRHUB",
    },
    {
      id: 9,
      title: "Blog App (Medium Clone)",
      description:
        "A blogging platform with a Hono backend and a React frontend, integrated with Prisma.",
      technologies: ["Hono", "React", "Prisma"],
      githubUrl: "https://github.com/kcdevv/blogsite-backend-hono"
    },
    {
      id: 10,
      title: "Decentralized Exchange (DEX)",
      description:
        "A simple example demonstrating how a decentralized exchange works.",
      technologies: ["Node.js", "Express", "Web3.js"],
      githubUrl: "https://github.com/kcdevv/dex",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary mb-4 animate-fade-in">
            Portfolio
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            My Projects
          </h1>
          <p
            className="text-lg text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Explore my work in web development, blockchain, and financial
            technology
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
