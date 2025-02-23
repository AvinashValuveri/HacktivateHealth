import React from 'react';
import { Calendar, MapPin, Trophy, ChevronDown } from 'lucide-react';
import CountdownTimer from './ui/CountdownTimer';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-10" />
        <img
          className="w-full h-full object-cover grayscale"
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          alt="Students collaborating"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-mono">
            Hackitivate Health <span className="text-white">Alpha</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white max-w-2xl leading-relaxed font-mono">
            Join Northeast Ohio's premier health hackathon where innovation meets medical excellence. 36 hours of coding, creating, and collaborating.
          </p>
          
          <div className="mb-6 sm:mb-8">
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 text-base sm:text-lg backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-lg font-mono">
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span>April 12-13, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span> Sears think[box]</span>
            </div>
            <div className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span>$3,000 in prizes</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://external-registration-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-white text-black px-6 sm:px-8 py-3 rounded-md font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg font-mono"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-light to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative">Register Now</span>
            </a>
            <a
              href="#learn-more"
              className="group relative inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3 rounded-md font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 font-mono"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative">Learn More</span>
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}
