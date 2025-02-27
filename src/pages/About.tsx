import React from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const skills = [
    "JavaScript/TypeScript",
    "Python",
    "C++",
    "React.js",
    "Next.js",
    "React Native",
    "Node.js",
    "Express.js",
    "Hono",
    "Web3.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "GraphQL",
    "REST APIs",
    "AWS",
    "Cloudflare Workers",
    "Docker",
    "Kubernetes",
    "Redis",
    "CI/CD (GitHub Actions, Jenkins)",
    "WebSockets",
    "Web Scraping",
    "Tailwind CSS",
    "Turborepo",
  ];

  const experiences = [
    {
      title: "Open Source Contributor",
      company: "GirlScript Foundation",
      period: "10/2024 - 11/2024",
      description:
        "Contributed to open-source projects by developing and optimizing full-stack web applications using the MERN stack. Worked on building dynamic user interfaces, improving API performance, and enhancing code quality.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "TKR College of Engineering & Technology",
      year: "2022 - Present",
      description:
        "Studying core computer science subjects, including Data Structures, Algorithms, Web Development, and Distributed Systems.",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Vagdevi Junior College",
      year: "2022",
      description:
        "Graduated with 92.7% in Mathematics, Physics, and Chemistry (MPC). Strong foundation in analytical problem-solving and logical reasoning.",
    },
  ];

  const certifications = [
    { title: "Python for Datascience", issuer: "NPTEL" },
    { title: "Automate Cybersecurity Tasks using Python", issuer: "Coursera" },
    {
      title: "Introduction to Programming in C",
      issuer: "NPTEL",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm font-medium text-primary mb-4 animate-fade-in">
            About Me
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Krishna Chaitanya Kattoju
          </h1>
          <p
            className="text-lg text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Developer specializing in Web3 and Finance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <section
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-lg leading-relaxed mb-5">
              I'm a passionate full-stack developer with expertise in modern web
              technologies, specializing in building scalable and user-friendly
              applications. With a strong foundation in both frontend and
              backend development, I create seamless digital experiences that
              solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              My journey in tech started with a deep interest in web
              development, which later expanded to real-time applications, cloud
              computing, and distributed systems. I enjoy working on innovative
              projects, from interactive web platforms to backend
              infrastructure, ensuring efficiency and scalability.
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
          <section
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
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
          <section
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
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
          <section
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
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
          <section
            className="mb-16 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award size={22} className="text-primary" />
              <span>Certifications</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card rounded-xl p-5">
                  <p className="font-medium">{cert.title}</p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaborating on a project? I'd love to hear from
              you!
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
