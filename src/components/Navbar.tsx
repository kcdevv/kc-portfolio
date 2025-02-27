
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { ArrowDownToLine, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-border/40' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <Logo />
            <span className="font-medium text-lg">Krishna Chaitanya</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                <span className="link-underline">{link.name}</span>
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download="Krishna_Chaitanya_Resume.pdf"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
            >
              <ArrowDownToLine size={16} />
              <span>Resume</span>
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden rounded-lg p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 w-full bg-white/95 backdrop-blur-lg border-b border-border animate-slide-down shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-4 rounded-lg text-base transition-colors ${
                    isActive(link.path)
                      ? 'bg-accent text-primary font-medium'
                      : 'text-foreground/80 hover:bg-accent hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                download="Krishna_Chaitanya_Resume.pdf"
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg text-base font-medium transition-all hover:bg-primary/90"
              >
                <ArrowDownToLine size={18} />
                <span>Download Resume</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
