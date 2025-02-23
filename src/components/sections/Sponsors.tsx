import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Our Sponsors"
            subtitle="Leading healthcare and technology companies supporting innovation"
          />
        </AnimatedSection>
        
          
          <AnimatedSection>
            <div className="mt-16 text-center">
              <a
                href="#sponsor-contact"
                className="inline-block bg-[#0a304e] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors"
              >
                Interested in Sponsoring? Click Here
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
