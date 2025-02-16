import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-black shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            <span className="ml-2 text-lg sm:text-xl font-bold text-white font-mono">CWRU Hackathon</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#tracks">Tracks</NavLink>
              <NavLink href="#schedule">Schedule</NavLink>
              <NavLink href="#prizes">Prizes</NavLink>
              <NavLink href="#sponsors">Sponsors</NavLink>
              <NavLink href="#faq">FAQ</NavLink>
              <a 
                href="https://external-registration-link.com" 
                className="bg-white text-black hover:bg-light px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#about" onClick={handleNavClick}>About</MobileNavLink>
            <MobileNavLink href="#tracks" onClick={handleNavClick}>Tracks</MobileNavLink>
            <MobileNavLink href="#schedule" onClick={handleNavClick}>Schedule</MobileNavLink>
            <MobileNavLink href="#prizes" onClick={handleNavClick}>Prizes</MobileNavLink>
            <MobileNavLink href="#sponsors" onClick={handleNavClick}>Sponsors</MobileNavLink>
            <MobileNavLink href="#faq" onClick={handleNavClick}>FAQ</MobileNavLink>
            <a
              href="https://external-registration-link.com"
              className="block w-full text-center bg-white text-black hover:bg-light px-4 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={handleNavClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm transition-colors duration-300 font-mono"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block text-white hover:bg-white/10 px-3 py-2 rounded-md text-base transition-colors duration-300 font-mono"
      onClick={onClick}
    >
      {children}
    </a>
  );
}