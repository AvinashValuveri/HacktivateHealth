import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Schedule() {
  const schedule = [
    {
      day: "Saturday, April 12",
      events: [
        { time: "9:00 AM", title: "Check-in Opens", location: "2nd floor" },
        { time: "10:00 AM", title: "Opening Ceremony", location: "Multipurpose Area" },
        { time: "11:00 AM", title: "Team Formation & Healthcare Challenge Presentations", location: "Multipurpose Area" },
        { time: "1:00 PM", title: "Lunch & Healthcare Industry Panel", location: "Presentation Area" },
        { time: "2:00 PM", title: "Workshop: AI in Healthcare", location: "Multipurpose Area" },
        { time: "4:00 PM", title: "Workshop: Medical Data Security", location: "2nd floor" },
        { time: "5:00 PM", title: "Workshop: Health Disparities", location: "2nd floor" },
        { time: "6:00 PM", title: "Dinner & Networking", location: "Multipurpose Area" },
        { time: "9:00 PM", title: "Mentor Check-ins", location: "2nd floor" }
      ]
    },
    {
      day: "Sunday, April 13",
      events: [
        { time: "10:00 AM", title: "Breakfast and Practice Presentations", location: "Conference Rooms" },
        { time: "12:00 PM", title: "Workshop: Wearables & Mobile Health Tech", location: "2nd Floor" },
        { time: "1:00 PM", title: "Hacking Ends; Judging Begins", location: "2nd Floor" },
        { time: "1:30 PM", title: "Project Expo", location: "2nd floor" },
        { time: "2:00 PM", title: "Final Presentations and Awards Ceremony", location: "Multipurpose Area" },
      ]
    }
  ];

  return (
    <section id="schedule" className="py-16 bg-cwru-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Event Schedule"
            subtitle="Two days of healthcare innovation and collaboration"
          />
        </AnimatedSection>
        
        <div className="mt-12 space-y-8">
          {schedule.map((day, index) => (
            <AnimatedSection key={index}>
              <AnimatedBox className="hover:scale-102">
                <div className="bg-[#0a304e] text-white px-6 py-3 rounded-t-lg">
                  <h3 className="text-xl font-semibold">{day.day}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex items-start">
                        <div className="w-24 flex-shrink-0">
                          <span className="font-medium text-[#0a304e]">{event.time}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-[#626262]">{event.location}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedBox>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
