
import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <div 
          key={location.pathname}
          className={`animate-fade-in ${isHome ? 'pt-0' : 'pt-24'}`}
        >
          {children}
        </div>
      </main>
      <footer className="py-6 border-t border-border/40">
        <div className="container flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Krishna Chaitanya Kattoju. All rights reserved.
          </p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Layout;
