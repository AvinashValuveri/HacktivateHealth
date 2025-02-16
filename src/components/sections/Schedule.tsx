import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import AnimatedBox from '../ui/AnimatedBox';

export default function Schedule() {
  const schedule = [
    {
      day: "Saturday, March 15",
      events: [
        { time: "8:00 AM", title: "Check-in Opens", location: "Tinkham Veale University Center" },
        { time: "9:00 AM", title: "Opening Ceremony", location: "TVUC Ballroom" },
        { time: "10:00 AM", title: "Team Formation & Healthcare Challenge Presentations", location: "TVUC Commons" },
        { time: "11:00 AM", title: "Hacking Begins!", location: "All Floors" },
        { time: "12:00 PM", title: "Lunch & Healthcare Industry Panel", location: "TVUC Ballroom" },
        { time: "2:00 PM", title: "Workshop: AI in Healthcare", location: "Room 101" },
        { time: "4:00 PM", title: "Workshop: Medical Data Security", location: "Room 102" },
        { time: "6:00 PM", title: "Dinner & Networking", location: "TVUC Commons" },
        { time: "8:00 PM", title: "Mentor Check-ins", location: "All Floors" }
      ]
    },
    {
      day: "Sunday, March 16",
      events: [
        { time: "8:00 AM", title: "Breakfast", location: "TVUC Commons" },
        { time: "10:00 AM", title: "Practice Presentations", location: "Breakout Rooms" },
        { time: "12:00 PM", title: "Hacking Ends", location: "All Floors" },
        { time: "1:00 PM", title: "Project Expo", location: "TVUC Ballroom" },
        { time: "3:00 PM", title: "Final Presentations", location: "TVUC Ballroom" },
        { time: "4:30 PM", title: "Awards Ceremony", location: "TVUC Ballroom" }
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