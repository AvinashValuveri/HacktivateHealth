import React from 'react';

interface AnimatedBoxProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function AnimatedBox({ children, className = '', fullWidth = false }: AnimatedBoxProps) {
  return (
    <div 
      className={`
        ${fullWidth ? 'w-full' : 'h-full min-h-[250px]'}
        bg-white p-6 rounded-lg shadow-md 
        hover:shadow-xl transition-all duration-300 
        hover:scale-105 cursor-pointer 
        border border-black/10 hover:border-black
        ${className}
      `}
    >
      {children}
    </div>
  );
}