import React from 'react';
import { Brain, Heart, Microscope, Stethoscope } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Tracks() {
  const tracks = [
    {
      icon: <Brain className="h-12 w-12 text-[#0a304e]" />,
      title: "Digital Health & AI",
      description: "Develop AI-powered solutions for healthcare diagnostics, patient care, and medical data analysis."
    },
    {
      icon: <Heart className="h-12 w-12 text-[#0a304e]" />,
      title: "Patient Care Innovation",
      description: "Create solutions to improve patient experience, monitoring, and healthcare delivery systems."
    },
    {
      icon: <Microscope className="h-12 w-12 text-[#0a304e]" />,
      title: "Medical Research Tools",
      description: "Build tools to accelerate medical research, data visualization, and laboratory processes."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-[#0a304e]" />,
      title: "Open Healthcare Track",
      description: "Design any innovative solution that addresses healthcare challenges and improves medical outcomes."
    }
  ];

  return (
    <section id="tracks" className="py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Competition Tracks"
            subtitle="Choose your path to healthcare innovation"
          />
        </AnimatedSection>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <AnimatedSection key={index}>
              <AnimatedBox>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#f4f4f4] rounded-lg">
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-[#0a304e]">{track.title}</h3>
                </div>
                <p className="text-[#626262] text-lg">{track.description}</p>
              </AnimatedBox>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}