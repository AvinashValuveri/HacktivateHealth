import React from 'react';
import { Trophy } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Prizes() {
  const prizes = [
    {
      icon: <Trophy className="h-16 w-16 text-black" />,
      title: "Grand Prize",
      amount: "$1,500",
      description: "Best Overall Health Equity Innovation"
    },
    {
      icon: <Trophy className="h-12 w-12 text-black" />,
      title: "Second Place",
      amount: "$1,000",
      description: "Runner-up Health Equity Solution"
    },
    {
      icon: <Trophy className="h-12 w-12 text-black" />,
      title: "Third Place",
      amount: "$500",
      description: "Third Place Health Equity Solution"
    }
  ];

  return (
    <section id="prizes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Prizes & Awards"
            subtitle="$3,000 in prizes to recognize innovative health equity solutions"
          />
        </AnimatedSection>
        
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid gap-8">
            <AnimatedSection>
              <AnimatedBox className="text-center bg-black/5" fullWidth>
                <div className="flex flex-col items-center">
                  <div className="mb-4">{prizes[0].icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{prizes[0].title}</h3>
                  <p className="text-4xl font-bold text-black mb-2">{prizes[0].amount}</p>
                  <p className="text-gray-700 text-lg">{prizes[0].description}</p>
                </div>
              </AnimatedBox>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-8">
              {prizes.slice(1).map((prize, index) => (
                <AnimatedSection key={index}>
                  <AnimatedBox className="text-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-4">{prize.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                      <p className="text-3xl font-bold text-black mb-2">{prize.amount}</p>
                      <p className="text-gray-700">{prize.description}</p>
                    </div>
                  </AnimatedBox>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          <AnimatedSection>
            <div className="mt-12 text-center">
              <p className="text-gray-700 text-lg">
                All winning teams will also receive mentorship opportunities, products, and potential internship interviews with our sponsor organizations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
