import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function FAQ() {
  const faqs = [
    {
      question: "Who can participate?",
      answer: "Any current college student can participate. You don't need to be a CWRU student or a CS major!"
    },
    {
      question: "How much does it cost?",
      answer: "Nothing! The event is completely free. We'll provide meals, snacks, and swag."
    },
    {
      question: "What if I don't have a team?",
      answer: "No problem! We'll have team formation activities at the start of the event. You can join with up to 4 people total."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, student ID, and anything else you'll need for 36 hours of hacking. We'll provide the rest!"
    },
    {
      question: "Do I need to know how to code?",
      answer: "While coding experience is helpful, it's not required. We welcome students of all skill levels and will have workshops and mentors to help you learn."
    },
    {
      question: "How does judging work?",
      answer: "Industry experts and faculty will serve as project judges. Judges are instructed to evaulate projects based on impact, relevance, feasibility, creativity, and technical execution"
    }
  ];

  return (
    <section id="faq" className="py-16 bg-[#0a304e]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about Hacktivate Health Alpha"
          />
        </AnimatedSection>
        
        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index}>
              <AnimatedBox className="p-4">
                <h3 className="text-lg font-semibold mb-1.5 text-[#0a304e]">{faq.question}</h3>
                <p className="text-[#626262] leading-snug">{faq.answer}</p>
              </AnimatedBox>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
