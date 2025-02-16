import React from 'react';
import { Users, Lightbulb, Code, Rocket, Heart, Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function About() {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-[#0a304e]" />,
      title: "Team Building",
      description: "Form teams of up to 4 students or go solo. Network with 300+ student developers from across the region."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#0a304e]" />,
      title: "Innovation",
      description: "Build solutions in healthcare using cutting-edge technologies like AI, IoT, and advanced data analytics."
    },
    {
      icon: <Code className="h-8 w-8 text-[#0a304e]" />,
      title: "Learning",
      description: "Attend workshops led by healthcare industry experts and CWRU faculty on medical innovation."
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#0a304e]" />,
      title: "Launch",
      description: "Get mentorship and resources to turn your healthcare solution into a real-world impact."
    },
    {
      icon: <Heart className="h-8 w-8 text-[#0a304e]" />,
      title: "Community",
      description: "Join a supportive community of healthcare innovators and make lasting connections."
    },
    {
      icon: <Trophy className="h-8 w-8 text-[#0a304e]" />,
      title: "Recognition",
      description: "Showcase your skills and win prizes from leading healthcare organizations."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f4f4f4] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About CWRU Health Hackathon"
            subtitle="A weekend of healthcare innovation and problem-solving at Case Western Reserve University"
          />
        </AnimatedSection>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index}>
              <AnimatedBox className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-[#f4f4f4] rounded-lg inline-block">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0a304e]">
                    {feature.title}
                  </h3>
                  <p className="text-[#626262] flex-grow">{feature.description}</p>
                </div>
              </AnimatedBox>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}