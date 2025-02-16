import React from 'react';
import { Trophy, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Prizes() {
  const prizes = [
    {
      icon: <Trophy className="h-12 w-12 text-[#0a304e]" />,
      title: "Grand Prize",
      amount: "$5,000",
      description: "Best Overall Healthcare Innovation"
    },
    ...['Digital Health & AI', 'Patient Care Innovation', 'Medical Research Tools', 'Open Healthcare'].map(track => ({
      icon: <Award className="h-12 w-12 text-[#0a304e]" />,
      title: track,
      amount: "$2,000",
      description: `Best Solution in ${track} Track`
    }))
  ];

  return (
    <section id="prizes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Prizes & Awards"
            subtitle="Over $13,000 in prizes to be won"
          />
        </AnimatedSection>
        
        <div className="mt-12">
          <AnimatedSection>
            <AnimatedBox className="mb-8 text-center bg-[#f4f4f4] border-[#0a304e]" fullWidth>
              <div className="flex justify-center mb-4">{prizes[0].icon}</div>
              <h3 className="text-2xl font-bold mb-2">{prizes[0].title}</h3>
              <p className="text-3xl font-bold text-[#0a304e] mb-2">{prizes[0].amount}</p>
              <p className="text-[#626262]">{prizes[0].description}</p>
            </AnimatedBox>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {prizes.slice(1).map((prize, index) => (
              <AnimatedSection key={index}>
                <AnimatedBox className="text-center">
                  <div className="flex justify-center mb-4">{prize.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                  <p className="text-3xl font-bold text-[#0a304e] mb-2">{prize.amount}</p>
                  <p className="text-[#626262]">{prize.description}</p>
                </AnimatedBox>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}