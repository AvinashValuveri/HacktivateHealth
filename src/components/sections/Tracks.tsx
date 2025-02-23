import React from 'react';
import { Scale, Heart, Users, LineChart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Tracks() {
  const tracks = [
    {
      icon: <Scale className="h-12 w-12 text-black" />,
      title: "Access & Affordability",
      description: "Create solutions that make healthcare more accessible and affordable for underserved communities, focusing on telehealth, mobile clinics, or cost-reduction innovations."
    },
    {
      icon: <Heart className="h-12 w-12 text-black" />,
      title: "Cultural Competency",
      description: "Develop tools that bridge cultural and linguistic barriers in healthcare delivery, ensuring culturally sensitive and appropriate care for diverse populations."
    },
    {
      icon: <Users className="h-12 w-12 text-black" />,
      title: "Community Engagement",
      description: "Build platforms that empower communities to participate in their healthcare journey through education, prevention, and community-based health initiatives."
    },
    {
      icon: <LineChart className="h-12 w-12 text-black" />,
      title: "Data-Driven Equity",
      description: "Leverage AI and data analytics to identify, track, and address health disparities, creating predictive models for early intervention in underserved populations."
    }
  ];

  return (
    <section id="tracks" className="py-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Health Equity Innovation Track"
            subtitle="Developing technological solutions to address healthcare disparities and promote equitable access to quality care"
          />
          
          <div className="mt-8 max-w-3xl mx-auto">
            <AnimatedBox className="mb-8">
              <h3 className="text-xl font-bold mb-4">Challenge Statement</h3>
              <p className="text-gray-700 mb-4">
                Your task is to develop a technological solution that directly addresses a key health disparity by leveraging digital tools, AI, data analytics, or other technical innovations. The solution should aim to improve access, affordability, or outcomes for underserved populations.
              </p>
            </AnimatedBox>
          </div>
        </AnimatedSection>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <AnimatedSection key={index}>
              <AnimatedBox>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-black/5 rounded-lg">
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-black">{track.title}</h3>
                </div>
                <p className="text-gray-700 text-lg">{track.description}</p>
              </AnimatedBox>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
