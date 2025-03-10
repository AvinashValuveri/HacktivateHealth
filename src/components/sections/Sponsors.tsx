import React from 'react';
import { Building2, Users, Briefcase, Heart, Network, Lightbulb, Presentation, Receipt } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Sponsors() {
  const benefits = [
    {
      icon: <Building2 className="h-8 w-8 text-black" />,
      title: "Brand Visibility",
      description: "Gain exposure to top students, developers, and innovators passionate about healthcare solutions."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-black" />,
      title: "Industry Leadership",
      description: "Position your organization as a leader in health equity and technological innovation."
    },
    {
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Talent Recruitment",
      description: "Connect with and mentor future healthcare tech leaders."
    },
    {
      icon: <Heart className="h-8 w-8 text-black" />,
      title: "Community Impact",
      description: "Support cutting-edge solutions that address real-world health disparities."
    },
    {
      icon: <Network className="h-8 w-8 text-black" />,
      title: "Networking Opportunities",
      description: "Engage with healthcare professionals, researchers, and tech innovators."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-black" />,
      title: "Product & Research Collaboration",
      description: "Explore new ideas and partnerships for future development."
    },
    {
      icon: <Presentation className="h-8 w-8 text-black" />,
      title: "Custom Engagement",
      description: "Sponsor workshops, mentorship sessions, or branded challenges."
    },
    {
      icon: <Receipt className="h-8 w-8 text-black" />,
      title: "Tax-Deductible Sponsorship",
      description: "Eligible for contributions supporting educational and social impact initiatives."
    }
  ];

  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Sponsorship Benefits"
            subtitle="Partner with us to drive innovation in health equity"
          />
        </AnimatedSection>
        
        <div className="mt-12">
          {/* Sponsor logos section (commented out for now)
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[...Array(10)].map((_, i) => (
              <AnimatedSection key={i}>
                <AnimatedBox className="w-48 h-24 flex items-center justify-center">
                  <span className="text-[#626262] text-sm">Sponsor Logo</span>
                </AnimatedBox>
              </AnimatedSection>
            ))}
          </div>
          */}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index}>
                <AnimatedBox className="h-full">
                  <div className="flex items-start">
                    <div className="p-2 bg-black/5 rounded-lg mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-black">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </AnimatedBox>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection>
            <div className="mt-16 text-center">
              <a
                href="mailto:avinash@hacktivatehealth.org"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-black/90 transition-colors"
              >
                Become a Sponsor
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
