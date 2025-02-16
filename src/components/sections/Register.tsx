import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    major: '',
    year: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (to be implemented)
    console.log('Form submitted:', formData);
    alert('Thanks for registering! We\'ll be in touch soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="register" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Register Now"
          subtitle="Join us for 36 hours of innovation and fun"
        />
        
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring-[#990000]"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring-[#990000]"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
              <input
                type="text"
                name="university"
                id="university"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring-[#990000]"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="major" className="block text-sm font-medium text-gray-700">Major</label>
              <input
                type="text"
                name="major"
                id="major"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring-[#990000]"
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
              <select
                name="year"
                id="year"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring-[#990000]"
                onChange={handleChange}
              >
                <option value="">Select year</option>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
                <option value="Graduate">Graduate</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Programming Experience</label>
              <select
                name="experience"
                id="experience"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#990000] focus:ring-[#990000]"
                onChange={handleChange}
              >
                <option value="">Select experience</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#990000] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-[#7d0000] transition-colors"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}